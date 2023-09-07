import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <div className="container px-6 mx-auto">
        <div className="rounded shadow relative bg-white z-10 h-[72vh] overflow-y-scroll p-6 -mt-8 mb-8 w-full ">
          <div className="text-3xl py-6 font-semibold leading-6 text-black">
            User Profile
          </div>

          <section>
            <div className="mx-2 md:mx-14 pt-12">
              <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
                <Link
                  href="/patient/profile/personaldetails"
                  aria-label="View Item"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image
                      width={900}
                      height={900}
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_1280.jpg"
                      alt=""
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium tracking-wide text-white">
                        Personal Details
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/patient/profile/medicalhistory"
                  aria-label="View Item"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image
                      width={900}
                      height={900}
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://cdn.pixabay.com/photo/2023/08/03/15/41/spine-center-in-fremont-8167473_1280.jpg"
                      alt=""
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium tracking-wide text-white">
                        Medical History
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/patient/profile/testresults"
                  aria-label="View Item"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image
                      width={900}
                      height={900}
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src="https://cdn.pixabay.com/photo/2022/02/07/19/08/ct-scan-7000111_1280.jpg"
                      alt=""
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium tracking-wide text-white">
                        Test Results
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <div className="text-3xl py-6 font-semibold leading-6 text-black">
            Account Settings
          </div>
        </div>
      </div>
    </div>
  );
}
