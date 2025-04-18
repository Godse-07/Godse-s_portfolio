"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Home_animation = () => {
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
