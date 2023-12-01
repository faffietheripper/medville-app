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
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                          />
                        </svg>
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
            <div className="flex flex-row space-x-10">
              <Link
                href="/patient/add"
                className="flex items-center space-x-3 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm"
              >
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
                <h5 className="text-sm font-bold text-indigo-700 leading-4 mb-1">
                  Doctors
                </h5>
                <DoctorRequestsSidebarOption
                  sessionId={session.user.id}
                  initialUnseenRequestCount={unseenRequestCount}
                />
              </Link>
              <Link
                href="/patient/calendar"
                className="flex items-center space-x-3 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm"
              >
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>

                <h5 className="text-sm font-bold text-indigo-700 leading-4 mb-1">
                  Calendar
                </h5>
              </Link>

              <Link
                href="/patient/payment"
                className="flex items-center space-x-3 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm"
              >
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>

                <h5 className="text-sm font-bold text-indigo-700 leading-4 mb-1">
                  Payments
                </h5>
              </Link>
            </div>
          </div>
        </div>
        {/* Page title ends */}
      </div>
    </main>
  );
}
