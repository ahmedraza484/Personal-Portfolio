import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../../assets/profile.png";
import CV from "../../assets/frontend_ahmedraza.pdf";
import { DownloadIcon, ExternalLink, Mail } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      label: "Github",
      color: "hover:text-pink-500 hover:border-pink-500/400",
      url: "https://github.com/ahmedraza484/",
    },
    {
      icon: FaLinkedin,
      label: "Linkedin",
      color: "hover:text-pink-500 hover:border-pink-500/400",
      url: "https://www.linkedin.com/in/ahmedrazajpg/",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-22 lg:py-12 lg:-mt-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div
            className="lg:w-2/5 w-full flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src={hero}
                  alt="hero"
                  className="w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div
            className="lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            data-aos="fade-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border boder-red-500/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium dark:text-red-400 text-gray-700 cursor-pointer">
                Avaible for work
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 dark:text-white text-gray-900">
              Hi, I'm{" "}
              <span className="text-red-600 dark:text-red-400">Ahmed Raza</span>
            </h1>
            <h2 className="text:xl sm:text-2xl font-mono mb-4 dark:text-red-400 text-red-600">
              <span className="text-gray-400">&lt; </span>
              Frontend Developer
              <span className="text-gray-400"> &gt;</span>
            </h2>
            <p className="mb-6 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700">
              I'm an aspiring Frontend Developer passionate about building
              responsive, user-friendly websites. I'm eager to apply my HTML,
              CSS, JavaScript, and React skills to real-world projects while
              learning and growing through an internship opportunity.
            </p>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    href={social.url}
                    target="_blank"
                    key={index}
                    aria-label={social.label}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm dark:text-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href={CV} download className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <DownloadIcon size={18} /> Download CV
                </button>
              </a>
              <a href={CV} target="_blank" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 dark:border-red-500 border-red-600 dark:text-white text-gray-800 hover:text-white dark:hover:text-white font-semibold dark:hover:bg-red-500 hover:bg-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <ExternalLink size={20} /> View Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
