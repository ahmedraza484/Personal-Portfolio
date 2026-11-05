import { ArrowRight } from "lucide-react";
import React from "react";
import about from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left "
          data-aos="fade-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border boder-red-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase dark:text-red-300 text-red-600">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900 leading-tight ">
            Turning Ideas Into
            <span className="text-red-600 dark:text-red-400 block ">
              {" "}
              Digital Experience
            </span>
          </h2>
          <p className="text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl">
            I believe great websites combine creativity with functionality. As
            an aspiring Frontend Developer, I enjoy transforming ideas into
            clean, responsive, and user-friendly web experiences. I'm passionate
            about learning modern technologies, improving my coding skills, and
            building projects that solve real-world problems. I'm currently
            seeking an internship where I can gain hands-on experience and grow
            as a developer.
          </p>
          <div>
            <a href="#contact" dat-aos="fade-up" data-aos-delay="300">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <ArrowRight size={18} /> Let's Talk
              </button>
            </a>
          </div>
        </div>
        <div
          className="relative order-1 lg:order-2 flex justify-center"
          data-aos="fade-left"
        >
          <div className="relative w-full max-w-sm sm:max-w-md ">
            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse" />
            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105 " />
            <img
              src={about}
              alt="about"
              className="relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full h-auto object-cover border-2 bordr-red-500/30 backdrop-blur-sm cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
