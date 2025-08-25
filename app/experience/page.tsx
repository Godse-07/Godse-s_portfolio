'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CodingNinjas from './internships/CodingNinjas'
import BetterSoftware from './internships/BetterSoftware'

const Page = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-start gap-12 px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.div 
        className="flex items-center justify-center gap-2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl font-semibold text-[#f3de8a] tracking-wide">
          Experience
        </h1>
      </motion.div>

      {/* Internship Cards */}
      <motion.div
        className="w-full max-w-5xl flex flex-col gap-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Coding Ninjas */}
        <motion.div 
          className="bg-[#1e1f29] rounded-3xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8 p-8 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <CodingNinjas />
        </motion.div>

        {/* Better Software */}
        <motion.div 
          className="bg-[#1e1f29] rounded-3xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8 p-8 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <BetterSoftware />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Page
