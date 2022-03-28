import React from 'react';

function DetailInfoLayout({ customClass, key1, val1, key2, val2 }) {
  return (
    <div
      className={`col-span-12 lg:col-span-3 flex flex-col font-semibold capitalize ${customClass}`}>
      <div>
        <p className='text-snmOriginal-accentBlue'>{key1}</p>
        <p className='text-xl'>{val1}</p>
      </div>
      <div className='mt-6'>
        <p className='text-snmOriginal-accentBlue'>{key2}</p>
        <p className='capitalize text-xl'>{val2}</p>
      </div>
    </div>
  );
}

export default DetailInfoLayout;
