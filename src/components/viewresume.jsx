import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';


const ViewResume = () => {
  return (
    <div>
      <button className='bg-tertiary mt-5 p-5 w-[170px] text-white rounded-md opacity-100 hover:opacity-85'>View Resume<FontAwesomeIcon icon={faFile} className='pl-2'/></button>
    </div>
  )
};

export default ViewResume;
