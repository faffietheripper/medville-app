import PersonalDetailsForm from "@/components/PersonalDetailsForm/PersonalDetailsForm";
import React from "react";

export default function PersonalDetails() {
  return (
    <div className="container px-6 mx-auto">
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full ">
        {/* Place your content here */}
        <PersonalDetailsForm />
      </div>
    </div>
  );
}
