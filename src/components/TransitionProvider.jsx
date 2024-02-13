"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-gray-900">
        <motion.div
          className="hidden md:flex h-screen w-screen fixed bg-slate-800 rounded-b-[25px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="hidden md:flex fixed m-auto top-0 left-0 bottom-0 right-0 text-blue-400 text-8xl cursor-default z-50
          w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {pathName === "/" && "Welcome, my friend!"}
          {pathName === "/about" && "It's me, Nikhil!"}
          {pathName === "/contact" && "Let's Connect!"}
          {pathName === "/projects" && "Hire me!"}
        </motion.div>
        <motion.div
          className="hidden md:flex h-screen w-screen fixed bg-slate-900 bottom-0 rounded-t-[25px] z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
