"use client";
import React, { useState } from "react";

export default function PersonalDetailsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bio, setBio] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sexAtBirth, setSexAtBirth] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [smoke, setSmoke] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, API calls, etc.
    console.log("Form submitted:", {
      firstName,
      lastName,
      dateOfBirth,
      bio,
      weight,
      height,
      sexAtBirth,
      additionalInfo,
      smoke,
      phone,
      email,
      address,
    });
  };
  return (
    <div className="p-6 mx-auto bg-blue-200 rounded-md shadow-md">
      <div className="w-full bg-white p-10">
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
        >
          Patient Info
        </h1>
        <p
          role="contentinfo"
          className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
        >
          Fill in the data for profile. It will take a couple of minutes.
        </p>
        <h2
          role="heading"
          aria-label="enter Personal data"
          className="text-xl font-semibold leading-7 text-gray-800 mt-10"
        >
          Personal data
        </h2>
        <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
          Your details and place of birth
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                First name
              </label>
              <input
                type="name"
                tabIndex={0}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                aria-label="Enter first name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="William"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Last name
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="Smith"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                tabIndex={0}
                aria-label="Enter email Address"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="smith.william@gmail.com"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Phone number
              </label>
              <input
                type="number"
                tabIndex={0}
                aria-label="Enter phone number"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="+81 839274"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Date of birth
              </label>
              <input
                type
                tabIndex={0}
                aria-label="Enter date of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="28.03.1997"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Place of birth
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="Enter place of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="San Diego, CA, USA"
              />
            </div>
          </div>

          <button
            type="submit"
            aria-label="Next step"
            className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-gray-800 capitalize">
              Save
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
