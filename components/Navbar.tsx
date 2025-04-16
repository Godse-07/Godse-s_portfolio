import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[35px] items-center">
      <div className="flex w-2/8 gap-3 items-center">
        <Image
          src="/VsCode.png"
          alt="vs code icon"
          width={25}
          height={25}
          style={{ height: "18px", width: "25px", objectFit: "contain" }}
        />

        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>
      <div className="w-2/8 ml-70">
        <span>
            Godse's VsCode
        </span>
      </div>
      <div className="flex gap-2 w-2/8 justify-end mr-2">
        <div className="bg-amber-200 h-[15] w-[15] rounded-full"></div>
        <div className="bg-green-500 h-[15] w-[15] rounded-full"></div>
        <div className="bg-red-600 h-[15] w-[15] rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
