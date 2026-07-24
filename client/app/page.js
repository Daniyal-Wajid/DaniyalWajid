"use client";

import { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import { initializeCursor } from "../src/cursor";
import Services from "../src/components/Services";
import Skills from "../src/components/Skills";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Pricing from "../src/components/Pricing";
import Achievements from "../src/components/Achievements";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main>
      <div className="cursor" id="cursor" />
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Header />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Pricing />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
