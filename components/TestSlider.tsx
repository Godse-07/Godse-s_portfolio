"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = ["/Jest.png"];

const TestSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[150px] overflow-hidden relative rounded-2xl shadow-lg">
      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full flex-shrink-0 relative">
            <Image
              src={img}
              alt={`Slide ${i}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSlider;
