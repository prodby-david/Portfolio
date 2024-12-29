import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '@/components/darkmodetoggle.jsx';

const Navigation = () => {

    const [navlinks, showNavlinks] = useState(false);

    const nav = navlinks ? 'block' : 'hidden ';

    const navController = () => {
      showNavlinks(false);
    }

  return (  

    <nav className='flex items-center justify-around py-8 sm:py-6 md:py-4 w-full fixed top-0 left-0 z-20 bg-white dark:bg-darkmode'>

      <div className='text-tertiary text-sm sm:text-md'>
        <h2><a href="https://github.com/prodby-david">@prodby.david</a></h2>
      </div>

      <div className={`${nav} absolute top-16 left-0 z-15 w-full md:w-auto md:flex md:items-center md:relative md:top-0`}>

        <ul className={`flex flex-col items-center bg-font-color text-white md:flex-row md:bg-transparent md:text-font-color`}>
          
            <li className='px-3 py-4 text-sm sm:text-md dark:text-white'> 
              <Link to='home' smooth={true} duration={800} onClick={navController} className='transition-colors duration-200 hover:text-tertiary cursor-pointer'>Home
              </Link>
            </li>

            <li className='px-3 py-4 text-sm sm:text-md dark:text-white'>
              <Link to='about'smooth={true} duration={800} onClick={navController} className='transition-colors duration-200 hover:text-tertiary cursor-pointer'>About
              </Link>
            </li>

            <li className='px-3 py-4 text-sm sm:text-md dark:text-white'>
              <Link to='qualification'smooth={true} duration={800} onClick={navController} className='transition-colors duration-200 hover:text-tertiary cursor-pointer'>Qualification
              </Link>
            </li>

            <li className='px-3 py-4 text-sm sm:text-md dark:text-white'>
              <Link to='skills' smooth={true} duration={800} onClick={navController} className='transition-colors duration-200 hover:text-tertiary cursor-pointer'>Skills
              </Link>
            </li>

            <li className='px-3 py-4 text-sm sm:text-md dark:text-white'>
              <Link to='projects' onClick={navController} className='transition-colors duration-200 hover:text-tertiary cursor-pointer'>Projects
              </Link>
            </li>
            
        </ul>
        
      </div>

      <div className='flex gap-5'>
        <DarkModeToggle />
       <button>
            <FontAwesomeIcon icon={navlinks ? faTimes : faBars}  onClick={() => (showNavlinks(!navlinks))} className={`text-lg md:hidden transform transition-all duration-300 ease-in-out ${
              navlinks ? 'rotate-180' : 'rotate-0'
            }`}/>
       </button>
      </div>

    </nav>
  )
};

export default Navigation;
