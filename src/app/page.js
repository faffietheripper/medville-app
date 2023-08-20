import React from "react";
import MobileApp from "@/components/MobileApp/MobileApp";
import MedvilleAi from "@/components/MedvilleAi/MedvilleAi";

export default function Home() {
  return (
    <div className="container px-6 mx-auto">
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full ">
        {/* Place your content here */}
        <MedvilleAi />
        <MobileApp />
      </div>
    </div>
  );
}
