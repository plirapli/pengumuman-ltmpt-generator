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

        <div className='w-full h-8 bg-blue-700'></div>

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
                      Selamat! Anda dinyatakan lulus seleksi SBMPTN LTMPT 2021
                      di:
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
    </div>
  );
}

export default Snm;
