import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignOutButton from "../SignOutButton/SignOutButton";
import DoctorRequestsSidebarOption from "../DoctorRequestsSidebarOption/DoctorRequestsSidebarOption";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { fetchRedis } from "@/helpers/redis";

export default async function PatientHeader() {
  const session = await getServerSession(authOptions);
  console.log("session header", session.user);

  const unseenRequestCount = (
    await fetchRedis(
      "smembers",
      `user:${session.user.id}:incoming_doctor_requests`
    )
  ).length;

  return (
    <main>
      <div className="bg-gray-200">
        {/* Navigation starts */}

        {/* Main */}
        <nav className="w-full mx-auto bg-white shadow relative z-20">
          <div className="justify-between container px-6 h-16 flex items-center lg:items-stretch mx-auto">
            <div className="flex items-center">
              <Link href="/">
                <div className="mr-10 flex items-center">
                  <Image
                    height={50}
                    width={50}
                    className=" rounded-full mr-3"
                    src="/medvillelogo.jpg"
                    alt="logo"
                  />
                  <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight mr-14 hidden lg:block">
                    Medville
                  </h3>
                </div>
              </Link>

              <ul className="pr-32 xl:flex hidden items-center h-full">
                <Link
                  href="/patient"
                  className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal"
                >
                  Home
                </Link>

                <Link
                  href="/patient/appointments"
                  className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gray-800 mx-10 tracking-normal"
                >
                  Appointments
                </Link>
                <Link
                  href="/patient/pharmacies"
                  className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gray-800 mr-10 tracking-normal"
                >
                  Pharmacies
                </Link>
              </ul>
            </div>
            <div className="h-full xl:flex hidden items-center justify-end">
              <div className="h-full flex items-center">
                <div className=" pr-16 h-full flex items-center justify-end border-r" />
                <div className="w-full h-full flex">
                  <Link
                    href="/patient/chat"
                    className=" chatbutton w-16 xl:w-32 h-full flex items-center justify-center xl:border-r"
                  >
                    <div className="relative">
                      <div className="cursor-pointer w-6 h-6 xl:w-auto xl:h-auto text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-messages"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="#718096"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                          <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/patient/requests"
                    className=" chatbutton w-16 xl:w-32 h-full flex items-center justify-center xl:border-r"
                  >
                    <div className="relative">
                      <div className="cursor-pointer w-6 h-6 xl:w-auto xl:h-auto text-gray-600">
                        <DoctorRequestsSidebarOption
                          sessionId={session.user.id}
                          initialUnseenRequestCount={unseenRequestCount}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className=" w-16 xl:w-32 h-full flex items-center justify-center xl:border-r">
                    <div className="relative">
                      <div className="cursor-pointer w-6 h-6 xl:w-auto xl:h-auto text-gray-600">
                        <SignOutButton />
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/patient/profile"
                    className="cursor-pointer w-full flex items-center justify-center relative"
                  >
                    <img
                      className="rounded-full ml-8 h-10 w-10 object-cover"
                      src={session.user.image}
                      alt="Profile picture"
                    />

                    <p className="text-gray-800 ml-2 text-sm ">
                      {session.user.name}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navigation ends */}
        {/* Page title starts */}
        <div className="bg-blue-600 pt-8 pb-16 relative z-10">
          <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex-col flex lg:flex-row items-start lg:items-center">
              <Link href="/patient/gpdetails" className="flex items-center">
                <Image
                  height={50}
                  width={50}
                  className="border-2 shadow border-gray-600 rounded-full mr-3"
                  src="https://cdn.pixabay.com/photo/2017/05/23/17/12/doctor-2337835_1280.jpg"
                  alt="logo"
                />
                <div>
                  <h5 className="text-sm text-white leading-4 mb-1">
                    Dr Micheal Wood
                  </h5>
                  <p className="text-xs text-gray-400 leading-4">
                    Forensic physician
                  </p>
                </div>
              </Link>
            </div>
            <Link href="/patient/add">
              <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        {/* Page title ends */}
      </div>
    </main>
  );
}
