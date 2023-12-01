import React from "react";
import Image from "next/image";

export default function DoctorsGrid() {
  const doctors = [
    {
      id: 1,
      name: "William Cole",
      title: "Forensic Physician",
      email: "willcole@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
      gender: "Male",
      hospital: "Norfolk & Norwich University Hospital",
      subspecialty: "Neuro-opthalmology",
      availability: "true",
      experience: 15,
    },
    {
      id: 2,
      name: "Jeremy Wilson",
      title: "General Practitioner",
      email: "jwilson95@gmail.com",
      availability: "false",
      img: "https://cdn.pixabay.com/photo/2023/08/03/15/41/spine-center-in-fremont-8167473_1280.jpg",
      gender: "Male",
      hospital: "Norfolk & Norwich University Hospital",
      subspecialty: "Neuro-opthalmology",
      availability: "false",
      experience: 15,
    },
    {
      id: 3,
      name: "Michelle Clarkson",
      title: "Head Nurse, Radiology",
      email: "mclarkson@gmail.com",
      img: "https://cdn.pixabay.com/photo/2022/06/14/12/48/medicine-7261808_640.jpg",
      gender: "Female",
      hospital: "Norfolk & Norwich University Hospital",
      subspecialty: "Neuro-opthalmology",
      availability: "false",
      experience: 15,
    },
    {
      id: 4,
      name: "Tafadzwa Mpofu",
      title: "Physician",
      email: "tafadzwampofu24@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
      gender: "Male",
      hospital: "Norfolk & Norwich University Hospital",
      subspecialty: "Neuro-opthalmology",
      availability: "true",
      experience: 15,
    },
    {
      id: 5,
      name: "Tafadzwa Mpofu",
      title: "Physician",
      email: "tafadzwampofu24@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
      gender: "Male",
      hospital: "Norfolk & Norwich University Hospital",
      subspecialty: "Neuro-opthalmology",
      availability: "true",
      experience: 15,
    },
    {
      id: 6,
      name: "Tafadzwa Mpofu",
      title: "Physician",
      email: "tafadzwampofu24@gmail.com",
      img: "https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710150_1280.jpg",
      gender: "Male",
      hospital: "Norfolk & Norwich University Hospital",
      subspecialty: "Neuro-opthalmology",
      availability: "false",
      experience: 15,
    },
  ];

  return (
    <>
      <div className="px-16 mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center p-6">
          <div className="fixed flex items-start">
            <div className="flex bg-blue-600 text-white shadow rounded">
              <button className="py-3 px-5 flex items-center justify-center text-lg focus:outline-none">
                All Doctors
              </button>
              <button className="py-3 px-5 flex items-center justify-center text-lg focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                My Doctors
              </button>
            </div>
          </div>
        </div>
        <ul className="text-black pt-16">
          <li className="grid grid-cols-1 gap-4 gap-y-10  text-3xl md:text-5xl  focus:outline-none focus:ring-2 focus:ring-gray-800">
            {doctors.map((doctor) => (
              <div key={doctor.id}>
                <div className="bg-blue-600 shadow rounded xl:flex lg:flex w-full">
                  <div className="xl:w-2/5 lg:w-2/5 bg-gray-100  py-8 border-gray-300  xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-24 rounded-full mb-3">
                        <Image
                          className="h-full w-full object-cover rounded-full shadow"
                          src={doctor.img}
                          alt
                          height={900}
                          width={900}
                        />
                      </div>
                      <p className="mb-2 text-lg font-bold text-gray-900 ">
                        {doctor.name}
                      </p>
                      <p className="mb-6 text-sm text-gray-700 ">
                        {doctor.email}
                      </p>
                      <button className="bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 dark:border-gray-200 focus:outline-none">
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div className="xl:w-3/5 lg:w-3/5 px-6 py-8">
                    <div className="flex flex-wrap justify-between">
                      <div className="w-2/5 mb-8">
                        <div className="border-b pb-3">
                          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                            Specialty
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400">
                            {doctor.title}
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5 mb-8">
                        <div className="border-b pb-3">
                          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                            Gender
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400">
                            {doctor.gender}
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5 mb-8">
                        <div className="border-b pb-3">
                          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                            Subspecialty
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400">
                            {doctor.subspecialty}
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5 mb-8">
                        <div className="border-b pb-3">
                          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                            Experience
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-400">
                            {doctor.experience} years
                          </p>
                        </div>
                      </div>
                      <div className="w-5/5">
                        <div className="flex space-x-6 pb-3">
                          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                            Availability :
                          </p>
                          {doctor.availability === "true" ? (
                            <span className="whitespace-nowrap bg-green-100 px-2.5 py-1 text-sm text-green-700">
                              Available
                            </span>
                          ) : (
                            <span className="whitespace-nowrap  bg-red-100 px-2.5 py-1 text-sm text-reds-700">
                              Not Available
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}
