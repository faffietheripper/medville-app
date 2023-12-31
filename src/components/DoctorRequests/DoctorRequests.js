"use client";

import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { Check, UserPlus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function DoctorRequests({ incomingDoctorRequests, sessionId }) {
  const [doctorRequests, setDoctorRequests] = useState(incomingDoctorRequests);

  const router = useRouter();

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`user:${sessionId}:incoming_doctor_requests`)
    );
    console.log("listening to ", `user:${sessionId}:incoming_doctor_requests`);

    const doctorRequestHandler = ({ senderId, senderEmail }) => {
      console.log("function got called");
      setDoctorRequests((prev) => [...prev, { senderId, senderEmail }]);
    };

    pusherClient.bind("incoming_doctor_requests", doctorRequestHandler);

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${sessionId}:incoming_doctor_requests`)
      );
      pusherClient.unbind("incoming_doctor_requests", doctorRequestHandler);
    };
  }, [sessionId]);

  const acceptDoctor = async (senderId) => {
    await axios.post("/api/doctors/accept", { id: senderId });

    setDoctorRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    );
    alert("request accepted");
    router.refresh();
  };

  const denyDoctor = async (senderId) => {
    await axios.post("/api/doctors/deny", { id: senderId });

    setDoctorRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    );
    alert("request denied");
    router.refresh();
  };

  return (
    <>
      <div className="text-xl mx-2 py-6 font-semibold leading-6 text-black">
        Doctor Requests
      </div>
      {doctorRequests.length === 0 ? (
        <p className="text-sm text-zinc-500 mx-2">
          No requests at the moment...
        </p>
      ) : (
        doctorRequests.map((request) => (
          <div
            key={request.senderId}
            className="flex flex-col gap-4 items-center border-b-2 p-4"
          >
            <div className="flex gap-x-4">
              <UserPlus className="text-black text-xl" />
              <p className=" text-sm">{request.senderEmail}</p>
            </div>
            <div className="flex gap-x-6">
              <button
                onClick={() => acceptDoctor(request.senderId)}
                aria-label="accept friend"
                className="w-8 h-8 bg-indigo-600 hover:bg-indigo-700 grid place-items-center rounded-full transition hover:shadow-md"
              >
                <Check className="font-semibold text-white w-3/4 h-3/4" />
              </button>

              <button
                onClick={() => denyDoctor(request.senderId)}
                aria-label="deny friend"
                className="w-8 h-8 bg-red-600 hover:bg-red-700 grid place-items-center rounded-full transition hover:shadow-md"
              >
                <X className="font-semibold text-white w-3/4 h-3/4" />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
