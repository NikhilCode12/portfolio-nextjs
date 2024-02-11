"use client";
import Link from "next/link";
import { FaCloudDownloadAlt, FaHandshake } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const texts = ["Web", "Mobile", "M.E.R.N", "Full Stack"];

const Homepage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("React");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const text = texts[currentTextIndex];
      setCurrentText(text);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentTextIndex]);

  return (
    <motion.div
      className="h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 3d model container */}
      <div className="h-1/2 md:h-full md:w-1/2 relative"></div>
      {/* Home text and button container */}
      <div className="h-1/2 md:h-full md:w-1/2 flex flex-col gap-4 md:gap-6 items-center justify-center text-center md:text-left">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Turning Ideas into Reality as{" "}
          <motion.span
            className="text-blue-400"
            key={texts[currentTextIndex]}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85 }}
          >
            {currentText}
          </motion.span>
          {" Developer"}
        </h1>
        {/* Subheading */}
        <p className="text-sm md:text-lg text-blue-300">
          I am a full stack web and react native developer with a passion for
          creating beautiful, functional web and mobile applications.
        </p>
        {/* Buttons */}
        <div className="md:w-full flex gap-4">
          {/* Resume Download Button */}
          <a href={"/resume_nikhil_sharma_2024.pdf"} download>
            <motion.button
              className="flex items-center gap-2 p-2 rounded-lg md:px-4 md:py-2 ring-2 ring-blue-400 bg-blue-400 text-slate-900 hover:bg-blue-500 active:bg-blue-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={spring}
            >
              <p className="text-sm md:text-md font-semibold">Resume</p>
              <motion.span animate={{ y: [0, 5, 0] }}>
                <FaCloudDownloadAlt className="text-slate-900 text-xl" />
              </motion.span>
            </motion.button>
          </a>
          {/* Hire me Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={spring}
              className="flex items-center gap-2 p-2 rounded-lg md:px-4 md:py-2 ring-2 ring-blue-400 hover:bg-slate-800 active:bg-slate-900"
            >
              <p className="text-sm md:text-md font-semibold">Hire Me</p>
              <motion.span animate={{ rotate: [0, 10, -10, 0] }}>
                <FaHandshake className="text-xl" />
              </motion.span>
              {/* <FaArrow */}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
