import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ShowProject = () => {
  return (
    <div>
      <a href="/" className='bg-tertiary p-3 md:p-4 lg:p-5 rounded-lg text-white text-sm sm:text-md md:text-md lg:text-base hover:opacity-85'>Reach me out<FontAwesomeIcon icon={faPhone} className='ml-2' /></a>
    </div>
  )
};

export default ShowProject;
