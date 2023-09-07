import { addDoctorValidator } from "@/lib/validations/add-doctor";
import { z } from "zod";
import db from "@/lib/db";
import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body", body);

    const { email: emailToAdd } = addDoctorValidator.parse(body.email);
    console.log("get id", emailToAdd);

    const idToAdd = await fetchRedis("get", `user:email:${emailToAdd}`);

    if (!idToAdd) {
      return new Response("This person does not exist.", { status: 400 });
    }

    const session = await getServerSession(authOptions);

    console.log("session", session);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (idToAdd === session.user.id) {
      return new Response("You cannot add yourself as a doctor", {
        status: 400,
      });
    }

    // check if user is already added
    const isAlreadyAdded = await fetchRedis(
      "sismember",
      `user:${idToAdd}:incoming_doctor_requests`,
      session.user.id
    );

    if (isAlreadyAdded) {
      return new Response("Already invited this user", { status: 400 });
    }

    // check if user is already added
    const isAlreadyDoctors = await fetchRedis(
      "sismember",
      `user:${session.user.id}:doctors`,
      idToAdd
    );

    if (isAlreadyDoctors) {
      return new Response("Already connected with this doctor", {
        status: 400,
      });
    }

    // valid request, send friend request

    await db.sadd(`user:${idToAdd}:incoming_doctor_requests`, session.user.id);

    console.log("session", session);

    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request payload", { status: 422 });
    }

    return new Response("Invalid request", { status: 400 });
  }
}
