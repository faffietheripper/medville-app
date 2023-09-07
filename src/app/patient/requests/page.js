import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import React from "react";
import { fetchRedis } from "@/helpers/redis";
import DoctorRequests from "@/components/DoctorRequests/DoctorRequests";

export default async function Requests() {
  const session = await getServerSession(authOptions);

  const incomingSenderIds = await fetchRedis(
    "smembers",
    `user:${session.user.id}:incoming_doctor_requests`
  );

  const incomingDoctorRequests = await Promise.all(
    incomingSenderIds.map(async (senderId) => {
      const sender = await fetchRedis("get", `user:${senderId}`);
      const senderParsed = JSON.parse(sender);

      return {
        senderId,
        senderEmail: senderParsed.email,
      };
    })
  );

  return (
    <div>
      <div className="container px-6 mx-auto">
        <div className="rounded shadow relative bg-white z-10 h-[72vh] overflow-y-scroll p-6 -mt-8 mb-8 w-full ">
          <div className="text-3xl py-6 font-semibold leading-6 text-black">
            Requests
          </div>
          <section>
            <DoctorRequests
              incomingDoctorRequests={incomingDoctorRequests}
              sessionId={session.user.id}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
