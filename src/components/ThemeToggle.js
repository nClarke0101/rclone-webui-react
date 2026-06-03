import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Button } from 'reactstrap';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button 
      color="secondary" 
      onClick={toggleTheme}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <i className={`fa fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
    </Button>
  );
};

export default ThemeToggle;
