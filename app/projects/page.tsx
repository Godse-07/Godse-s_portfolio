"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    projectLogo: "/Merge_Mind.jpg",
    projectName: "MergeMind",
    projectDescription:
      "PR Checker is an AI-powered platform that automatically analyzes GitHub pull requests using the Gemini API. It helps developers improve code quality, documentation, and consistency through actionable insights and health scoring. Built with React for a responsive UI and Node.js for backend processing, it integrates seamlessly with GitHub to fetch PR data, analyze code changes, and provide feedback. The platform supports multiple programming languages and offers personalized recommendations, making it an essential tool for developers aiming to enhance their code review process and maintain high standards in collaborative projects.",
    projectSoureceCode: "https://github.com/Godse-07/MergeMind",
    projectLiveLink: "https://mergemind.me/",
    projectTechStack: ["/Vite.js.png", "/Node.js.png", "/Express.png", "/JavaScript.png", "/MongoDB.png", "/Redis.png", "/Tailwind CSS.png", "/GitHub (1).png", "/Jest.png"],
  },
  {
    projectLogo: "/StreamiFy.png",
    projectName: "StreamiFy",
    projectDescription:
      "Streamify is a modern language exchange platform that connects learners worldwide through real-time chat, video calls, and cultural collaboration. Built with React and Node.js for a responsive and scalable foundation, the platform leverages the Stream Chat and Stream Video SDKs to deliver seamless, high-quality communication experiences. Secure authentication, intuitive UI, and intelligent matching help users find the right partners based on goals and skill levels, while integrated translation and collaboration tools make conversations more engaging and effective. Designed with a scalable architecture, Streamify ensures smooth accessibility across devices, creating a social and interactive ecosystem where users don’t just learn a language—they live it.",
    projectSoureceCode: "https://github.com/Godse-07/StreamiFy",
    projectLiveLink: "https://streamify-jm3a.onrender.com/",
    projectTechStack: ["/Vite.js.png", "/Node.js.png", "/MongoDB.png" , "/Tailwind CSS.png", "/JavaScript.png"],
  },
  {
    projectLogo: "/SpeakToCrack.jpg",
    projectName: "SpeakToCrack",
    projectDescription:
      "SpeakToCrack is an AI-powered mock interview platform designed to help users prepare for real-world interviews by simulating an interactive and adaptive interview environment. Built with Next.js for a fast and responsive frontend and Firebase for secure authentication and real-time data handling, the platform leverages the Gemini AI API to generate domain-specific questions, evaluate user responses, and provide instant, detailed feedback on communication skills, technical accuracy, and overall confidence. The system allows users to track their progress across multiple sessions, ensuring they can identify weak areas and steadily improve their performance, while its scalable architecture ensures seamless accessibility across devices, making interview preparation more personalized, engaging, and effective.",
    projectSoureceCode: "https://github.com/Godse-07/SpeakToCrack",
    projectLiveLink: "https://speak-to-crack.vercel.app/",
    projectTechStack: ["/Next.js.png", "/Firebase.png", "/Tailwind CSS.png", "/TypeScript.png"],
  },
  {
    projectLogo: "/InnoX.jpg",
    projectName: "Inno-X",
    projectDescription:
      "InnoX is a dynamic platform designed to empower innovators and entrepreneurs by providing a seamless space to pitch ideas, receive feedback, and connect with like-minded collaborators. Built using Next.js for a performant and responsive frontend, Sanity for structured content management, and Tailwind CSS for intuitive UI design, the platform enables users to showcase their projects, engage with a community of mentors and peers, and refine their ideas through real-time interactions. With features like curated pitch spaces, networking tools, and personalized dashboards, InnoX fosters collaboration, accelerates idea-to-execution cycles, and helps creators gain visibility, gather actionable insights, and build meaningful partnerships in a structured and innovation-driven environment.",
    projectSoureceCode: "https://github.com/Godse-07/InnoX",
    projectLiveLink: "https://inno-x-ten.vercel.app/",
    projectTechStack: ["/Next.js.png", "/Sanity.png", "/Tailwind CSS.png", "/TypeScript.png"],
  },
  {
    projectLogo: "/Safe_circle.jpg",
    projectName: "SafeCircle",
    projectDescription:
      "SafeCircle is a comprehensive women’s safety application designed to provide real-time protection, smart alerts, and community support for users in potentially unsafe situations. Built using Flutter for a smooth cross-platform experience and Firebase for secure authentication, real-time database, and cloud messaging, the app allows users to share their live location, trigger instant SOS alerts, and monitor high-risk areas through an interactive map. SafeCircle also includes parent and community chat features, enabling trusted contacts to stay informed and respond quickly during emergencies. By combining real-time monitoring, instant communication, and proactive safety alerts, SafeCircle empowers users to navigate their environments with confidence, ensuring personal security and fostering a supportive community for women",
    projectSoureceCode: "https://github.com/Godse-07/Woman_safety",
    projectLiveLink:
      "https://drive.google.com/file/d/120LMHyka1yo7ESLv8bFqc0AnDgJpUbfF/view",
    projectTechStack: ["/Flutter.png", "/Dart.png", "/Firebase.png"],
  },
  {
    projectLogo: "/FarmGuard.jpg",
    projectName: "FarmGuard",
    projectDescription:
      "FarmGuard is an AI-powered agriculture assistant designed to help farmers optimize crop health, predict weather patterns, and forecast market prices for better decision-making. Built with Flutter for a responsive cross-platform experience and integrated with AI-driven models, the application analyzes crop images to detect diseases early, provides actionable recommendations, and predicts crop prices and weather conditions with high accuracy. By delivering real-time insights and data-driven guidance, FarmGuard empowers farmers to take preventive measures, maximize yield, reduce losses, and plan their farming activities efficiently. Its intuitive interface and smart notifications ensure that even users with minimal technical knowledge can leverage advanced agricultural intelligence to improve productivity and sustainability.",
    projectSoureceCode: "https://github.com/Godse-07/Farmer",
    projectLiveLink:
      "https://drive.google.com/file/d/1BFv2JbluWQ4m-4UL8trnJzX24KqWvb1N/view?usp=drive_link",
    projectTechStack: ["/Flutter.png", "/Dart.png", "/Firebase.png", "/FastAPI.png"],
  },
  {
    projectLogo: "/Qmail.jpg",
    projectName: "QMail",
    projectDescription:
      "QMail is a secure and intelligent mailing platform designed to provide fast, reliable, and private communication for individuals and organizations. Built using C#, MySQL, HTML5, and CSS3, the platform incorporates advanced encryption and verification mechanisms to ensure that messages are delivered safely and only accessible to intended recipients. With features like role-based access, end-to-end encryption, and a smart inbox that prioritizes important emails, QMail streamlines digital communication while maintaining high standards of privacy and trust. The platform is tailored for professionals, teams, and enterprises who require secure messaging, efficient workflow management, and real-time notifications, making it an all-in-one solution for modern, safe, and intelligent email communication.",
    projectSoureceCode: "https://github.com/Godse-07/Quick_mail",
    projectLiveLink:
      "https://drive.google.com/file/d/1W7E4ZkH3hi_LWY4Q3XGHyVoqZs3dSNwK/view",
    projectTechStack: ["/MySQL.png", "/NET.png", "/CSharp.png"],
  },
];

const Page = () => {
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

      {/* Render project cards */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Page;
