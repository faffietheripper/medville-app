import React from "react";
import Image from "next/image";

import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import { fetchRedis } from "@/helpers/redis";
import SidebarChatList from "@/components/SidebarChatList/SidebarChatList";
import { messageArrayValidator } from "@/lib/validations/message";
import { getDoctorsByUserId } from "@/helpers/get-doctors-by-user-id";
import { getServerSession } from "next-auth";

async function getChatMessages(chatId) {
  try {
    const results = await fetchRedis(
      "zrange",
      `chat:${chatId}:messages`,
      0,
      -1
    );

    const dbMessages = results.map((message) => JSON.parse(message));

    const reversedDbMessages = dbMessages.reverse();

    const messages = messageArrayValidator.parse(reversedDbMessages);

    return messages;
  } catch (error) {
    notFound();
  }
}

export default async function page({ params }) {
  const { chatId } = params;

  const session = await getServerSession(authOptions);

  const { user } = session;

  const [userId1, userId2] = chatId.split("--");

  if (user.id !== userId1 && user.id !== userId2) {
    notFound();
  }

  //list of chats
  const doctors = await getDoctorsByUserId(session.user.id);

  const chatPartnerId = user.id === userId1 ? userId2 : userId1;
  // new

  const chatPartnerRaw = await fetchRedis("get", `user:${chatPartnerId}`);
  const chatPartner = JSON.parse(chatPartnerRaw);
  const initialMessages = await getChatMessages(chatId);
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
                  <li>
                    <div className="text-xs font-semibold leading-6 text-gray-400">
                      Overview
                    </div>
                  </li>
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
              <div className="flex-1 justify-between flex flex-col h-full max-h-[calc(100vh-6rem)]">
                <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                  <div className="relative flex items-center space-x-4">
                    <div className="relative">
                      <div className="relative w-8 sm:w-12 h-8 sm:h-12">
                        <Image
                          fill
                          referrerPolicy="no-referrer"
                          src={chatPartner.image}
                          alt={`${chatPartner.name} profile picture`}
                          className="rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col leading-tight">
                      <div className="text-xl flex items-center">
                        <span className="text-gray-700 mr-3 font-semibold">
                          {chatPartner.name}
                        </span>
                      </div>

                      <span className="text-sm text-gray-600">
                        {chatPartner.email}
                      </span>
                    </div>
                  </div>
                </div>

                <Messages
                  chatId={chatId}
                  chatPartner={chatPartner}
                  sessionImg={session.user.image}
                  sessionId={session.user.id}
                  initialMessages={initialMessages}
                />
                <ChatInput chatId={chatId} chatPartner={chatPartner} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
