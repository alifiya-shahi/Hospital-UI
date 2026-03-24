import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    console.log('Initial savedTheme from localStorage:', savedTheme);
    // Temporarily force light mode for debugging
    console.log('Forcing light mode for debugging');
    return false;
  });

  useEffect(() => {
    // Clear any existing dark class on mount
    const root = window.document.documentElement;
    root.classList.remove('dark');
    console.log('Cleared dark class on mount');
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    console.log('Theme effect triggered, isDarkMode:', isDarkMode);
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Added dark class to html element');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Removed dark class from html element');
    }
    console.log('Current classes on html:', root.className);
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Toggle theme called, current isDarkMode:', isDarkMode);
    const newValue = !isDarkMode;
    console.log('Setting isDarkMode to:', newValue);
    setIsDarkMode(newValue);
  };

  const resetTheme = () => {
    console.log('Resetting theme to light mode');
    setIsDarkMode(false);
    localStorage.removeItem('theme');
    const root = window.document.documentElement;
    root.classList.remove('dark');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};