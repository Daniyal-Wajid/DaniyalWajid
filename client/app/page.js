"use client";

import { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import { initializeCursor } from "../src/cursor";
import Services from "../src/components/Services";
import Skills from "../src/components/Skills";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Achievements from "../src/components/Achievements";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  useEffect(() => {
    const cleanupCursor = initializeCursor();
    return () => cleanupCursor();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      <div className="cursor" id="cursor" />
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Header />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
