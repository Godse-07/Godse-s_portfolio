"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center gap-6 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-3xl"
        style={{ color: "#f3de8a" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Completed Projects
      </motion.h1>

      {/* 1st project card */}
      <motion.div
        className="h-[450px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-2xl"
          style={{ color: "#f3de8a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          SpeakToCrack
        </motion.h1>

        {/* logo and details */}
        <div className="flex justify-around items-center">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Image
              src={"/SpeakToCrack.jpg"}
              alt="speakTocrack"
              height={150}
              width={150}
              className="rounded-full"
            />
          </motion.div>

          {/* white line */}
          <motion.div
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ delay: 0.7, duration: 0.5 }}
          ></motion.div>

          {/* details */}
          <motion.div
            className="relative w-2/3 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p>
              SpeakToCrack is an AI-powered mock interview platform designed to
              help users improve their interview skills. Built using Next.js,
              Firebase, and the Gemini AI API, it offers real-time voice-based
              interviews, dynamically generated questions, and structured AI
              feedback.......
            </p>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300"
              style={{ overflow: "auto" }}
            >
              {/* pop out */}
              <div className="bg-[#2e2f3a] text-white w-[80%] max-w-3xl p-8 rounded-2xl shadow-2xl m-4">
                <h2 className="text-2xl font-bold mb-4">Description:</h2>
                <p className="mb-6">
                  SpeakToCrack is an AI-powered mock interview platform designed
                  to simulate real interview experiences. Built with Next.js,
                  Firebase, and Gemini AI, it enables users to participate in
                  voice-based interviews and receive instant, structured
                  feedback. The platform helps candidates enhance their
                  confidence, refine their communication, and identify areas of
                  improvement.
                  <br />
                  SpeakToCrack is your personal AI interviewer, providing
                  real-time scoring, strengths, weaknesses, and final
                  assessments to prepare you for success.
                </p>

                <h3 className="text-xl font-semibold mb-2">✅ Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    AI-Generated Interview Questions: Tailored for technical and
                    HR rounds.
                  </li>
                  <li>
                    Voice-Based Interaction: Simulates real-time interview
                    conversations.
                  </li>
                  <li>
                    Instant Feedback: AI evaluates responses and provides
                    structured insights.
                  </li>
                  <li>
                    Performance Analytics: Scores, strengths, weaknesses, and
                    suggestions.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">
                  🌟 Why It Matters:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Builds interview confidence through realistic practice.
                  </li>
                  <li>
                    Improves communication and articulation under pressure.
                  </li>
                  <li>
                    Provides personalized guidance for continual improvement.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code and Live link */}
        <motion.div
          className="flex justify-around items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link href="https://github.com/Godse-07/SpeakToCrack">
            <span className="text-blue-400 underline hover:text-blue-600">
              Source Code
            </span>
          </Link>
          <Link href="https://speak-to-crack.vercel.app/">
            <span className="text-green-400 underline hover:text-green-600">
              Live Demo
            </span>
          </Link>
        </motion.div>

        {/* TechStack */}
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <Image src={"/Next.js.png"} alt="next js" height={50} width={50} />
            <p>Next js</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/Firebase.png"}
              alt="firebase"
              height={50}
              width={50}
            />
            <p>Firebase</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/Tailwind CSS.png"}
              alt="Tailwind"
              height={50}
              width={50}
            />
            <p>Tailwind css</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/TypeScript.png"}
              alt="typescript"
              height={50}
              width={50}
            />
            <p>TypeScript</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 2nd project */}
      <motion.div
        className="h-[450px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-2xl"
          style={{ color: "#f3de8a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Inno-X
        </motion.h1>

        {/* logo and details */}
        <div className="flex justify-around items-center">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Image
              src={"/InnoX.jpg"}
              alt="innox"
              height={150}
              width={150}
              className="rounded-full"
            />
          </motion.div>

          {/* white line */}
          <motion.div
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ delay: 0.9, duration: 0.5 }}
          ></motion.div>

          {/* details */}
          <motion.div
            className="relative w-2/3 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p>
              Innox is a dynamic platform where innovators can pitch their ideas
              and seamlessly connect with like-minded entrepreneurs. Designed to
              spark collaboration and accelerate startup journeys, Innox
              empowers creators to showcase their visions, get valuable
              feedback, and build meaningful partnerships in a vibrant,
              forward-thinking community........
            </p>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300"
              style={{ overflow: "auto" }}
            >
              {/* pop out */}
              <div className="bg-[#2e2f3a] text-white w-[80%] max-w-3xl p-8 rounded-2xl shadow-2xl m-4">
                <h2 className="text-2xl font-bold mb-4">Description:</h2>
                <p className="mb-6">
                  Innox is a powerful platform built to help innovators pitch
                  their ideas and connect with entrepreneurs, investors, and
                  mentors. Whether you&apos;re a startup founder, a student with a
                  groundbreaking idea, or a builder looking for
                  collaboration—Innox is your launchpad. With real-time
                  networking features, pitch showcases, and community engagement
                  tools, it fuels the journey from concept to collaboration.
                  <br />
                  Innox transforms great ideas into reality by building bridges
                  between creators and changemakers in a vibrant,
                  innovation-driven ecosystem.
                </p>

                <h3 className="text-xl font-semibold mb-2">✅ Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    Idea Pitching Space: Present your startup or project to a
                    curated audience.
                  </li>
                  <li>
                    Entrepreneurial Networking: Connect with founders,
                    investors, and mentors.
                  </li>
                  <li>
                    Feedback Loop: Get valuable suggestions and refine your
                    pitch in real-time.
                  </li>
                  <li>
                    Community Driven: Join a collaborative space built for
                    innovation and growth.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">
                  🌟 Why It Matters:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Accelerates idea-to-execution through real-world
                    connections.
                  </li>
                  <li>
                    Empowers collaboration and mentorship in the startup
                    ecosystem.
                  </li>
                  <li>
                    Creates visibility for ideas that deserve to be built.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code and Live link */}
        <motion.div
          className="flex justify-around items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Link href="https://github.com/Godse-07/InnoX">
            <span className="text-blue-400 underline hover:text-blue-600">
              Source Code
            </span>
          </Link>
          <Link href="https://inno-x-ten.vercel.app/">
            <span className="text-green-400 underline hover:text-green-600">
              Live Demo
            </span>
          </Link>
        </motion.div>

        {/* TechStack */}
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <Image src={"/Next.js.png"} alt="next js" height={50} width={50} />
            <p>Next js</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={"/Sanity.png"} alt="firebase" height={50} width={50} />
            <p>Sanity</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/Tailwind CSS.png"}
              alt="Tailwind"
              height={50}
              width={50}
            />
            <p>Tailwind css</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/TypeScript.png"}
              alt="typescript"
              height={50}
              width={50}
            />
            <p>TypeScript</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 3rd Project */}
      <motion.div
        className="h-[450px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-2xl"
          style={{ color: "#f3de8a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          SafeCircle
        </motion.h1>

        {/* logo and details */}
        <div className="flex justify-around items-center">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Image
              src={"/Safe_circle.jpg"}
              alt="safecircle"
              height={150}
              width={150}
              className="rounded-full"
            />
          </motion.div>

          {/* white line */}
          <motion.div
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ delay: 1.1, duration: 0.5 }}
          ></motion.div>

          {/* details */}
          <motion.div
            className="relative w-2/3 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <p>
              SafeCircle is a women&apos;s safety app designed to provide real-time
              protection, smart alerts, and community support. Built with
              Flutter, the app empowers users to stay secure with features like
              emergency location sharing, instant SOS alerts, and a live map
              that warns about high-crime zones. SafeCircle also includes parent
              and community chat features, enabling users to stay connected with
              trusted contacts during unsafe situations.......
            </p>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300"
              style={{ overflow: "auto" }}
            >
              {/* pop out */}
              <div className="bg-[#2e2f3a] text-white w-[80%] max-w-3xl p-8 rounded-2xl shadow-2xl m-4">
                <h2 className="text-2xl font-bold mb-4">Description:</h2>
                <p className="mb-6">
                  SafeCircle is a women&apos;s safety app built with Flutter,
                  offering real-time protection and peace of mind. It enables
                  users to share their live location, trigger SOS alerts, and
                  stay informed about high-risk areas through an interactive
                  map. With built-in features like parent chat, community
                  groups, and instant emergency communication, SafeCircle
                  creates a digital safety net for women in critical moments.
                  <br />
                  Whether traveling alone or in unfamiliar places, SafeCircle
                  ensures users are always connected to someone they
                  trust—because safety should never be compromised.
                </p>

                <h3 className="text-xl font-semibold mb-2">✅ Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    Live Location Sharing: Instantly alert trusted contacts
                    during emergencies.
                  </li>
                  <li>
                    Smart Crime Map: Notifies users when entering high-crime
                    zones.
                  </li>
                  <li>
                    SOS Button: One-tap emergency alert with real-time updates.
                  </li>
                  <li>
                    Parent & Community Chat: Enables direct communication and
                    support networks.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">
                  🌟 Why It Matters:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Enhances safety through proactive alerts and location
                    monitoring.
                  </li>
                  <li>
                    Builds a supportive community for quick response and
                    coordination.
                  </li>
                  <li>
                    Empowers users with tools to act confidently and
                    independently.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code and Live link */}
        <motion.div
          className="flex justify-around items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <Link href="https://github.com/Godse-07/Woman_safety">
            <span className="text-blue-400 underline hover:text-blue-600">
              Source Code
            </span>
          </Link>
          <Link href="https://drive.google.com/file/d/120LMHyka1yo7ESLv8bFqc0AnDgJpUbfF/view">
            <span className="text-green-400 underline hover:text-green-600">
              Download APK
            </span>
          </Link>
        </motion.div>

        {/* TechStack */}
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <Image
              src={"/Flutter.png"}
              alt="flutter js"
              height={50}
              width={50}
            />
            <p>Flutter</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={"/Dart.png"} alt="dart" height={50} width={50} />
            <p>Dart</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/Firebase.png"}
              alt="firebase"
              height={50}
              width={50}
            />
            <p>Firebase</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 4th project */}
      <motion.div
        className="h-[450px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-2xl"
          style={{ color: "#f3de8a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          FarmGuard
        </motion.h1>

        {/* logo and details */}
        <div className="flex justify-around items-center">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Image
              src={"/FarmGuard.jpg"}
              alt="farmguard"
              height={150}
              width={150}
              className="rounded-full"
            />
          </motion.div>

          {/* white line */}
          <motion.div
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ delay: 1.3, duration: 0.5 }}
          ></motion.div>

          {/* details */}
          <motion.div
            className="relative w-2/3 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <p>
              FarmGuard is an AI-powered agriculture assistant that helps
              farmers detect crop diseases, predict weather, and forecast crop
              prices with up to 98% accuracy. Built with Flutter, it provides
              real-time insights, early precautionary measures, and data-driven
              recommendations to improve crop health, maximize yield, and reduce
              losses. 🚜🌾.........
            </p>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300"
              style={{ overflow: "auto" }}
            >
              {/* pop out */}
              <div className="bg-[#2e2f3a] text-white w-[80%] max-w-3xl p-8 rounded-2xl shadow-2xl m-4">
                <h2 className="text-2xl font-bold mb-4">Description:</h2>
                <p className="mb-6">
                  FarmGuard is a smart agriculture companion app built with
                  Flutter and AI to empower farmers with real-time crop health
                  insights, weather predictions, and market forecasting.
                  Designed to support modern agricultural needs, it uses
                  advanced image recognition to detect crop diseases and
                  provides early precautionary measures. FarmGuard also predicts
                  local weather and estimates crop prices for the next 24 days
                  to help farmers plan ahead and maximize yield.
                  <br />
                  With an accuracy range of 93% to 98%, FarmGuard is more than
                  just an app—it&apos;s your trusted digital farming assistant.
                </p>

                <h3 className="text-xl font-semibold mb-2">✅ Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    AI-Based Crop Disease Detection: Identify problems early
                    with image input.
                  </li>
                  <li>
                    24-Day Crop Price Forecasting: Plan market strategy with
                    predictive analytics.
                  </li>
                  <li>
                    Weather Forecasting: Get location-specific weather updates
                    for better decision-making.
                  </li>
                  <li>
                    Precaution Suggestions: Receive actionable steps to protect
                    and treat your crops.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">
                  🌟 Why It Matters:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Improves crop health and yield through early diagnosis.
                  </li>
                  <li>
                    Empowers farmers with data-driven decisions for better
                    productivity.
                  </li>
                  <li>
                    Reduces losses by preparing for weather and market changes
                    in advance.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code and Live link */}
        <motion.div
          className="flex justify-around items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <Link href="https://github.com/Godse-07/Farmer">
            <span className="text-blue-400 underline hover:text-blue-600">
              Source Code
            </span>
          </Link>
          <Link href="https://drive.google.com/file/d/1BFv2JbluWQ4m-4UL8trnJzX24KqWvb1N/view?usp=drive_link">
            <span className="text-green-400 underline hover:text-green-600">
              Download APK
            </span>
          </Link>
        </motion.div>

        {/* TechStack */}
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <Image src={"/Flutter.png"} alt="flutter" height={50} width={50} />
            <p>Flutter</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={"/Dart.png"} alt="dart" height={50} width={50} />
            <p>Dart</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/Firebase.png"}
              alt="firebase"
              height={50}
              width={50}
            />
            <p>Firebase</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={"/FastAAI.png"} alt="Fastapi" height={50} width={50} />
            <p>FastApi</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 5th project */}

      <motion.div
        className="h-[450px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-center gap-4 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-2xl"
          style={{ color: "#f3de8a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          QMail
        </motion.h1>

        {/* logo and details */}
        <div className="flex justify-around items-center">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <Image
              src={"/Qmail.jpg"}
              alt="qmail"
              height={150}
              width={150}
              className="rounded-full"
            />
          </motion.div>

          {/* white line */}
          <div className="w-[1px] h-32 bg-gray-300 mx-5"></div>

          {/* details */}
          <div className="relative w-2/3 group">
            <p>
              Qmail is a secure and intelligent mailing platform designed for
              fast, authenticated communication. With built-in verification and
              modern encryption, it ensures trusted message exchange—ideal for
              users who prioritize privacy, speed, and smart communication in a
              digital-first world. ✉️🔐.........
            </p>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300"
              style={{ overflow: "auto" }}
            >
              {/* pop out */}
              <div className="bg-[#2e2f3a] text-white w-[80%] max-w-3xl p-8 rounded-2xl shadow-2xl m-4">
                <h2 className="text-2xl font-bold mb-4">Description:</h2>
                <p className="mb-6">
                  Qmail is a secure and intelligent mailing platform designed to
                  streamline digital communication with verified users. Focused
                  on privacy and trust, Qmail uses smart authentication and
                  modern encryption to ensure safe, fast, and reliable message
                  delivery. Ideal for professionals, teams, and organizations,
                  it integrates role-based access and real-time notifications
                  for enhanced productivity.
                  <br />
                  With a clean interface and advanced security measures, Qmail
                  redefines how secure emails should work—fast, verifiable, and
                  tamper-proof.
                </p>

                <h3 className="text-xl font-semibold mb-2">✅ Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>
                    Verified Communication: Only authenticated users can send
                    and receive messages.
                  </li>
                  <li>
                    End-to-End Encryption: Keeps conversations private and
                    secure.
                  </li>
                  <li>
                    Smart Inbox: Prioritizes important emails with AI-powered
                    sorting.
                  </li>
                  <li>
                    Access Control: Role-based message viewing and permission
                    settings.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">
                  🌟 Why It Matters:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Protects against phishing, spam, and unauthorized access.
                  </li>
                  <li>
                    Enhances trust in digital communication for professionals
                    and teams.
                  </li>
                  <li>
                    Increases productivity through smarter, faster, and safer
                    email handling.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Code and Live link */}
        <div className="flex justify-around items-center gap-6">
          <Link href="https://github.com/Godse-07/Quick_mail">
            <span className="text-blue-400 underline hover:text-blue-600">
              Source Code
            </span>
          </Link>
          <Link href="https://drive.google.com/file/d/1W7E4ZkH3hi_LWY4Q3XGHyVoqZs3dSNwK/view">
            <span className="text-green-400 underline hover:text-green-600">
              Video
            </span>
          </Link>
        </div>

        {/* TechStack */}
        <div className="flex justify-center items-center gap-10">
          <div className="flex flex-col gap-2">
            <Image src={"/CSharp.png"} alt="c#" height={50} width={50} />
            <p className="ml-4">C#</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={"/HTML5.png"} alt="html" height={50} width={50} />
            <p>HTML5</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={"/CSS3.png"} alt="css" height={50} width={50} />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={"/MySQL.png"} alt="MySQL" height={50} width={50} />
            <p>MySQL</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default page;
