import React from "react";
import { skillsData } from "../constants/index.js";

const Section = ({ title, data, isSoftSkill = false }) => {
  if (!data || data.length === 0) return null; // auto-skip empty sections

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-bule-400 dark:text-white mb-6 text-center">
        {title}
      </h3>

      {/* If it's soft skills, render emoji pills */}
      {isSoftSkill ? (
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((soft, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-2xl">{soft.emoji}</span>
              <span className="text-lg text-gray-200 font-medium">
                {soft.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-lg font-medium text-gray-200w">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const { techSkills, tools, softSkills } = skillsData;

  return (
    <section
      id="skills"
      className="py-16 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          My Skills
        </h2>

        <Section title="Technical Skills" data={techSkills} />
        <Section title="Tools That I Use" data={tools} />
        <Section title="Soft Skills" data={softSkills} isSoftSkill />
      </div>
    </section>
  );
};

export default Skills;
