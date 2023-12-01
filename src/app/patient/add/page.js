import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { fetchRedis } from "@/helpers/redis";
import AddDoctorButton from "@/components/AddDoctorButton/AddDoctorButton";
import DoctorsGrid from "@/components/DoctorsGrid/DoctorsGrid";
import DoctorRequests from "@/components/DoctorRequests/DoctorRequests";

export default async function AddDoctor() {
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
    <div className="container px-6 mx-auto">
      <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full ">
        <div className="w-full flex h-[72vh]">
          <div className="hidden md:flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-scroll border-r border-gray-200 bg-white px-6">
            <div className="text-3xl pt-6 font-semibold leading-6 text-black">
              <AddDoctorButton />
              <DoctorRequests
                incomingDoctorRequests={incomingDoctorRequests}
                sessionId={session.user.id}
              />
            </div>
          </div>

          <aside className="max-h-screen container  p-10 overflow-y-scroll  w-full">
            <DoctorsGrid />
          </aside>
        </div>
      </div>
    </div>
  );
}
