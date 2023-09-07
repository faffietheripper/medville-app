"use client";

import React from "react";
import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { chatHrefConstructor, toPusherKey } from "@/lib/utils";

export default function SidebarChatList({ doctors, sessionId }) {
  const router = useRouter();
  const pathname = usePathname();
  const [unseenMessages, setUnseenMessages] = useState([]);
  const [activeChats, setActiveChats] = useState(doctors);

  useEffect(() => {
    if (pathname?.includes("chat")) {
      setUnseenMessages((prev) => {
        return prev.filter((msg) => !pathname.includes(msg.senderId));
      });
    }
  }, [pathname]);

  return (
    <div>
      <ul role="list" className="max-h-[22rem] overflow-y-auto -mx-2 space-y-1">
        {activeChats.sort().map((doctor) => {
          const unseenMessagesCount = unseenMessages.filter((unseenMsg) => {
            return unseenMsg.senderId === doctor.id;
          }).length;

          return (
            <li key={doctor.id}>
              <a
                href={`/patient/chat/${chatHrefConstructor(
                  sessionId,
                  doctor.id
                )}`}
                className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              >
                {doctor.name}
                {unseenMessagesCount > 0 ? (
                  <div className="bg-indigo-600 font-medium text-xs text-white w-4 h-4 rounded-full flex justify-center items-center">
                    {unseenMessagesCount}
                  </div>
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
