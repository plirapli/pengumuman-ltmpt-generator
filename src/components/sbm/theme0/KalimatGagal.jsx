import React from 'react';

function KalimatGagal(props) {
  return (
    <div className='p-6 text-center'>
      <p className='uppercase'>
        mohon maaf, peserta atas nama
        <span className='font-bold'> {props.nama} </span>
        dengan nomor peserta <span className='font-bold'>{props.noReg} </span>
        dinyatakan <span className='font-bold'>tidak diterima </span>
        pada sbmptn ltmpt {props.year}
      </p>
      <p className='mt-4 text-xl font-bold'>
        JANGAN PUTUS ASA DAN TETAP SEMANGAT!
      </p>
    </div>
  );
}

export default KalimatGagal;
