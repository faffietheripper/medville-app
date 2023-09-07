import MedvilleAi from "../../components/MedvilleAi/MedvilleAi";
import MobileApp from "../../components/MobileApp/MobileApp";
import React from "react";

export default async function PatientHome() {
  return (
    <div className="container px-6 mx-auto">
      <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full ">
        <MedvilleAi />
        <MobileApp />
      </div>
    </div>
  );
}
