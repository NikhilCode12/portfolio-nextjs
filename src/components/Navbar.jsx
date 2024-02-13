"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTimes,
} from "react-icons/fa";
import "./navbar.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const menuBarItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const currentPath = usePathname();
  const currentPathName =
    currentPath === "/"
      ? "Home"
      : currentPath.slice(1).charAt(0).toUpperCase() + currentPath.slice(2);
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [crossIcon, setCrossIcon] = useState(false);

  const handleMenuButtonClick = () => {
    setCrossIcon((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const menuItemsDivVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const menuListItemsVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    setActiveLink(currentPathName);
  }, [currentPathName]);

  return (
    <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* bigger screens like tablet, laptop and desktop... */}
      {/* Logo */}
      <div className="hidden md:flex w-1/3">
        <Link
          href="/"
          className="text-md border-2 border-blue-400 rounded-md px-4 py-2 font-semibold"
        >
          <span className="mr-1">Nikhil</span>
          <span className="text-blue-300">Sharma</span>
        </Link>
      </div>
      {/* Links */}
      <div className="hidden md:flex items-center md:gap-10 lg:gap-10 w-1/3 justify-center font-medium">
        {menuBarItems.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`nav-links hover:text-blue-300 active:text-blue-500 
              ${
                activeLink === item.name
                  ? "text-blue-300 scale-[1.1] translate-y-[4px] active-link-nav"
                  : ""
              }`}
              onClick={() => setActiveLink(item.name)}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      {/* Social Links */}
      <div className="hidden md:flex items-center md:gap-4 lg:gap-8 w-1/3 justify-end">
        <Link
          href="https://github.com/NikhilCode12"
          target="_blank"
          className="social-links"
        >
          <FaGithub color="rgba(147,197,253,1)" size="1.45em" />
        </Link>
        <Link
          href="https://linkedin.com/in/nikhil-sharma-41a287226"
          target="_blank"
          className="social-links"
        >
          <FaLinkedin color="rgba(147,197,253,1)" size="1.45em" />
        </Link>
        <Link
          href="https://twitter.com/Sharma_Nikh12"
          target="_blank"
          className="social-links"
        >
          <FaTwitter color="rgba(147,197,253,1)" size="1.45em" />
        </Link>
        <Link
          href="mailto:sharmanikhil12jv@gmail.com"
          target="_blank"
          className="social-links"
        >
          <FaEnvelope color="rgba(147,197,253,1)" size="1.45em" />
        </Link>
      </div>
      {/* smaller screens like mobile screens...*/}
      {/* Logo */}
      <div className="md:hidden">
        <Link
          href="/"
          className="text-sm border-2 border-blue-400 rounded-md p-2 font-semibold"
        >
          <span className="mr-1">Nikhil</span>
          <span className="text-blue-300">Sharma</span>
        </Link>
      </div>
      {/* Responsive Nav Menu*/}
      <div className="flex items-center md:hidden">
        {/* Menu button */}
        <motion.button
          className="z-50 relative bg-slate-700 rounded-md p-1"
          whileTap={{ scale: 0.9 }}
          onClick={handleMenuButtonClick}
        >
          {crossIcon ? (
            <FaTimes
              color="rgba(96,165,250,1)"
              className="text-2xl rounded-full"
            />
          ) : (
            <FaBars
              color="rgba(96,165,250,1)"
              className="text-2xl rounded-full"
            />
          )}
        </motion.button>
        {/* Menu List */}
        {showMenu && (
          <motion.div
            variants={menuItemsDivVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center absolute top-0 left-0 w-screen h-screen text-blue-400 justify-center gap-8 text-2xl font-medium z-40 bg-gradient-to-b from-slate-800 to-slate-950"
          >
            {menuBarItems.map((item) => {
              return (
                <motion.div key={item.name} variants={menuListItemsVariants}>
                  <Link
                    href={item.link}
                    onClick={() => {
                      setShowMenu(false);
                      setCrossIcon(false);
                    }}
                    className="nav-links"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
