import ProfileLayout from './sbm/theme0/ProfileLayout';
import Gagal from './sbm/theme0/KalimatGagal';
import Logo from './Logo';
import logoLtmpt from '../assets/images/logo-ltmpt.png';
import logoSponsor from '../assets/images/sponsor.png';
import QrCode from '../components/snm/theme0/QrCode';
import { Link } from 'react-router-dom';

function Snm({ dataMaba }) {
  const profile = [
    {
      title: 'nomor peserta',
      val: dataMaba.noReg || '123-123-12-0123',
    },
    {
      title: 'nama',
      val: dataMaba.nama || 'John Doe',
    },
    {
      title: 'tanggal lahir',
      val: dataMaba.tglLahir || '04/05/2003',
    },
    {
      title: 'PTN',
      val: dataMaba.univ || 'Institut Teknologi Neo Kultur',
    },
    {
      title: 'program studi',
      val: dataMaba.prodi || 'Informatika',
    },
  ];

  const year = new Date().getFullYear();

  const kalLulus = `Selamat! Anda dinyatakan lulus seleksi SBMPTN LTMPT ${year} di:`;
  const kalDaful = `Persyaratan pendaftaran ulang calon mahasiswa baru dapat dilihat di `;
  const kalUnduhKartu = `Anda dapat mencetak kembali Kartu Tanda Peserta UTBK-SBMPTN ${year} di `;

  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-white font-sbmFonts'>
      {/* Header */}
      <div className='p-4 grid grid-cols-12 place-content-center'>
        <div className='flex justify-center sm:justify-start col-span-12 sm:col-span-5'>
          <Link to='/'>
            <Logo customClass='w-full h-auto' logo={logoLtmpt} />
          </Link>
        </div>
        <div className='col-span-12 mt-4 sm:col-span-5 sm:col-end-13 sm:mt-0 sm:ml-6'>
          <Logo customClass='w-full h-auto' logo={logoSponsor} />
        </div>
      </div>

      <div className='w-full h-8 bg-sbmOriginal-blueLine'></div>

      {/* Body */}
      <div
        className='
          w-full sbmXl:max-w-sbmXl sbmLg:max-w-sbmLg md:max-w-sbmMd sm:max-w-sbmSm
          px-4'>
        <div
          className='
          my-8 font-bold text-center 
          text-base xl:text-2xl lg:text-xl md:text-lg'>
          PENGUMUMAN HASIL SELEKSI SBMPTN LTMPT {year}
        </div>

        {/* Hasil */}
        <div className='border border-black border-opacity-10 rounded-md overflow-hidden'>
          {!dataMaba.isLulus && (
            <Gagal nama={profile[1].val} noReg={profile[0].val} year={year} />
          )}

          {/* Profil Siswa */}
          {dataMaba.isLulus && (
            <div className='p-6 grid sm:grid-cols-12'>
              {dataMaba.isLulus && (
                <QrCode size='sm:col-span-4 w-11/12 sm:w-full' />
              )}
              <div className='bg-sbmOriginal-gray p-4 mt-2 sm:mt-0 sm:ml-6 sm:col-span-8'>
                <div className='flex flex-col'>
                  {/* Profile */}
                  <div>
                    {profile.map(
                      (prof, i) =>
                        i < 3 && (
                          <ProfileLayout
                            field={prof.title}
                            profile={prof.val}
                          />
                        )
                    )}
                  </div>

                  {/* PTN */}
                  <div className='mt-6'>
                    <p>{kalLulus}</p>
                    {profile.map(
                      (prof, i) =>
                        i > 2 && (
                          <ProfileLayout
                            field={prof.title}
                            profile={prof.val}
                          />
                        )
                    )}
                  </div>
                  <p className='mt-6'>
                    {kalDaful}
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/plirapli/pengumuman-ltmpt-generator'
                      className='text-sbmOriginal-blueLink hover:text-sbmOriginal-blueLinkHover hover:underline'>
                      sini
                    </a>
                    .
                  </p>
                  <p className='mt-6'>
                    {kalUnduhKartu}
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://portal.ltmpt.ac.id/'
                      className='text-sbmOriginal-blueLink hover:text-sbmOriginal-blueLinkHover hover:underline'>
                      sini
                    </a>
                    .
                  </p>
                  <button
                    className='mt-6 p-2 
                    bg-sbmOriginal-teal border-sbmOriginal-tealBorder text-white 
                    rounded animate-sbmPulse transition-all hover:bg-sbmOriginal-tealHover'>
                    UNDUH PENGUMUMAN KETUA LTMPT (PDF)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tombol kembali */}
          <div className='p-4 bg-black bg-opacity-3 border-t border-black border-opacity-10'>
            <Link to='/'>
              <button
                className='w-full p-2 rounded text-white transition-all
                         bg-sbmOriginal-green hover:bg-sbmOriginal-greenHover'>
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
