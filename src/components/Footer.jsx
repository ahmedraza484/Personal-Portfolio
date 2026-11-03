import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-linear-to-br from-red-400 to-white dark:bg-linear-to-br dark:from-red-950 dark:to-black py-6 ">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="tex-xl text-red-500 font-bold dark:text-red-400">
            Portfolio
          </h3>
          <p className="text-xs">Frontend Developer</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/ahmedraza484/" target="_blank" className="hover:text-red-500 transition-colors cursor-pointer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ahmedrazajpg/" target="_blank" className="hover:text-red-500 transition-colors cursor-pointer">
            <FaLinkedin size={20} />
          </a>
        </div>
        <p className="text-xs flex items-center gap-1">
          {currentYear} Made With <FaHeart className="text-red-500"/> by <span className="font-semibold">Ahmed Raza</span>
        </p>
      </div>
      <div className="h-24"></div>
    </footer>
  );
};

export default Footer;
