import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' || false;
    });

    useEffect(() => {
          if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
         },[darkMode]);
    
         const toggleDarkMode = () => {
            setDarkMode(!darkMode);
         }

  return (
    <div>
        <button onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon } className='text-lg transition-colors duration-200 hover:text-tertiary cursor-pointer'/>
        </button>
    </div>
  )
};

export default DarkModeToggle;
