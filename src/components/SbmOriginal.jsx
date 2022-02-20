import ProfileLayout from './sbm/theme0/ProfileLayout';
import Logo from './Logo';
import logoLtmpt from '../assets/images/logo-ltmpt.png';
import logoSponsor from '../assets/images/sponsor.png';
import QrCode from './QrCode';
import { Link } from 'react-router-dom';

function Snm({ dataMaba }) {
  const kalimatGagal =
    'semangat dan jangan putus asa! masih ada kesempatan mengikuti seleksi mandiri ptn.';

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='p-4 grid grid-cols-12 place-content-center'>
        <div className='flex justify-center col-span-12 sm:col-span-5'>
          <Link to='/'>
            <Logo customClass='w-full h-auto' logo={logoLtmpt} />
          </Link>
        </div>
        <div className='col-span-12 mt-4 sm:col-span-7 sm:mt-0 sm:ml-6'>
          <Logo customClass='w-full h-auto' logo={logoSponsor} />
        </div>
      </div>

      <div className='w-full h-8 bg-blue-700'></div>

      {/* Body */}
      <div className='w-full max-w-screen-md lg:max-w-screen-lg'>
        <div className='my-8 text-xl font-bold text-center'>
          PENGUMUMAN HASIL SELEKSI SBMPTN LTMPT 2021
        </div>

        {/* Hasil */}
        <div className='border border-gray-300 rounded-md overflow-hidden'>
          {/* Profil Siswa */}
          <div className='p-6 grid sm:grid-cols-12'>
            {dataMaba.isLulus && (
              <QrCode size='sm:col-span-4 w-11/12 sm:w-full' />
            )}
            <div className='bg-gray-200 p-6 mt-2 sm:mt-0 sm:ml-6 sm:col-span-8'>
              <div className='flex flex-col'>
                {/* Profile */}
                <div>
                  <ProfileLayout
                    field={'Nomer Peserta'}
                    profile={dataMaba.noReg || '123-123-12-0123'}
                  />
                  <ProfileLayout
                    field={'Nama'}
                    profile={dataMaba.nama || 'John Doe'}
                  />
                  <ProfileLayout
                    field={'Tanggal Lahir'}
                    profile={dataMaba.tglLahir || '05-04-2003'}
                  />
                </div>

                {/* PTN */}
                <div className='mt-6'>
                  <p>
                    Selamat! Anda dinyatakan lulus seleksi SBMPTN LTMPT 2021 di:
                  </p>
                  <ProfileLayout
                    field={'PTN'}
                    profile={dataMaba.univ || 'Institut Neo Kultur'}
                  />
                  <ProfileLayout
                    field={'Program Studi'}
                    profile={dataMaba.prodi || 'Informatika'}
                  />
                </div>
                <p className='mt-6'>
                  Persyaratan pendaftaran ulang calon mahasiswa baru dapat
                  dilihat di sini.
                </p>
                <p className='mt-6'>
                  Anda dapat mencetak kembali Kartu Tanda Peserta UTBK-SBMPTN
                  2021 di sini.
                </p>
                <button className='mt-6 p-2 rounded bg-teal-400 bg-blue-500 text-white animate-pulse'>
                  UNDUH PENGUMUMAN KETUA LTMPT (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* Tombol kembali */}
          <div className='bg-gray-200 p-4'>
            <Link to='/'>
              <button className='w-full p-2 rounded bg-green-500 text-white'>
                Kembali ke pencarian
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snm;
