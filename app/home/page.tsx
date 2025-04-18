'use client';

import Home_animation from "@/components/Home_animation";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          style={{ color: "#f3de8a" }} 
          className="text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Pushan Mukhopadhyay
        </motion.h1>
        <motion.h2 
          className="text-center border-b-1 mt-2"
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full Stack Developer
        </motion.h2>
      </motion.div>

      <motion.div 
        className="w-2/3 flex flex-col gap-5 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.h2 className="leading-relaxed text-1xl">
            Hi, I am Pushan Mukhopadhyay, a full stack web developer. I build
            elegant, responsive web applications with modern technologies. I am
            currently learning Next.js and started exploring Blockchain domain.
          </motion.h2>
          <motion.h2 className="leading-relaxed text-1xl">
            I am a passionate developer who loves to learn new technologies and
            build projects that make a difference. I am focused on clean code
            and intuitive user experiences.
          </motion.h2>
        </motion.div>

        <motion.div 
          className="flex"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <div className="flex flex-col gap-3">
            <motion.h1 
              style={{ color: "#f3de8a" }} 
              className="text-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Experience
            </motion.h1>
            <motion.h2 className="leading-relaxed text-1xl ml-5">
              I have worked as a Teaching Assistant at{" "}
              <span style={{ color: "#f3de8a" }}>Coding Ninja</span>.
            </motion.h2>
            <motion.div 
              className="ml-10"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <span>&#x2022; I solved 500+ DSA doubts</span>
              <br />
              <span>
                &#x2022; I helped more than 200 students to resolved their doubt
              </span>
              <br />
              <span>
                &#x2022; I helped Coding Ninjas organize coding contests on their platform
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <Home_animation />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
        >
          <motion.h1 
            style={{ color: "#f3de8a" }} 
            className="text-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Writing
          </motion.h1>
          <motion.h2 className="leading-relaxed text-1xl ml-5">
            I have written articles on various topics related to web
            development, programming languages, and technology trends. You can
            find my articles on
            <motion.a
              href="https://medium.com/@mukhopadhyaypushan42"
              className="underline underline-offset-8"
              whileHover={{ color: "#f3de8a" }}
              transition={{ duration: 0.3 }}
            >
              {" "}
              Medium
            </motion.a>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
        >
          <motion.h1
            style={{ color: "#f3de8a" }}
            className="text-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Free Time
          </motion.h1>
          <motion.h2 className="leading-relaxed text-1xl ml-5">
            In my leisure time, I love to play games, watch movies. And one day
            I want to travel India in bike.
          </motion.h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default page;