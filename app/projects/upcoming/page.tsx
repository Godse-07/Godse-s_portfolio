'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col gap-20 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* heading */}
      <motion.h1
        className="text-3xl text-center mt-10"
        style={{ color: "#f3de8a" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Upcoming Projects
      </motion.h1>

      {/* card */}
      <motion.div
        className="min-h-[300px] w-2/3 mx-auto bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* logo and name */}
        <div className="flex flex-col gap-2 text-center">
          <Image
            src={"/TwitBlock.jpg"}
            alt="twitblock"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-xl mt-1" style={{ color: "#f3de8a" }}>
            TwitBlock
          </h1>
        </div>

        {/* white line */}
        <div className="w-[1px] h-32 bg-gray-300 mx-5"></div>

        {/* description */}
        <div className="relative w-2/3 mt-10 group">
          {/* Preview card */}
          <motion.div
            className="h-[150px] p-4 bg-[#1e1f29] rounded-xl text-white shadow-md cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <p>
              TwitBlock is a decentralized Twitter clone that allows users to
              post, like, and retweet messages. It uses blockchain technology to
              ensure that all posts are immutable and censorship-resistant.
              Users can create accounts using their Ethereum wallets...
            </p>
          </motion.div>

          {/* popup on hover */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300"
            style={{ overflow: "auto" }}
          >
            <div className="bg-[#2e2f3a] text-white w-[80%] max-w-3xl p-8 rounded-2xl shadow-2xl m-4">
              <h2 className="text-2xl font-bold mb-4">Description:</h2>
              <p className="mb-6">
                TwitBlock is a decentralized social media platform that
                redefines online authenticity. Built on blockchain, it verifies
                user identity through wallet authentication and logs every post
                immutably on-chain. To combat spam and bots, TwitBlock requires
                a small crypto payment for each tweet, promoting responsible and
                meaningful interactions.
                <br />
                By removing centralized control and tying posts to verified
                wallets, TwitBlock ensures transparency, accountability, and
                user ownership—offering a censorship-resistant space for genuine
                expression.
              </p>

              <h3 className="text-xl font-semibold mb-2">✅ Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  Blockchain Verification: Ensures tweets are posted only from
                  verified wallet addresses.
                </li>
                <li>
                  Micropayment Model: Adds a small cost to post, reducing spam
                  and irrelevant content.
                </li>
                <li>
                  Immutable Tweet Logging: Every tweet is recorded on-chain for
                  transparency and traceability.
                </li>
                <li>
                  User-Centric Design: Focused on ethical posting, user
                  ownership, and content integrity.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">🌟 Why It Matters:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Tackles spam and bot attacks on social platforms.</li>
                <li>
                  Promotes accountability by tying content to decentralized
                  identities.
                </li>
                <li>
                  Empowers freedom of expression without centralized moderation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* TechStack */}
      <motion.div
        className="w-2/3 mx-auto flex justify-center h-[150px] items-center bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl shadow-lg mb-10 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1>Tech Stack</h1>
          <div className="flex gap-8 mt-5">
            <div>
              <Image src={"/Next.js.png"} alt="next js" width={50} height={50} />
              <p className="mt-2">Next js</p>
            </div>
            <div>
              <Image src={"/Solidity.png"} alt="solidity" width={50} height={50} />
              <p className="mt-2">Solidity</p>
            </div>
            <div>
              <Image src={"/Tailwind CSS.png"} alt="tailwind" width={50} height={50} />
              <p className="mt-2">Tailwind CSS</p>
            </div>
            <div>
              <Image src={"/TypeScript.png"} alt="Typescript" width={50} height={50} />
              <p className="mt-2">Typescript</p>
            </div>
            <div>
              <p>And still thinking</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default page;
