"use client";

import { User } from "lucide-react";
import React, { useState } from "react";

export default function DoctorRequestsSidebarOption({
  sessionId,
  initialUnseenRequestCount,
}) {
  const [unseenRequestCount, setUnseenRequestCount] = useState(
    initialUnseenRequestCount
  );

  return (
    <div className="flex justify-center">
      <User className="h-4 w-4" />
      {unseenRequestCount > 0 ? (
        <div className="animate-ping rounded-full w-5 h-5 text-xs flex justify-center items-center text-white bg-indigo-600">
          {unseenRequestCount}
        </div>
      ) : null}
    </div>
  );
}
