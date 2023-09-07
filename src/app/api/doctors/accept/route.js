import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";
import { fetchRedis } from "@/helpers/redis";
import db from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();

    const { id: idToAdd } = z.object({ id: z.string() }).parse(body);

    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    // verify both users are not already connected
    const isAlreadyDoctors = await fetchRedis(
      "sismember",
      `user:${session.user.id}:doctors`,
      idToAdd
    );

    if (isAlreadyDoctors) {
      return new Response("Already accepted doctor", { status: 400 });
    }

    //does request exist
    const hasDoctorRequest = await fetchRedis(
      "sismember",
      `user:${session.user.id}:incoming_doctor_requests`,
      idToAdd
    );

    if (!hasDoctorRequest) {
      return new Response("No request has been sent", { status: 400 });
    }

    //adding friend and clearing notification
    await db.sadd(`user:${session.user.id}:doctors`, idToAdd);
    await db.sadd(`user:${idToAdd}:doctors`, session.user.id);
    await db.srem(`user:${session.user.id}:incoming_doctor_requests`, idToAdd);

    return new Response("OK");
  } catch (error) {
    console.log("aceeptdoctorerror", error);

    if (error instanceof z.ZodError) {
      return new Response("Invalid request payload", { status: 422 });
    }

    return new Response("Invalid request", { status: 400 });
  }
}
