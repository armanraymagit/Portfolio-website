import React from "react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "AMity University Online",
    year: "2025 - 2028 ",
    description:
      "Focused on software development, algorithms, and cybersecurity. Gained hands-on experience in building web applications and working with cloud technologies like AWS.",
  },
  {
    degree: "High School (Science Stream)",
    institution: "Sanskar school",
    year: "2023 - 2024",
    description:
      "Studied core subjects including Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills.",
  },
];

const Education = () => {
  return (
    <section
      id="Education"
      className="min-h-screen bg-white dark:bg-black px-6 py-12 flex flex-col items-center transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">
        Education
      </h2>

      <div className="flex flex-col gap-8 max-w-4xl w-full">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              {edu.degree}
            </h3>
            <p className="text-gray-300 font-medium">
              {edu.institution}
            </p>
            <p className="text-gray-400 mb-3">
              {edu.year}
            </p>
            <p className="text-gray-200">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
