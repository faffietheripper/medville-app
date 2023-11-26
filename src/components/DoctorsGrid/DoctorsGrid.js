import React from "react";
import Image from "next/image";

export default function DoctorsGrid() {
  const doctors = [
    {
      id: 1,
      name: "Tafadzwa Mpofu",
      title: "Forensic Physician",
      email: "tafadzwampofu24@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
    },
    {
      id: 2,
      name: "Jeremy Wilson",
      title: "General Practitioner",
      email: "jwilson95@gmail.com",
      img: "https://cdn.pixabay.com/photo/2023/08/03/15/41/spine-center-in-fremont-8167473_1280.jpg",
    },
    {
      id: 3,
      name: "Michelle Clarkson",
      title: "Head Nurse, Radiology",
      email: "mclarkson@gmail.com",
      img: "https://cdn.pixabay.com/photo/2022/06/14/12/48/medicine-7261808_640.jpg",
    },
    {
      id: 4,
      name: "Tafadzwa Mpofu",
      title: "Physician",
      email: "tafadzwampofu24@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
    },
    {
      id: 5,
      name: "Tafadzwa Mpofu",
      title: "Physician",
      email: "tafadzwampofu24@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
    },
    {
      id: 6,
      name: "Tafadzwa Mpofu",
      title: "Physician",
      email: "tafadzwampofu24@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
    },
  ];
  return (
    <>
      <div className="px-16 mb-16">
        <div>
          <h1 className="text-center pb-9 font-bold text-4xl">
            Available Doctors
          </h1>
        </div>

        <ul className="text-black">
          <li className="grid grid-cols-4 gap-4 gap-y-10  text-3xl md:text-5xl  focus:outline-none focus:ring-2 focus:ring-gray-800">
            {doctors.map((doctor) => (
              <div key={doctor.id}>
                <div class="h-[50vh]">
                  <Image
                    height={900}
                    width={900}
                    alt="Developer"
                    src={doctor.img}
                    class="h-64 w-full object-cover "
                  />

                  <h3 class="mt-4 text-lg font-medium ">{doctor.name}</h3>

                  <p class="text-lg font-medium sm:text-2xl">{doctor.title}</p>
                  <p class="text-sm  ">{doctor.email}</p>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}
