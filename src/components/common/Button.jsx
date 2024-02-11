"use client";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Button = ({ title, handleClick, className }) => {
  return (
    <button
      className={`flex items-center gap-2 p-2 rounded-lg md:px-4 md:py-2 ${className}`}
      onClick={handleClick}
    >
      <p className="text-sm md:text-md">{title}</p>
      {title === "Resume" && (
        <FaCloudDownloadAlt className="text-blue-300 text-lg" />
      )}
    </button>
  );
};

export default Button;
