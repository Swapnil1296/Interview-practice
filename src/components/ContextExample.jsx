import React, { useState, useContext, createContext } from 'react';

// 1. Create a Context
const ThemeContext = createContext();

// 2. Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme is light

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Create a component that consumes the context using `useContext`
export const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Access the context value

    return (
        <div style={{ padding: '20px' }}>
            <p>The current theme is {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};