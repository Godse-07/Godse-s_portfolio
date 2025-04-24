"use client";
import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Home_animation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="ml-25 md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] hidden lg:block"></div>;
  }

  return (
    <div className="ml-25 md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] hidden lg:block">
      <Player 
        src={"/Animation1.json"}
        loop
        autoplay
      />
    </div>
  );
};

export default Home_animation;