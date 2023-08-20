import React from "react";
import Image from "next/image";

export default function MedvilleAi() {
  return (
    <div>
      {" "}
      <div className="flex items-center p-10 justify-around bg-gray-100">
        <div className="flex-1 pr-10">
          <h2 className="text-2xl font-semibold mb-4">
            Medville Telemedicine AI
          </h2>
          <p className="text-lg text-gray-700">
            Experience cutting-edge healthcare with our advanced AI-powered
            telemedicine feature. Our AI can assist in diagnosing and
            recommending treatments, making healthcare more accessible and
            efficient for everyone.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
