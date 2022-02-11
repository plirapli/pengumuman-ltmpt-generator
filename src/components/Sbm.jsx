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
    <div className='w-full max-w-screen-md'>
      <div className='mt-0 sm:mt-8'>
        <div className='mb-4'>
          <Link to='/'>
            <Logo logo={logoLtmpt} />
          </Link>
          <div className='mt-4 text-3xl'>Pengumuman SBMPTN 2022</div>
        </div>
        <div
          className={`${
            dataMaba.isLulus ? 'bg-green-200' : 'bg-red-300'
          } rounded-xl shadow p-4 mb-4 text-black text-opacity-75 uppercase`}>
          <h1 className='font-bold text-xl'>
            {`anda dinyatakan ${
              dataMaba.isLulus ? 'Lulus' : 'Tidak lulus'
            } seleksi sbmptn 2022`}
          </h1>
          {!dataMaba.isLulus && <p className='mt-2'>{kalimatGagal}</p>}
        </div>

        <div className='bg-white rounded-xl shadow p-4 mb-4 flex flex-col sm:flex-row sm:items-center'>
          {dataMaba.isLulus && <QrCode />}
          <div>
            <h1 className='text-3xl font-bold uppercase'>
              {dataMaba.nama || 'John Doe'}
            </h1>

            <div className={`mt-2 flex flex-col sm:flex-row gap-1 sm:gap-8`}>
              <div className='flex-col'>
                <p className='text-sm font-bold text-black text-opacity-30'>
                  TANGGAL LAHIR :
                </p>
                <p className=''>{dataMaba.tglLahir || '31/12/2012'}</p>
              </div>

              <div className='flex-col'>
                <p className='text-sm font-bold text-black text-opacity-30'>
                  NOMOR PESERTA :
                </p>
                <p>{dataMaba.noReg || '123-123-12-0123'}</p>
              </div>
            </div>

            {dataMaba.isLulus && (
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
            )}
          </div>
        </div>

        {/* Daftar Ulang */}
        <div className='bg-white rounded-xl shadow p-4 mt-4 text-black text-opacity-75'>
          <h1 className='font-bold uppercase'>
            Silakan lakukan pendaftaran ulang.
          </h1>
          <p className='uppercase'>{kalimatDaful}</p>
          <div className='mt-2 break-words'>
            <a
              target='_blank'
              rel='noreferrer'
              class='underline text-blue-500'
              href='https://github.com/plirapli/pengumuman-ltmpt-generator'>
              https://pmb.universitaswakanda.ac.id
            </a>
          </div>
        </div>
        <div className='flex justify-center'>
          <Logo customClass='mt-8' logo={logoSponsor} />
        </div>
      </div>
    </div>
  );
}

export default Snm;
