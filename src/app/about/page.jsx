"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* About Page container */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 h-full">
        {/* About me, skills and experience container*/}
        <div className="flex flex-col items-center justify-center gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3 my-20">
          {/* Image and about me container */}
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex gap-4">
              {/* Nikhil Image */}
              <Image
                src={"/nikhil.png"}
                alt="Nikhil"
                width={100}
                height={100}
                className="p-1 rounded-full border-2 border-blue-400 "
              />
              {/* Nikhil details container */}
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-bold text-4xl text-blue-400">
                  Full Stack Developer
                </h1>
                <p className="text-md text-slate-300 font-semibold">
                  Passionate coder and developer.
                </p>
              </div>
            </div>
            {/* About me container */}
            <div className="w-full flex flex-col gap-8">
              <h1 className="font-semibold text-3xl text-blue-400">
                all about me...
              </h1>
              <p className="text-md text-slate-200 text-justify italic">
                Hi, myself Nikhil Sharma, a full-stack developer experienced in
                building web applications using{" "}
                <span className="text-blue-300 font-medium">
                  Next.js, React, Node.js, Express
                </span>{" "}
                and <span className="text-blue-300 font-medium">MongoDB.</span>{" "}
                Additionally, I have expertise in developing mobile applications
                using{" "}
                <span className="text-blue-300 font-medium">React Native</span>.
                I am passionate about coding and enjoy learning new
                technologies. As a team player, I am always eager to learn and
                collaborate on projects involving new technologies.
              </p>
            </div>
          </div>
          {/* My skills container */}
          <div className=""></div>
          {/* My Experience container */}
          <div className=""></div>
        </div>
        {/* Nikhil Model with custom animations and voice over for about me, shown only for big screens */}
        <div className="w-1/3"></div>
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default About;
