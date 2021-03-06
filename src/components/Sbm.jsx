import Logo from './Logo';
import logoLtmpt from '../assets/images/logo-ltmpt.png';
import logoSponsor from '../assets/images/sponsor.png';
import QrCode from './QrCode';
import { Link } from 'react-router-dom';

function Snm({ dataMaba }) {
  const year = new Date().getFullYear();

  const kalimatGagal =
    'semangat dan jangan putus asa! masih ada kesempatan mengikuti seleksi mandiri ptn.';

  const kalimatDaful =
    'Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat dilihat pada link berikut.';

  return (
    <div className='w-full max-w-screen-md p-4 sm:p-8'>
      <div className='mt-0 sm:mt-8'>
        <div className='mb-4'>
          <Link to='/'>
            <Logo customClass='w-1/2' logo={logoLtmpt} />
          </Link>
          <div className='mt-4 text-3xl'>Pengumuman SBMPTN {year}</div>
        </div>
        <div
          className={`${
            dataMaba.isLulus ? 'bg-green-200' : 'bg-red-300'
          } rounded-xl shadow p-4 mb-4 text-black text-opacity-75 uppercase`}>
          <h1 className='font-bold text-xl'>
            {`anda dinyatakan ${
              dataMaba.isLulus ? 'Lulus' : 'Tidak lulus'
            } seleksi sbmptn ${year}`}
          </h1>
          {!dataMaba.isLulus && <p className='mt-2'>{kalimatGagal}</p>}
        </div>

        <div className='bg-white rounded-xl shadow p-4 mb-4 flex flex-col sm:flex-row sm:items-center'>
          {dataMaba.isLulus && <QrCode size='w-32 h-32' />}
          <div className={dataMaba.isLulus && 'sm:ml-4'}>
            <h1 className='text-3xl font-bold uppercase'>
              {dataMaba.nama || 'John Doe'}
            </h1>

            <div className={`mt-2 flex flex-col sm:flex-row gap-1 sm:gap-8`}>
              <div className='flex-col'>
                <p className='text-sm font-bold text-black text-opacity-30'>
                  TANGGAL LAHIR :
                </p>
                <p className=''>{dataMaba.tglLahir || '05/04/2003'}</p>
              </div>

              <div className='flex-col'>
                <p className='text-sm font-bold text-black text-opacity-30'>
                  NOMOR PESERTA :
                </p>
                <p>{dataMaba.noReg || '123-123-12-0123'}</p>
              </div>
            </div>

            {dataMaba.isLulus && (
              <div className='mt-2 flex flex-col sm:text-lg uppercase font-bold'>
                <h3>{dataMaba.univ || 'Institut Neo Kultur'}</h3>
                <h3>{dataMaba.prodi || 'informatika'}</h3>
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
              className='underline text-blue-500'
              href='https://github.com/plirapli/pengumuman-ltmpt-generator'>
              {dataMaba.domainUniv}
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
