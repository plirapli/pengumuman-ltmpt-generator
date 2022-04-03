import { Icon } from '@iconify/react';
import Logo from './Logo';
import QrCode from './QrCode';
import logoLtmpt from '../assets/images/logo-ltmpt.png';
import logoSnm from '../assets/images/logo-snmptn.png';
import { Link } from 'react-router-dom';

function Snm({ dataMaba }) {
  const profiles = [
    {
      title: 'tanggal lahir',
      icon: 'ic:baseline-date-range',
      val: dataMaba.tglLahir || '31/12/2012',
    },
    {
      title: 'kabupaten/kota',
      icon: 'fluent:location-24-filled',
      val: dataMaba.kotaKab || 'Konoha',
    },
    {
      title: 'asal sekolah',
      icon: 'ic:round-school',
      val: dataMaba.sekolah || 'SMA NEGERI 1 KWANGYA',
    },
    {
      title: 'provinsi',
      icon: 'mdi:city-variant',
      val: dataMaba.prov || 'Earth C-137',
    },
  ];

  const year = new Date().getFullYear();

  const kalimatGagal = `masih ada kesempatan mendaftar dan mengikuti utbk sbmptn ${year} atau seleksi mandiri ptn.`;

  const kalimatDaful =
    'Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat dilihat pada link berikut.';

  return (
    <div className='w-full max-w-screen-md p-4 sm:p-8'>
      <div className='mt-0 sm:mt-8'>
        <div className='mb-4'>
          <Link to='/'>
            <div className='flex items-center'>
              <Logo customClass='h-14 sm:h-20' logo={logoSnm} />
              <Logo customClass='h-14 sm:h-20 ml-2 sm:ml-4' logo={logoLtmpt} />
            </div>
          </Link>
          <div className='mt-4 text-3xl'>Pengumuman SNMPTN {year}</div>
        </div>
        <div
          className={`${
            dataMaba.isLulus ? 'bg-green-200' : 'bg-red-300'
          } rounded-xl shadow p-4 mb-4 text-black text-opacity-75 uppercase`}>
          <h1 className='font-bold text-xl'>
            {`anda dinyatakan ${
              dataMaba.isLulus ? 'Lulus' : 'Tidak lulus'
            } seleksi snmptn ${year}`}
          </h1>
          {!dataMaba.isLulus && <p className='mt-2'>{kalimatGagal}</p>}
        </div>

        <div className='bg-white rounded-xl shadow p-4 mb-4 flex flex-col sm:flex-row sm:items-center'>
          {dataMaba.isLulus && <QrCode size='w-32 h-32' />}
          <div className={dataMaba.isLulus && 'sm:ml-4'}>
            <p className='text-sm flex flex-col sm:flex-row'>
              <p className='mb-2 sm:mb-0'>
                <span className='font-bold text-black text-opacity-30'>
                  NISN
                </span>{' '}
                {dataMaba.nisn || '0012345678'}
              </p>
              <span className='hidden sm:inline'>&nbsp; | &nbsp;</span>
              <p>
                <span className='font-bold text-black text-opacity-30'>
                  NO. REG
                </span>{' '}
                {dataMaba.noReg || '1231231232'}
              </p>
            </p>
            <h1 className='mt-1 text-3xl font-bold uppercase'>
              {dataMaba.nama || 'John Doe'}
            </h1>

            {dataMaba.isLulus && (
              <div className='mt-1 flex flex-col sm:text-lg uppercase'>
                <h3 className='font-bold'>
                  {dataMaba.univ || 'Institut Neo Kultur'}
                </h3>
                <h3>
                  {' '}
                  Program Studi{' '}
                  <span className='font-bold'>
                    {dataMaba.prodi || 'informatika'}
                  </span>
                </h3>
              </div>
            )}
          </div>
        </div>

        {/* Keterangan */}
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <div className='w-full grid sm:grid-cols-2 gap-4'>
            {profiles.map((profile) => (
              <div className='flex items-center'>
                <div className='w-8 h-8 mr-4 bg-white rounded-md shadow flex items-center justify-center'>
                  <Icon icon={profile.icon} width='18' height='18' />
                </div>
                <div>
                  <p className='text-xs font-bold text-black text-opacity-30 uppercase'>
                    {profile.title}
                  </p>
                  <p>{profile.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daftar Ulang */}
        <div className='bg-white rounded-xl shadow p-4 mt-8 text-black text-opacity-75'>
          <h1 className='font-bold uppercase'>
            Silakan lakukan pendaftaran ulang.
          </h1>
          <p className='uppercase'>{kalimatDaful}</p>
          <div className='mt-2 break-words'>
            <a
              target='_blank'
              rel='noreferrer'
              className='underline text-blue-500'
              href='https://github.com/plirapli/pengumuman-ltmpt-generator'>
              {dataMaba.domainUniv}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snm;
