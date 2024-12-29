import React from 'react';
import ViewResume from '@/components/viewresume.jsx';

const About = () => {

  return (

    <div id='about' className='pt-[100px] '>

      <div className='text-center' data-aos='fade-down' data-aos-duration='1500' data-aos-delay='1000'>
        <h2 className='text-tertiary text-md md:text-base font-semibold'>About</h2>
        <p className='text-sm text-text-color'>Knowing more about me</p>
      </div>

      <div className='flex flex-col items-center justify-center gap-[40px] p-[30px] md:flex-row'>

        <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='1200'>
            <img src="/images/myself.jpg" alt="Photo of myself" className='w-[280px] sm:min-w-[320px] md:min-w-[350px] rounded-lg'/>
        </div>

        <div className=' flex flex-col items-center text-sm text-text-color max-w-[280px] sm:max-w-[350px]'data-aos='fade-down' data-aos-duration='1500' data-aos-delay='1200'>
            <p className='text-justify'>Hi there! I'm John David, a Information Technology student at STI College Global City who loves solving problem through technology. My love for coding started when I was in 2nd year college. I saw an inspirational video clip in tiktok about software engineering, and since then, I've been excited about technologies. Right now, I'm learning web development. Working on projects that challenges me and help me to improved my skills. When I'm not in coding, I enjoy playing guitar, going outside for fresh air, playing online games and watching tech videos. I'm looking forward to the opportunities ahead and excited to keep learning and growing as a student and future tech professional.</p>
            <ViewResume />
        </div>

      </div>

    </div>
  )
};

export default About;
