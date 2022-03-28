import DetailInfo from './snm/theme0/DetailInfoLayout';
import Logo from './Logo';
import QrCode from './QrCode';
import logoSnm from '../assets/images/logo-snmptn-putih.png';
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

  const kalimatLulus = `SELAMAT! ANDA DINYATAKAN LULUS SELEKSI SNMPTN ${year}`;
  const kalimatGagal =
    'masih ada kesempatan mendaftar dan mengikuti utbk sbmptn 2021 atau seleksi mandiri ptn.';

  const kalimatDaful =
    'Informasi pendaftaran ulang di PTN/Politeknik Negeri dapat dilihat pada link berikut:';

  const infoTextStatus =
    'Status penerimaan Anda sebagai mahasiswa akan ditetapkan setelah PTN tujuan melakukan verifikasi data akademik (rapor dan/atau portofolio). Silakan Anda membaca peraturan tentang penerimaan mahasiswa baru di laman PTN tujuan.';
  const infoTextKip =
    'Khusus peserta KIP Kuliah, PTN tujuan juga dapat melakukan verifikasi data ekonomi dan/atau kunjungan ke tempat tinggal Anda sebelum menetapkan status penerimaan Anda.';

  return (
    <div className='w-full bg-snmOriginal bg-cover flex justify-center'>
      <div className='w-full min-h-screen max-w-screen-lg lg:max-w-screen-xl flex items-center'>
        <div className='w-full shadow-md text-white'>
          {/* Banner Header */}
          <div
            className='
            bg-gradient-to-r from-snmOriginal-rGradient to-snmOriginal-rGradient 
            flex justify-between items-center p-7'>
            <h1 className='uppercase font-bold text-2xl lg:text-3xl'>
              {dataMaba.isLulus ? kalimatLulus : kalimatGagal}
            </h1>
            <Link to='/'>
              <div className='flex items-center'>
                <Logo customClass='h-24' logo={logoSnm} />
              </div>
            </Link>
          </div>

          {/* Profile */}
          <div className='bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl p-7'>
            {/* MAIN INFO */}
            <div className='w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between'>
              <div className='mt-4 lg:mt-0'>
                <p className='flex text-snmOriginal-accentBlue font-semibold'>
                  <p>NISN {dataMaba.nisn || '0012345678'}</p>
                  <span className='hidden sm:inline'>&nbsp;-&nbsp;</span>
                  <p>NO. REG {dataMaba.noReg || '1231231232'}</p>
                </p>
                <h1 className='mt-1 text-3xl lg:text-4xl font-bold uppercase'>
                  {dataMaba.nama || 'John Doe'}
                </h1>

                {dataMaba.isLulus && (
                  <div className='mt-1 flex flex-col text-xl lg:text-2xl uppercase font-light'>
                    <h3>{dataMaba.prodi || 'informatika'}</h3>
                    <h3>{dataMaba.univ || 'Institut Neo Kultur'}</h3>
                  </div>
                )}
              </div>
              {dataMaba.isLulus && <QrCode size='w-32 h-32' />}
            </div>

            {/* DETAIL INFO */}
            <div className='mt-8 grid grid-cols-12'>
              <DetailInfo
                key1={profiles[0].title}
                val1={profiles[0].val}
                key2={profiles[2].title}
                val2={profiles[2].val}
              />
              {/* <span className=''></span> */}
              <DetailInfo
                customClass='mt-6 lg:mt-0'
                key1={profiles[1].title}
                val1={profiles[1].val}
                key2={profiles[3].title}
                val2={profiles[3].val}
              />
              <div className='bg-white col-span-12 mt-6 p-4 text-black lg:col-span-6 lg:mt-0'>
                <h3 className='text-lg font-semibold'>
                  Silakan lakukan pendaftaran ulang.
                </h3>
                <p className='mb-2 text-sm font-light'>{kalimatDaful}</p>
                <a
                  target='_blank'
                  rel='noreferrer'
                  class='font-bold underline text-blue-400'
                  href='https://github.com/plirapli/pengumuman-ltmpt-generator'>
                  https://pmb.universitaswakanda.ac.id
                </a>
              </div>
            </div>

            {/* Info gatau */}
            <div className='mt-8 text-sm font-thin text-white text-opacity-50'>
              <p>{infoTextStatus}</p>
              <p className='mt-2'>{infoTextKip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snm;
