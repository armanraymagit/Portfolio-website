import React from "react";

const CV = () => {
  return (
    <section
      id="Cv"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-center px-6 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-black dark:text-gray-100 mb-4">
        My CV / Resume
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Click the button below to download my latest resume.
      </p>

      <a
        href="/arman_rayma_resume (2).pdf"
        download="arman_rayma_resume.pdf"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Download CV
      </a>
    </section>
  );
};

export default CV;
