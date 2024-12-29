import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const DiscoverMore = () => {
  return (
    <div className=' text-sm underline p-2 md:text-md lg:text-base '>
      <a href="/" className='hover:text-tertiary'>Discover More<FontAwesomeIcon icon={faPaperPlane} className='ml-1 ' /></a>
    </div>
  )
};

export default DiscoverMore;
