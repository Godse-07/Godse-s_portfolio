"use client";

import { HandHeart, Newspaper } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <div className="flex w-2/3 items-center justify-center gap-2 mt-5">
        <Newspaper />
        <h1 className="text-3xl text-[#f3de8a]">Article</h1>
      </div>

      <h1>Here are some of my article on Medium. You can checkout <span><button onClick={()=>{
        window.open("https://medium.com/@mukhopadhyaypushan42", "_blank")
      }} className="bg-[#f3de8a] text-black px-2 py-2 rounded-full hover:bg-[#f3de8a]/80 transition-all duration-300 cursor-pointer">my Profile</button></span> also</h1>

      {/* 1st row */}
      <div className="flex w-6/7 h-[410px] items-center justify-around m-5">
        {/* 1st box  */}
        <div className="h-[400px] w-[45%] bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-around gap-4 hover:shadow-2xl transition-all duration-300">
          <img
            src={
              "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Zd6GzjNvtBMyUfxa"
            }
            className="h-[100px] bg-white rounded-full"
          />
          <p className="text-[#f3de8a] underline">
            7 Must Know JavaScript Tips & Tricks 🎈
          </p>
          <p className="text-center">
            Let’s have a look at 7 valuable tips and tricks found in the most
            popular language in the world, JavaScript.
            <br />
            1. Destructuring with Parameters You can use object destructuring
            within function parameters. A popular use case for this would be
            something like event listeners, and gaining access to the target
            property on the event object........
          </p>
          <div className="flex justify-between items-center w-full px-10 pb-2">
            <div className="flex gap-2">
              <HandHeart />
              <p>253</p>
            </div>
            <button
              onClick={() => {
                window.open(
                  "https://medium.com/@mukhopadhyaypushan42/7-must-know-javascript-tips-tricks-905668e09f48",
                  "_blank"
                );
              }}
              className="bg-[#f3de8a] text-black px-4 py-2 rounded-full hover:bg-[#f3de8a]/80 transition-all duration-300"
            >
              Read Article
            </button>
          </div>
        </div>

        {/* 2nd box */}
        <div className="h-[400px] w-[45%] bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-around gap-4 hover:shadow-2xl transition-all duration-300">
          <img
            src={
              "https://miro.medium.com/v2/format:webp/1*r1ckz81ipEFmOWO8zEfUfw.png"
            }
            className="h-[100px] bg-white rounded-full"
          />
          <p className="text-[#f3de8a] underline">
            Best way to solve DSA problems!!- Become a pro
          </p>
          <p className="text-center">
            Solving a DSA (Data Structures and Algorithms) problem can be pretty
            tough. This article should help you understand how to go about
            solving a DSA
            <br />
            Understand the question completely Look at the question and try to
            understand it completely. Make sure to run through the examples to
            verify that your understanding of the problem is correct. How to do
            that? The input should give the r.......
          </p>
          <div className="flex justify-between items-center w-full px-10 pb-2">
            <div className="flex gap-2">
              <HandHeart />
              <p>639</p>
            </div>
            <button
              onClick={() => {
                window.open(
                  "https://medium.com/@mukhopadhyaypushan42/best-way-to-solve-dsa-problems-become-a-pro-ccba897469c1",
                  "_blank"
                );
              }}
              className="bg-[#f3de8a] text-black px-4 py-2 rounded-full hover:bg-[#f3de8a]/80 transition-all duration-300"
            >
              Read Article
            </button>
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex w-6/7 h-[410px] items-center justify-around m-5">
        {/* 1st box  */}
        <div className="h-[400px] w-[45%] bg-[#1e1f29] rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-around gap-4 hover:shadow-2xl transition-all duration-300">
          <img
            src={
              "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*QiGg6l2krK5N95bo"
            }
            className="h-[100px] bg-white rounded-full"
          />
          <p className="text-[#f3de8a] underline">
            How to solve any recursion problem !!!!
          </p>
          <p className="text-center">
            In this article, I am going to share some tips for solving recursion
            problems in easy 4 steps.
            <br />
            This is a large hurdle that hampers students when they learn
            recursion. They try to see what is happening at every single
            function call and try to trace each step in their solution.........
          </p>
          <div className="flex justify-between items-center w-full px-10 pb-2">
            <div className="flex gap-2">
              <HandHeart />
              <p>447</p>
            </div>
            <button
              onClick={() => {
                window.open(
                  "https://medium.com/@mukhopadhyaypushan42/how-to-solve-any-recursion-problem-master-of-solving-recursion-problems-7d55496a450a",
                  "_blank"
                );
              }}
              className="bg-[#f3de8a] text-black px-4 py-2 rounded-full hover:bg-[#f3de8a]/80 transition-all duration-300"
            >
              Read Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
