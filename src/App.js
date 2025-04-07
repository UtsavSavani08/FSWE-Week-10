import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const Content = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>Theme Switcher App</h1>
      <p>This app demonstrates the use of Context API for theme switching.</p>
      <ThemeToggle />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
