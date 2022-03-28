import React from 'react';

function DetailInfoLayout({ isLulus, customClass, key1, val1, key2, val2 }) {
  return (
    <div
      className={`col-span-12 ${isLulus ? 'lg:col-span-3' : 'lg:col-span-6'} 
        flex flex-col font-black capitalize ${customClass}`}>
      <div>
        <p className='text-snmOriginal-accentBlue text-sm lg:text-base'>
          {key1}
        </p>
        <p className='text-lg lg:text-xl'>{val1}</p>
      </div>
      <div className='mt-6'>
        <p className='text-snmOriginal-accentBlue text-sm lg:text-base'>
          {key2}
        </p>
        <p className='capitalize text-lg lg:text-xl'>{val2}</p>
      </div>
    </div>
  );
}

export default DetailInfoLayout;
