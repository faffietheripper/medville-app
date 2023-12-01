"use client";

import { User } from "lucide-react";
import React, { useState, useEffect } from "react";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export default function DoctorRequestsSidebarOption({
  sessionId,
  initialUnseenRequestCount,
}) {
  const [unseenRequestCount, setUnseenRequestCount] = useState(
    initialUnseenRequestCount
  );

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`user:${sessionId}:incoming_doctor_requests`)
    );
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:doctors`));

    const doctorRequestHandler = () => {
      setUnseenRequestCount((prev) => prev + 1);
    };

    const addedDoctorHandler = () => {
      setUnseenRequestCount((prev) => prev - 1);
    };

    pusherClient.bind("incoming_doctor_requests", doctorRequestHandler);
    pusherClient.bind("new_doctor", addedDoctorHandler);

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${sessionId}:incoming_doctor_requests`)
      );
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:doctors`));

      pusherClient.unbind("new_doctor", addedDoctorHandler);
      pusherClient.unbind("incoming_doctor_requests", doctorRequestHandler);
    };
  }, [sessionId]);

  return (
    <div className="flex justify-center">
      {unseenRequestCount > 0 ? (
        <div className="animate-ping absolute left-71 top-7 rounded-full w-4 h-4 text-xs flex justify-center items-center text-white bg-indigo-800">
          {unseenRequestCount}
        </div>
      ) : null}
    </div>
  );
}
