import DetailInfo from './snm/theme0/DetailInfoLayout';
import Logo from './Logo';
import QrCode from './snm/theme0/QrCode';
import logoSnm from '../assets/images/logo-snmptn-putih.png';
import { Link } from 'react-router-dom';

function Snm({ dataMaba }) {
  const profiles = [
    { title: 'tanggal lahir', val: dataMaba.tglLahir || '05/04/2003' },
    { title: 'asal sekolah', val: dataMaba.sekolah || 'SMA NEGERI 1 KWANGYA' },
    { title: 'kabupaten/kota', val: dataMaba.kotaKab || 'KONOHA' },
    { title: 'provinsi', val: dataMaba.prov || 'KWANGYA' },
  ];

  const year = new Date().getFullYear();

  const kalimatGagal = `masih ada kesempatan mendaftar dan mengikuti utbk sbmptn ${year} atau seleksi mandiri ptn.`;

  const kalimatDaful =
    'Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat dilihat pada link berikut:';

  const infoTextStatus =
    'Status penerimaan Anda sebagai mahasiswa akan ditetapkan setelah PTN tujuan melakukan verifikasi data akademik (rapor dan/atau portofolio). Silakan Anda membaca peraturan tentang penerimaan mahasiswa baru di laman PTN tujuan.';
  const infoTextKip =
    'Khusus peserta KIP Kuliah, PTN tujuan juga dapat melakukan verifikasi data ekonomi dan/atau kunjungan ke tempat tinggal Anda sebelum menetapkan status penerimaan Anda.';

  return (
    <div className='font-lato w-full bg-snmOriginal bg-cover flex justify-center'>
      <div
        className={`w-full min-h-screen 
        ${
          dataMaba.isLulus
            ? 'max-w-screen-lg lg:max-w-screen-xl'
            : 'max-w-screen-md p-5 md:p-0'
        } 
        flex items-center`}>
        <div className='w-full shadow-md text-white'>
          {/* Banner Header */}
          <div
            className={`
            bg-gradient-to-r ${
              dataMaba.isLulus
                ? 'from-snmOriginal-lulus-lGradient to-snmOriginal-lulus-rGradient'
                : 'from-snmOriginal-gagal-lGradient to-snmOriginal-gagal-rGradient'
            } 
            flex flex-col-reverse md:flex-row md:justify-between md:items-center p-5 md:p-7`}>
            <div className='mt-4 md:mt-0 mr-0 md:mr-4 uppercase'>
              <h1 className='font-black text-xl lg:text-2xl'>
                {`${dataMaba.isLulus ? 'Selamat! ' : ''}
              anda dinyatakan 
              ${dataMaba.isLulus ? 'Lulus' : 'Tidak lulus'} 
              seleksi snmptn ${year}`}
              </h1>
              {!dataMaba.isLulus && (
                <p className='mt-2 uppercase'>{kalimatGagal}</p>
              )}
            </div>
            <Link to='/'>
              <div className='flex items-center'>
                <Logo customClass='h-20' logo={logoSnm} />
              </div>
            </Link>
          </div>

          {/* Profile */}
          <div className='bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl p-5 sm:p-7'>
            {/* MAIN INFO */}
            <div className='w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between'>
              <div className={`${dataMaba.isLulus ? 'mt-4 lg:mt-0' : 'mt-0'}`}>
                <div className='flex text-snmOriginal-accentBlue font-black text-sm'>
                  <p>NISN {dataMaba.nisn || '0012345678'}</p>
                  <span>&nbsp;-&nbsp;</span>
                  <p>NO. REG {dataMaba.noReg || '1231231232'}</p>
                </div>
                <h1 className='mt-1 text-3xl lg:text-4xl font-black uppercase'>
                  {dataMaba.nama || 'John Doe'}
                </h1>

                {dataMaba.isLulus && (
                  <div className='mt-1 flex flex-col text-xl uppercase font-light'>
                    <h3>{dataMaba.prodi || 'informatika'}</h3>
                    <h3>{dataMaba.univ || 'Institut Neo Kultur'}</h3>
                  </div>
                )}
              </div>
              {dataMaba.isLulus && <QrCode size='w-32 h-32' />}
            </div>

            {/* DETAIL INFO */}
            <div className='mt-8 grid grid-cols-12'>
              <div
                className={`
                  col-span-12 ${dataMaba.isLulus ? 'lg:col-span-6' : ''}
                  grid grid-rows-4 lg:grid-rows-2 grid-flow-col
                  gap-4
                  font-black capitalize`}>
                {profiles.map((profile, i) => (
                  <DetailInfo
                    key={i}
                    isLulus={dataMaba.isLulus}
                    profile={profile}
                  />
                ))}
              </div>
              {dataMaba.isLulus && (
                <div className='bg-white col-span-12 mt-6 p-4 text-black lg:col-span-6 lg:mt-0'>
                  <h3 className='text-lg font-semibold'>
                    Silakan lakukan pendaftaran ulang.
                  </h3>
                  <p className='mb-2 text-sm font-light'>{kalimatDaful}</p>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    class='text-base lg:text-lg font-black text-snmOriginal-link'
                    href='https://github.com/plirapli/pengumuman-ltmpt-generator'>
                    {dataMaba.domainUniv}
                  </a>
                </div>
              )}
            </div>

            {/* Info gatau */}
            {dataMaba.isLulus && (
              <div className='mt-8 text-sm font-light tracking-wider text-white text-opacity-50'>
                <p>{infoTextStatus}</p>
                <p className='mt-2'>{infoTextKip}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snm;
