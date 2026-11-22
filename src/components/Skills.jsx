import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import react from "../../assets/reactLogo.png";
import mongodb from "../../assets/mongoDB.png";

const Skills = () => {
  const skills = [
    { name: "HTML", img: html, color: "#E34F26" },
    { name: "CSS", img: css, color: "#1572B6" },
    { name: "JavaScript", img: javascript, color: "#F7DF1E" },
    { name: "React JS", img: react, color: "#61DAFB" },
    { name: "MongoDB", img: mongodb, color: "#47A248" },
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 px-4 sm:px-6 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
              Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
            My <span className="text-red-500">Skills</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I have a growing foundation in frontend development, with skills in
            HTML, CSS, JavaScript, and React. I'm passionate about creating
            responsive, modern, and user-friendly websites. I continuously work
            on improving my technical skills and exploring new technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  borderColor: skill.color,
                  boxShadow: `0 0 25px ${skill.color}30`,
                }}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-base sm:text-lg font-semibold text-center dark:text-gray-200 text-gray-900 group-hover:text-red-500 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
