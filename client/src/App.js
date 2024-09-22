import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { initializeCursor } from './cursor';

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
        </div>
    );
}

export default App;
