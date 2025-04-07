import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: isDarkTheme ? '#fff' : '#333',
        color: isDarkTheme ? '#333' : '#fff'
      }}
    >
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
    </button>
  );
};

export default ThemeToggle;