import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
    colors: {
      background: isDarkTheme ? '#333' : '#fff',
      text: isDarkTheme ? '#fff' : '#333',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};