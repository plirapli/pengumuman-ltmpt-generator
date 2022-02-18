import Logo from './Logo';
import logoLtmpt from '../assets/images/logo-ltmpt.png';
import logoSponsor from '../assets/images/sponsor.png';
import QrCode from './QrCode';
import { Link } from 'react-router-dom';

function Snm({ dataMaba }) {
  const kalimatGagal =
    'semangat dan jangan putus asa! masih ada kesempatan mengikuti seleksi mandiri ptn.';

  const kalimatDaful =
    'Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat dilihat pada link berikut.';

  return (
    <div className='w-full'>
      <div className='mt-0 flex flex-col items-center'>
        <div className='w-full'>
          <Link to='/'>
            <Logo logo={logoLtmpt} />
          </Link>
          <div className='mt-4'>
            <Logo customClass='' logo={logoSponsor} />
          </div>
        </div>

        <div className='w-full h-8 bg-blue-500'></div>

        {/* Body */}
        <div className='w-full max-w-screen-md lg:max-w-screen-lg'>
          <div className='my-8 text-xl font-bold text-center'>
            PENGUMUMAN HASIL SELEKSI SBMPTN LTMPT 2021
          </div>

          {/* Hasil */}
          <div className='border border-black rounded-md overflow-hidden'>
            {/* Profil Siswa */}
            <div className='p-6 grid grid-rows-2 sm:grid-cols-12 sm:grid-rows-none'>
              {dataMaba.isLulus && (
                <QrCode size='sm:col-span-4 w-11/12 sm:w-full' />
              )}
              <div className='p-6 sm:ml-6 bg-gray-200 sm:col-span-8'>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <p className='w-32 border border-red-500'>Nomor peserta</p>
                    <span className='mx-4 border border-red-500'>:</span>
                    <p className='flex-grow border border-red-500 font-bold uppercase'>
                      {dataMaba.noReg || '123-123-12-0123'}
                    </p>
                  </div>
                  <div className='flex'>
                    <p className='w-32 border border-red-500'>Nama</p>
                    <span className='mx-4 border border-red-500'>:</span>
                    <p className='flex-grow border border-red-500 font-bold uppercase'>
                      {dataMaba.nama || 'John Doe'}
                    </p>
                  </div>
                  <div className='flex'>
                    <p className='w-32 border border-red-500'>Tanggal lahir</p>
                    <span className='mx-4 border border-red-500'>:</span>
                    <p className='flex-grow border border-red-500 font-bold uppercase'>
                      {dataMaba.tglLahir || '31-12-2012'}
                    </p>
                  </div>
                  <div className='mt-6'>
                    <p>
                      Selamat! Anda dinyatakan lulus seleksi SBMPTN LTMPT 2021
                      di:
                    </p>
                    <div className='flex'>
                      <p className='w-32 border border-red-500'>PTN</p>
                      <span className='mx-4 border border-red-500'>:</span>
                      <p className='flex-grow border border-red-500 font-bold uppercase'>
                        {dataMaba.univ || 'Institut Neo Kultur'}
                      </p>
                    </div>
                    <div className='flex'>
                      <p className='w-32 border border-red-500'>
                        Program Studi
                      </p>
                      <span className='mx-4 border border-red-500'>:</span>
                      <p className='flex-grow border border-red-500 font-bold uppercase'>
                        {dataMaba.prodi || 'Informatika'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* {dataMaba.isLulus && (
                  <div className='mt-2 flex flex-col sm:text-lg uppercase'>
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
                )} */}
              </div>
            </div>

            {/* Tombol kembali */}
            <div className='bg-gray-200 p-4 mt-8'>
              <Link to='/'>
                <button className='w-full p-2 rounded bg-green-500 text-white'>
                  Kembali ke pencarian
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snm;
