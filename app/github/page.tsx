"use client";

import { motion, MotionProps } from "framer-motion";
import { UserCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userDetails, setDetails] = useState<any>(null);

  const getDetails = async () => {
    const details = await fetch("https://api.github.com/users/Godse-07");
    const res = await details.json().catch((err) => console.log(err));
    setDetails(res);
  };

  useEffect(() => {
    getDetails();
  }, []);

  // Mark fadeIn as `any` to avoid strict framer-motion TS type issues
  const fadeIn: MotionProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <div className="flex w-2/3 items-center justify-center">
        <h1 className="text-3xl mb-10 mt-10" style={{ color: "#f3de8a" }}>
          Github Details
        </h1>
        <button
          className="ml-40 bg-[#1e1f29] h-[40px] w-[150px] cursor-pointer"
          onClick={() => {
            router.push("https://github.com/Godse-07");
          }}
        >
          Visit Profile
        </button>
      </div>

      {userDetails ? (
        <>
          <motion.div
            className="h-[200px] w-2/3 mx-auto bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
            {...fadeIn}
          >
            <Image
              src={userDetails.avatar_url}
              alt="userImage"
              height={150}
              width={150}
              className="rounded-full"
            />
            <h1>
              useName:{" "}
              <span className="text-xl" style={{ color: "#f3de8a" }}>
                {userDetails.login}
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="h-[80px] w-2/3 mx-auto bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
            {...fadeIn}
          >
            <p>{userDetails.bio}</p>
          </motion.div>

          <motion.div
            className="h-[80px] w-2/3 mx-auto bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
            {...fadeIn}
          >
            <div className="flex gap-3">
              <UserCheck />
              <p>
                Followers:{" "}
                <span className="text-xl" style={{ color: "#f3de8a" }}>
                  {userDetails.followers}
                </span>
              </p>
            </div>
            <div className="flex gap-3">
              <UserCheck />
              <p>
                Following:{" "}
                <span className="text-xl" style={{ color: "#f3de8a" }}>
                  {userDetails.following}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="h-[250px] w-2/3 mx-auto bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-center hover:shadow-2xl transition-all duration-300"
            {...fadeIn}
          >
            <a
              href="https://git.io/awesome-stats-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://awesome-github-stats.azurewebsites.net/user-stats/Godse-07?cardType=level-alternate&preferLogin=false"
                alt="GitHub Stats"
                width={520}
                height={200}
                unoptimized
              />
            </a>
          </motion.div>
        </>
      ) : (
        <p className="text-3xl">Loading...</p>
      )}
    </div>
  );
};

export default Page;
