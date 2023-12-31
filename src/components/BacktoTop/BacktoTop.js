"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function BacktoTop() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {BackToTopButton && (
        <button className="fixed bottom-28 right-5 text-4xl" onClick={scrollUp}>
          {" "}
          ☝️{" "}
        </button>
      )}
    </div>
  );
}
