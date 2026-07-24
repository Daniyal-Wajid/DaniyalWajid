import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { initializeCursor } from './cursor';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Pricing from './components/Pricing';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        const cleanupCursor = initializeCursor();
        return () => {
            cleanupCursor();
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div>
            <div className="cursor" id="cursor"></div>
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
        </div>
    );
}

export default App;
