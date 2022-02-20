import React from 'react';

function ProfileLayout({ field, profile }) {
  return (
    <>
      <div className='grid sm:grid-cols-12'>
        <p className='col-auto sm:col-span-3'>{field}</p>
        <span className='col-span-6 sm:col-span-1'>:</span>
        <p className='col-span-12 sm:col-span-8 font-bold uppercase'>
          {profile}
        </p>
      </div>
    </>
  );
}

export default ProfileLayout;
