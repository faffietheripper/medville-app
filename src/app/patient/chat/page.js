import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import TestData from "@/components/TestData/TestData";
import { getDoctorsByUserId } from "@/helpers/get-doctors-by-user-id";
import SidebarChatList from "@/components/SidebarChatList/SidebarChatList";

export default async function Chat() {
  const session = await getServerSession(authOptions);
  console.log("userobject", session.user);

  const doctors = await getDoctorsByUserId(session.user.id);
  console.log("doctorslist", doctors);
  return (
    <div>
      <div className="container px-6 mx-auto">
        <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full ">
          <div className="w-full flex h-[72vh]">
            <div className="hidden md:flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-scroll border-r border-gray-200 bg-white px-6">
              <div className="text-3xl pt-6 font-semibold leading-6 text-black">
                Chats
              </div>

              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  {doctors.length > 0 ? (
                    <div className="text-xs font-semibold leading-6 text-gray-400">
                      Nothing to see here...
                    </div>
                  ) : (
                    <p>nothing to see here..</p>
                  )}

                  <li>
                    <SidebarChatList
                      sessionId={session.user.id}
                      doctors={doctors}
                    />
                  </li>
                  <li className="-mx-6 mt-auto max-w-[50px] flex items-center">
                    <div className="flex flex-1 items-center gap-x-6 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
                      <div className="relative h-8 w-8 bg-gray-50">
                        <Image
                          fill
                          referrerPolicy="no-referrer"
                          className="rounded-full"
                          src={session.user.image || ""}
                          alt="Your profile picture"
                        />
                      </div>

                      <span className="sr-only">Your profile</span>
                      <div className="flex flex-col">
                        <span aria-hidden="true">{session.user.name}</span>
                        <span
                          className="text-xs text-zinc-400"
                          aria-hidden="true"
                        >
                          {session.user.email}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <aside className="max-h-screen container  p-10 overflow-y-scroll  w-full">
              <TestData />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
