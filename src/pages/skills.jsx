import React from 'react';

const Skills = () => {

  return (

    <div id='skills' className='pt-[100px] sm:pt-[50px]'>
      
      <div className='text-center' data-aos='fade-down' data-aos-duration='1200'>
        <h2 className='text-tertiary font-semibold'>Skills</h2>
        <p className='text-sm text-text-color'>My Technical Skills</p>
      </div>

      <div className='grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px_100px] justify-center justify-items-center pt-[50px] text-sm md:grid-cols-[100px_100px_100px_100px] '>

        <div className='flex flex-col items-center'data-aos='fade-down' data-aos-duration='1000' data-aos-delay='800'>
          <img src="images/html.png" alt="HTML icon" width={50}/>
          <p className='text-text-color pt-1'>HTML</p>
        </div>

        <div className='flex flex-col items-center'data-aos='fade-down' data-aos-duration='1000' data-aos-delay='900'>
          <img src="images/css.png" alt="CSS icon" width={50}/>
          <p className='text-text-color pt-1'>CSS</p>
        </div>

        <div className='flex flex-col items-center' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1000'>
          <img src="images/js.png" alt="Javascript icon" width={50}/>
          <p className='text-text-color pt-1'>Javascript</p>
        </div>

        <div className='flex flex-col items-center' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1100'>
          <img src="images/react.png" alt="React icon" width={50}/>
          <p className='text-text-color pt-1'>React</p>
        </div>

        <div className='flex flex-col items-center' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1200'>
          <img src="images/nodejs.png" alt="Node icon" width={50}/>
          <p className='text-text-color pt-1'>Node.js</p>
        </div>

        <div className='flex flex-col items-center' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1300'>
          <img src="images/mongodb.png" alt="Mongo icon" width={50}/>
          <p className='text-text-color pt-1'>MongoDB</p>
        </div>

        <div className='flex flex-col items-center' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1400'>
          <img src="images/expressjs.png" alt="React icon" width={50}/>
          <p className='text-text-color pt-1'>Express.js</p>
        </div>

        <div className='flex flex-col items-center'data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1500'>
          <img src="images/mysql.png" alt="React icon" width={50}/>
          <p className='text-text-color pt-1'>MySQL</p>
        </div>

        <div className='flex flex-col items-center' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1600'>
          <img src="images/git.png" alt="React icon" width={50}/>
          <p className='text-text-color pt-1'>Git</p>
        </div>

        <div className='flex flex-col items-center' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='1700'>
          <img src="images/github.png" alt="React icon" width={50}/>
          <p className='text-text-color pt-1'>Github</p>
        </div>

      </div>

    </div>
  )
};

export default Skills;
