import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { messageValidator } from "@/lib/validations/message";
import { nanoid } from "nanoid";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    const { text, chatId } = await req.json();
    const session = await getServerSession(authOptions);

    console.log("messagesession", session);

    if (!session) return new Response("Unauthorized", { status: 401 });

    const [userId1, userId2] = chatId.split("--");

    if (session.user.id !== userId1 && session.user.id !== userId2) {
      return new Response("Unauthorized", { status: 401 });
    }

    const doctorId = session.user.id === userId1 ? userId2 : userId1;

    const doctorList = await fetchRedis(
      "smembers",
      `user:${session.user.id}:doctors`
    );
    const isDoctor = doctorList.includes(doctorId);

    if (!isDoctor) {
      return new Response("Unauthorized", { status: 401 });
    }

    const rawSender = await fetchRedis("get", `user:${session.user.id}`);
    const sender = JSON.parse(rawSender);

    const timestamp = Date.now();

    const messageData = {
      id: nanoid(),
      senderId: session.user.id,
      text,
      timestamp,
    };

    const message = messageValidator.parse(messageData);

    // all valid, send the message
    await db.zadd(`chat:${chatId}:messages`, {
      score: timestamp,
      member: JSON.stringify(message),
    });

    return new Response("OK");
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}
