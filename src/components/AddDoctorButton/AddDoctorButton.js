"use client";

import React, { useState } from "react";
import { addDoctorValidator } from "@/lib/validations/add-doctor";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddDoctorButton() {
  const [showSuccessState, setShowSuccessState] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addDoctorValidator),
  });

  const addDoctor = async (email) => {
    try {
      const validatedEmail = addDoctorValidator.parse({ email });

      await axios.post("/api/doctors/add", {
        email: validatedEmail,
      });

      setShowSuccessState(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email", { message: error.message });
        return;
      }

      if (error instanceof AxiosError) {
        setError("email", { message: error.response?.data });
        return;
      }

      setError("email", { message: "Something went wrong." });
    }
  };

  const onSubmit = (data) => {
    addDoctor(data.email);
  };

  return (
    <div className="border-b-2">
      <h1 className=" pt-4 pb-4 font-bold text-xl">Invite Doctor by Email</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Insert Email Here
        </label>

        <div className="mt-2 flex flex-col gap-4">
          <input
            {...register("email")}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
          <button class=" px-6 py-3 mb-8 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
            Invite
          </button>
        </div>
        <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>
        {showSuccessState ? (
          <p className="mt-1 text-sm text-green-600">Doctor request sent!</p>
        ) : null}
      </form>
    </div>
  );
}
