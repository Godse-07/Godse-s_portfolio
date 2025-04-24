"use client";
import Autoslider from "@/components/Autoslider";
import Backendslider from "@/components/Backendslider";
import Databaseslider from "@/components/Databaseslider";
import Extraslider from "@/components/Extraslider";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="flex h-full items-center justify-center"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.div className="h-auto w-screen items-center flex flex-col">
        <motion.h1 
          className="text-5xl text-[#f3de8a] mb-10 mt-15"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h1>

        <motion.div 
          className="min-h-[300px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {/*image and frontend text  */}
          <div className="flex flex-col gap-7 ">
            <motion.h1 
              className="text-4xl text-[#f3de8a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Frontend
            </motion.h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/JavaScript.png" alt="js" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/TypeScript.png" alt="ts" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/react.png" alt="react" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Next.js.png" alt="next" height={30} width={30} />
                </motion.div>
              </div>
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Vite.js.png" alt="vite" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image
                    src="/Tailwind CSS.png"
                    alt="tailwind"
                    height={30}
                    width={30}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image
                    src="/Flutter.png"
                    alt="flutter"
                    height={30}
                    width={30}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Dart.png" alt="dart" height={30} width={30} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* line */}
          <motion.div 
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* slider */}
          <motion.div 
            className="p-5 w-1/3 h-[200px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Autoslider />
          </motion.div>
        </motion.div>

        <motion.div 
          className="min-h-[300px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {/*image and backend text  */}
          <div className="flex flex-col gap-7 ">
            <motion.h1 
              className="text-4xl text-[#f3de8a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Backend
            </motion.h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Express.png" alt="express js" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/PHP.png" alt="php" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Node.js.png" alt="node" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Solidity.png" alt="Solidity" height={30} width={30} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* line */}
          <motion.div 
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* slider */}
          <motion.div 
            className="p-5 w-1/3 h-[200px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Backendslider />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="min-h-[300px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {/*image and database text  */}
          <div className="flex flex-col gap-7 ">
            <motion.h1 
              className="text-4xl text-[#f3de8a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Database
            </motion.h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/MongoDB.png" alt="MongoDb" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/MySQL.png" alt="sql" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Firebase.png" alt="firebase" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Sanity.png" alt="sanity" height={30} width={30} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* line */}
          <motion.div 
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* slider */}
          <motion.div 
            className="p-5 w-1/3 h-[200px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Databaseslider />
          </motion.div>
        </motion.div>

        <motion.div 
          className="min-h-[300px] w-2/3 bg-[#1e1f29] mb-10 p-2 rounded-tr-4xl rounded-bl-4xl flex items-center justify-around hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {/*image and tools text  */}
          <div className="flex flex-col gap-7 ">
            <motion.h1 
              className="text-4xl text-[#f3de8a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Tools
            </motion.h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Vercel.png" alt="vercel" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Postman.png" alt="postman" height={30} width={30} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/GitHub (1).png" alt="github" height={30} width={30} />
                </motion.div>
              </div>
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image
                    src="/Git.png"
                    alt="git"
                    height={30}
                    width={30}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image
                    src="/WebStorm.png"
                    alt="WebStorm"
                    height={30}
                    width={30}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Image src="/Visual Studio Code (VS Code).png" alt="Visual Studio Code (VS Code)" height={30} width={30} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* line */}
          <motion.div 
            className="w-[1px] h-32 bg-gray-300 mx-5"
            initial={{ height: 0 }}
            animate={{ height: "8rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* slider */}
          <motion.div 
            className="p-5 w-1/3 h-[200px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Extraslider />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;