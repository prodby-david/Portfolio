import React from 'react';
import Navigation from '@/components/navigation.jsx';
import Home from '@/pages/home.jsx';
import About from '@/pages/about.jsx';
import Qualification from '@/pages/qualification';
import Skills from './pages/skills';

function App() {

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
