'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion' // ✅ Import Framer Motion

const page = () => {
  return (
    <motion.div 
      className='min-h-screen flex flex-col items-center justify-center gap-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
        <motion.div 
          className='flex w-2/3 items-center justify-center gap-2 mt-5'
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
            <h1 className='text-3xl text-[#f3de8a]'>Experience</h1>
        </motion.div>
    
        <motion.div 
          className="h-[450px] w-2/3 bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-around gap-4 hover:shadow-2xl transition-all duration-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
            <div className='flex justify-between items-center w-full px-10 pt-2'>
                <div className='flex'>
                    <h1>Teaching Assistant </h1>
                    <h1>at <span className='text-[#f3de8a] underline underline-offset-8'>Coding Ninjas</span></h1>
                </div>
                <h1>Oct,2023 - Nov,2023</h1>
            </div>
            <div className='w-[80%] flex justify-around items-center'>
                <div className='w-[45%]'>
                    <p className='text-center'>
                        I worked as a Teaching Assistant at Coding Ninjas, where I assist students in their learning journey, provide support in coding challenges, and help them understand complex programming concepts.
                    </p>
                </div>
                <div className="w-[1px] h-32 bg-gray-300"></div>
                <div className='w-[45%] flex items-center justify-center'>
                    <Image src={"/CodingNinja.png"} alt='coding ninja' width={200} height={200} className='rounded-full' />
                </div>
            </div>
            <div>
                <li>Solve doubts of students in DSA</li>
                <li>Conduct doubt sessions</li>
                <li>Help students in their coding journey</li>
                <li>Provide support in coding challenges</li>
            </div>
        </motion.div>

        <motion.div 
          className='h-[450px] w-2/3 bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl flex items-center justify-around gap-4 hover:shadow-2xl transition-all duration-300'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
            <div className='w-[45%] h-[85%]'>
                <img src={"https://media.licdn.com/dms/image/v2/D4D22AQEW-_A04tniCg/feedshare-shrink_800/feedshare-shrink_800/0/1697185912144?e=1748476800&v=beta&t=LR5d4H5euf6ePWwNXEi1NfC8ZbZrMgBUAVP-6nESW0E"} alt='ta1' />
            </div>
            <div className='w-[45%] h-[85%]'>
                <img src={"https://media.licdn.com/dms/image/v2/D4D22AQFRgShvgZrorw/feedshare-shrink_800/feedshare-shrink_800/0/1697470742203?e=1748476800&v=beta&t=qP0YLaOtuQVszfJ_aarPjqbeP-tGojcQmaWSscrk8Cc"} alt='ta2'/>
            </div>
        </motion.div>

        <motion.div 
          className='h-[450px] w-2/3 bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl flex items-center justify-around gap-4 hover:shadow-2xl transition-all duration-300 mb-5'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
            <div className='w-[45%] h-[85%]'>
                <img src={"https://media.licdn.com/dms/image/v2/D4D22AQFTrsxnXY8nMA/feedshare-shrink_1280/feedshare-shrink_1280/0/1698332324723?e=1748476800&v=beta&t=xLQlSrwsjCnEsZ8hyAa4RcPs7rcxdTL8cdxomUOLpGU"} alt='ta3' />
            </div>
        </motion.div>

    </motion.div>
  )
}

export default page
