import React from "react";
import Image from "next/image";

const BetterSoftware = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl p-8 hover:shadow-2xl transition-all duration-300">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h2 className="text-xl font-semibold">
            Associate Software Engineer{" "}
            <span className="text-[#f3de8a] underline underline-offset-4">
              Better Software
            </span>
          </h2>
          <span className="text-sm text-gray-400">July 2025 - Sep 2025</span>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-gray-300">
          Developed high-performance, user-centric MERN stack web applications
          that improved user engagement by 15% and reduced page load time by
          20%. As an Associate Software Engineer at Better Software, I focus on
          crafting seamless and intuitive web experiences using React and modern
          development practices. Passionate about clean code, scalable
          architecture, and thoughtful UI/UX design, I strive to deliver
          applications that are both efficient and delightful to use.
        </p>

        {/* Bullet Points */}
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Works with React Js with Typescript</li>
          <li>
            Collaborates with cross-functional teams to deliver high-quality
            software solutions.
          </li>
        </ul>
      </div>

      {/* Right Side (Images) */}
      <div className="flex flex-col items-center gap-6 w-full md:w-[40%] my-auto">
        <Image
          src="/Better_Software.jpeg"
          alt="Better Software Logo"
          width={140}
          height={140}
          className="rounded-full border-2 border-gray-700 bg-white p-2 shadow-md"
        />
      </div>
    </div>
  );
};

export default BetterSoftware;
