import React from "react";
import AddDoctorButton from "@/components/AddDoctorButton/AddDoctorButton";

import DoctorsGrid from "@/components/DoctorsGrid/DoctorsGrid";

export default function AddDoctor() {
  return (
    <div className="container px-6 mx-auto">
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full ">
        {/* Place your content here */}
        <AddDoctorButton />
        <DoctorsGrid />
      </div>
    </div>
  );
}
