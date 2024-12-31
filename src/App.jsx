import React, { useEffect } from 'react';
import Navigation from '@/components/navigation.jsx';
import Home from '@/pages/home.jsx';
import About from '@/pages/about.jsx';
import Qualification from '@/pages/qualification';
import Skills from './pages/skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './pages/projects';

function App() {

  useEffect(() => { 
    AOS.init();
  }, []);

  return (

    <div>
      
      <Navigation />
      <Home />
      <About />
      <Qualification />
      <Skills />
      
    </div>
  )
};

export default App;
