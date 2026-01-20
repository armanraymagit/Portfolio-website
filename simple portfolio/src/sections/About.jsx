import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-gray-800 dark:text-gray-100 px-6 py-12 transition-colors duration-300"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Hey there! 👋 I’m
          <span className="font-semibold text-blue-400">
            Arman Rayma
          </span>
          , a passionate developer who loves turning ideas into clean,
          functional, and visually appealing web experiences. I enjoy learning
          new technologies and experimenting with creative ways to solve
          real-world problems.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Currently, I’m exploring <span className="font-semibold text-blue-400">Full-Stack Development</span> and
          diving deeper into <span className="font-semibold text-blue-400">Cybersecurity</span>
          . I aim to build secure, scalable, and efficient applications that
          make an impact.
        </p>
        <p className="text-lg leading-relaxed">
          When I’m not coding, you’ll probably find me exploring tech trends,
          tweaking UI designs, or just enjoying some quiet time thinking about
          my next project idea ☕💡
        </p>
      </div>
    </section>
  );
};

export default About;
