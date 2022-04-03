import React from 'react';

function DetailInfoLayout({ profile }) {
  return (
    <>
      <div className={``}>
        <p className='text-snmOriginal-accentBlue text-sm lg:text-base'>
          {profile.title}
        </p>
        <p className='text-lg lg:text-xl capitalize'>{profile.val}</p>
      </div>
    </>
  );
}

export default DetailInfoLayout;
