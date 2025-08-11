import React from 'react'
import { motion } from "motion/react";

const Navigation = () => {
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between py-2 px-10 bg-[#03045e]">
        <div className="flex items-center gap-2">
          <img className="w-20 h-12" src="./img/logo-king.png" alt="" />
          <motion.h1
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
              ease: "backOut",
            }}
            className="text-3xl font-bold font-titleAll text-[#e9c46a]"
          >
            King Hotel
          </motion.h1>
        </div>
        <div>
          <ul className="flex gap-8 text-xl text-[#caf0f8]">
            <li className="hover:underline">Home</li>
            <li>Rooms</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="py-2 px-4 text-black rounded-xl font-semibold bg-[#e9c46a]">
            Sign In
          </button>
          <button className="py-2 px-4 text-black rounded-xl font-semibold bg-[#e9c46a]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation
