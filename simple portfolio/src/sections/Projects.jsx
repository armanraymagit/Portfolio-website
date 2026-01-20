import React, { Suspense, useRef } from "react";
import { Canvas } from '@react-three/fiber';


const projects = [
 {
    title: "AI assistant",
    description:" AI that can help you with your coding problems and can also help you with your problems.",
    github: "https://github.com/armanraymagit/Darkknight929",
    liveDemo: null,
    image:"preview.svg"
 },

 


 
];


const Projects = () => {
  // We use a ref to get direct access to the DOM element for the fullscreen API
  const mediaRef = useRef(null);

  const handleFullScreen = (e) => {
    // Find the closest parent container for the media and request fullscreen
    const container = e.target.closest('.media-container');
    if (container) {
      container.requestFullscreen().catch(err => console.error(err));
    }
  };
  return (
    <section
      id="Projects"
      className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-100 px-6 py-12 flex flex-col items-center transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">
        Projects
      </h2>

      {/* Since there's only one project, we can create a custom layout for it */}
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto mt-8">
          {/* Left side: Description (40%) */}
          <div className="md:w-2/5 w-full p-8 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-blue-400">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              {project.description}
            </p>
            <div className="flex justify-center md:justify-start">
              {/* New GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-12.087 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right side: 3D Cube (60%) */}
          <div className="media-container md:w-3/5 w-full h-96 md:h-[500px] relative bg-gray-900 rounded-lg">
            <button 
              onClick={handleFullScreen}
              className="absolute top-3 right-3 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              aria-label="View fullscreen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v4a1 1 0 002 0V4h4a1 1 0 100-2H4zm12 0a1 1 0 000 2h4v4a1 1 0 102 0V4a2 2 0 00-2-2h-4zM4 14h4a1 1 0 100 2H4a2 2 0 01-2-2v-4a1 1 0 10-2 0v4a2 2 0 002 2zm12 0a1 1 0 100 2h4a2 2 0 002-2v-4a1 1 0 10-2 0v4h-4z" clipRule="evenodd" />
              </svg>
            </button>

            {project.image === 'rubik-model' ? (
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <RubiksCubeModel />
                  <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
              </Canvas>
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full rounded-lg shadow-lg ${
                  project.title === "AI assistant" 
                    ? "object-cover" 
                    : "object-contain"
                }`} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
