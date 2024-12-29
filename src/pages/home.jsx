import React from "react";
import ShowProject from "@/components/showproject.jsx";
import DiscoverMore from "@/components/discovermore.jsx";

const Home = () => {

    return (
  
      <div id="home" className=' flex flex-col items-center justify-center pt-[100px]'>
  
          <div className='flex flex-col items-center pt-3'>
              <img src="/images/prof.jpg" alt="Myself" className='w-[70px] sm:w-[80px] md:w-[90px] xl:w-[110px] rounded-full'/>
              <p className='pt-2 text-sm sm:text-md md:text-base font-semibold'>Hello, I'm John David</p>
          </div>
  
          <div className='text-center text-md py-2 text-[30px] sm:text-[36px] md:text-[48px] lg:text-[54px] xl:text-[66px] 2xl:text-[84px] leading-[30px] sm:leading-[36px] md:leading-[48px] lg:leading-[60px] 2xl:leading-[84px] font-semibold'>
            <p className='text-tertiary'>FULL STACK</p>
            <p>WEB DEVELOPER</p>
          </div>
  
          <div className='w-[280px] sm:w-[400px] md:w-[450px] lg:w-[560px] 2xl:w-[650px] text-xs sm:text-sm md:text-md lg:text-base 2xl:text-xl text-center text-text-color'>
            <p>I’m an aspiring Full Stack Web Developer. This portfolio showcases my journey, the projects I've working on and the knowledge gained along the way.</p>
          </div>
  
          <div className='flex flex-col sm:flex-row items-center mt-7 gap-5'>
            <ShowProject />
            <DiscoverMore />
          </div>
  
      </div>
    )
};

export default Home;