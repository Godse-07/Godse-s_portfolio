import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactCode.module.css';

import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen gap-10'>
      <h1 className='text-3xl' style={{color: "#f3de8a"}}>Contact Me</h1>
      <p className='text-center'>I'm always excited to connect with like-minded individuals, collaborate on innovative projects, or simply have a good conversation. <br /> Feel free to drop a message!</p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};


export default page;