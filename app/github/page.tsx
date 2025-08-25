"use client";

import { motion } from "framer-motion";
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

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
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
            className="h-[250px] w-2/3 mx-auto bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
            {...fadeIn}
          >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=Godse-07&theme=vue&hide_border=false&include_all_commits=false&count_private=false"
              alt="GitHub Stats"
              width={500}
              height={120}
              unoptimized={true}
            />
          </motion.div>

          <motion.div
            className="h-[250px] w-2/3 mx-auto bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
            {...fadeIn}
          >
            <Image
              src="https://camo.githubusercontent.com/cc79e8876fa8ed2292fe074e592cff5b51853c47d8dff3291b5e3843f1ace44b/68747470733a2f2f6e69727a616b2d73747265616b2d73746174732e76657263656c2e6170702f3f757365723d476f6473652d3037267468656d653d76756526686964655f626f726465723d66616c7365"
              alt="GitHub Streak Stats"
              width={500}
              height={120}
              unoptimized={true}
            />
          </motion.div>
        </>
      ) : (
        <p className="text-3xl">Loading...</p>
      )}
    </div>
  );
};

export default Page;
