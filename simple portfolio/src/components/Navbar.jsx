import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    // This effect handles the scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* ✅ Logo */}
        <a
          href="#"
          className="text-xl font-bold text-blue-400 dark:text-white tracking-wide hover:text-blue-400 transition-colors"
        >
          Arman Rayma
        </a>

        {/* ✅ Desktop Nav Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  className="text-blue-400 dark:text-white hover:text-blue-400 transition-colors font-medium"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-blue-400 dark:text-white hover:text-blue-400 hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="#contact"
            className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
