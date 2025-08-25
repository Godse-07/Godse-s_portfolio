import React from "react";
import Image from "next/image";

const CodingNinjas = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl p-8 hover:shadow-2xl transition-all duration-300">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h2 className="text-xl font-semibold">
            Teaching Assistant at{" "}
            <span className="text-[#f3de8a] underline underline-offset-4">
              Coding Ninjas
            </span>
          </h2>
          <span className="text-sm text-gray-400">Oct 2023 - Nov 2023</span>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-gray-300">
          I worked as a Teaching Assistant at Coding Ninjas, where I assisted
          students in their learning journey, provided support in coding
          challenges, and helped them understand complex programming concepts.
        </p>

        {/* Bullet Points */}
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Solved students’ doubts in DSA</li>
          <li>Conducted 1:1 and group doubt sessions</li>
          <li>Guided students in their coding journey</li>
          <li>Provided support in coding challenges & assignments</li>
        </ul>
      </div>

      {/* Right Side (Images) */}
      <div className="flex flex-col items-center gap-6 w-full md:w-[40%]">
        <Image
          src="/CodingNinja.png"
          alt="Coding Ninjas Logo"
          width={140}
          height={140}
          className="rounded-full border-2 border-gray-700 bg-white p-2 shadow-md"
        />
        <Image
          src="/ta1.jpeg"
          alt="Teaching Assistant"
          width={280}
          height={280}
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default CodingNinjas;
