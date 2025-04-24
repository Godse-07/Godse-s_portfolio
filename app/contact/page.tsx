'use client';

import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactCode.module.css';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div className='flex justify-center items-center flex-col h-full gap-10'>
      <motion.h1 
        className='text-3xl'
        style={{color: "#f3de8a"}}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>
      
      <motion.p 
        className='text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I&apos;m always excited to connect with like-minded individuals, collaborate on innovative projects, or simply have a good conversation. <br /> Feel free to drop a message!
      </motion.p>
      
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </motion.div>
    </div>
  );
};

export default page;