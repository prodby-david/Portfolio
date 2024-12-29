import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const Qualification = () => {

  return (

    <div id='qualification' className='pt-[100px]'>

      <div>
        <h2 className='text-tertiary text-md md:text-base font-semibold text-center'>Qualification</h2>
        <p className='text-sm text-center text-text-color'>My Educational Background</p>
      </div>

      <div className='flex flex-col sm:grid justify-items-center gap-[50px] sm:grid-cols-[220px_220px] sm:grid-rows-[140px_140px] pt-[100px] sm:justify-center sm:justify-items-stretch sm:gap-0'>

          <div className='sm:col-span-2 sm:row-span-1 sm:text-left text-sm ml-[24px]'>
            <h3 className='text-tertiary font-semibold'>Pateros Technological College</h3>
            <div className='text-text-color'>
              <p>Information Technology</p>
              <p className='dark:text-white'><FontAwesomeIcon icon={faCalendar} className='pr-2' />2021-2022</p>
            </div>
          </div>
    
          <div className='sm:col-span-2 text-right text-sm mr-[24px]'>
            <h3 className='text-tertiary font-semibold'>STI College Global City</h3>
            <div className='text-text-color'>
              <p>Information Technology</p>
              <p className='dark:text-white'><FontAwesomeIcon icon={faCalendar} className='pr-2' />2022 - Present</p>
            </div>
          </div>

      </div>

    </div>
  )
};

export default Qualification;
