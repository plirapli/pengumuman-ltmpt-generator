import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Logo from './Logo';
import logoLtmpt from '../assets/images/logo-ltmpt.png';

function Home({ setDataMaba }) {
  let history = useHistory();

  // Button
  const [click, setClick] = useState(true);

  // Data Domisili
  const [provinsi, setProvinsi] = useState([]);
  const [provId, setProvId] = useState('11');
  const [kotaKab, setKotaKab] = useState([]);

  // Data Camaba
  const [noReg, setNoReg] = useState('');
  const [nama, setNama] = useState('');
  const [lahir, setLahir] = useState({ d: '', m: '', y: '' });

  const [snm, setSnm] = useState(true);
  const [nisn, setNisn] = useState('');
  const [sekolah, setSekolah] = useState('');
  const [domisili, setDomisili] = useState({
    kotaKab: 'KABUPATEN SIMEULUE',
    prov: 'ACEH',
  });

  const [isLulus, setIsLulus] = useState(true);
  const [univ, setUniv] = useState('');
  const [prodi, setProdi] = useState('');

  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then((response) => response.json())
      .then((provinces) => setProvinsi(() => provinces));
  }, []);

  useEffect(() => {
    setDomisili((prev) => ({ ...prev, prov: 'ACEH' }));
    setProvId('11');
  }, [snm]);

  useEffect(() => {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provId}.json`
    )
      .then((response) => response.json())
      .then((regencies) => setKotaKab(() => regencies));
  }, [domisili.prov, provId, snm]);

  // nomor peserta separator
  const threeDigitsSeparator = (num) => {
    const arr = num
      .toString()
      .split('')
      .reverse()
      .map((n, i) => (i % 3 === 0 ? n + '-' : n))
      .reverse();

    return (
      // Remove the last separator
      arr
        .map((n, i) =>
          i + 1 === arr.length ? n.split('').slice(0, 1).join('') : n
        )
        .join('')
    );
  };

  // == INPUT HANDLER
  // Restrict to only input number
  const numType = (val) => {
    return val.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  };

  // Btn type
  const handleSetParam = (param, setParam) => setParam(() => param);

  // Str type
  const inputDataHandler = (e, setInput, num) => {
    const { value } = e.target;
    const val = num ? numType(value) : value;
    setInput(() => val);
  };

  // Obj type
  const inputDataObjHandler = (e, setInput, num, select) => {
    const { name, value, options, selectedIndex } = e.target;
    const val = num ? numType(value) : value;

    select && setProvId(options[selectedIndex].dataset.prov);

    setInput((prev) => ({ ...prev, [name]: val }));
  };
  // == INPUT HANDLER

  // == SUBMIT HANDLER
  const submitDataHandler = (e) => {
    e.preventDefault();

    const tglLahir = `${lahir.d}/${lahir.m}/${lahir.y}`;
    const noPeserta = !snm ? threeDigitsSeparator(noReg) : noReg;
    const valSekolah = sekolah.toUpperCase();

    setDataMaba((prev) => ({
      ...prev,
      noReg: noPeserta,
      nama,
      tglLahir,
      snm,
      nisn,
      sekolah: valSekolah,
      kotaKab: domisili.kotaKab,
      prov: domisili.prov,
      isLulus,
      univ,
      prodi,
    }));

    snm ? history.push('/snm/theme1') : history.push('/sbm/theme1');
  };
  // == SUBMIT HANDLER

  // YEAR
  const year = new Date().getFullYear();

  return (
    <div className='p-4 sm:p-8 w-full max-w-screen-md'>
      <Logo logo={logoLtmpt} />
      <div className='mb-4'>
        <h1 className='mt-4 text-3xl font-bold uppercase'>
          {`hasil seleksi ${snm ? 'snmptn' : 'sbmptn'} ${year}`}
        </h1>
        <p className='text-black text-opacity-30'>
          Silakan isi formulir di bawah ini.
        </p>
      </div>

      <div
        className={`${
          click ? 'flex' : 'hidden'
        } justify-between bg-blue-200 my-4 p-3 sm:p-4 rounded-md shadow text-sm text-black text-opacity-30 uppercase`}>
        Data yang telah anda isi tidak akan dikirimkan ke server mana pun.
        <span
          onClick={() => setClick(() => !click)}
          className='cursor-pointer hover:text-black transition-all'>
          &#10005;
        </span>
      </div>

      {/* Form Register Camaba */}
      <form onSubmit={submitDataHandler} action=''>
        <div className='flex flex-col mb-8'>
          <label className='mb-2 font-bold text-black text-opacity-30'>
            Nomor Peserta
          </label>
          <input
            onChange={(e) => inputDataHandler(e, setNoReg, true)}
            value={noReg}
            className='p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base'
            type='name'
            placeholder='No. Peserta'
            maxLength={snm ? '10' : '12'}
            required
          />
        </div>
        <div className='flex flex-col mb-8'>
          <label className='mb-2 font-bold text-black text-opacity-30'>
            Nama Peserta
          </label>
          <input
            onChange={(e) => inputDataHandler(e, setNama)}
            value={nama}
            className='p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base'
            type='text'
            placeholder='Nama Peserta'
            required
          />
        </div>

        <div className='flex flex-col mb-8'>
          <label className='mb-2 font-bold text-black text-opacity-30'>
            Tanggal Lahir
          </label>
          <div className='flex text-sm sm:text-base'>
            <input
              onChange={(e) => inputDataObjHandler(e, setLahir, true)}
              name='d'
              value={lahir.d}
              className='w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none text-center'
              type='text'
              placeholder='Tanggal'
              maxLength='2'
              required
            />
            <input
              onChange={(e) => inputDataObjHandler(e, setLahir, true)}
              name='m'
              value={lahir.m}
              className='w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none text-center'
              type='text'
              placeholder='Bulan'
              maxLength='2'
              required
            />
            <input
              onChange={(e) => inputDataObjHandler(e, setLahir, true)}
              name='y'
              value={lahir.y}
              className='w-full p-3 sm:p-4 rounded-md shadow focus:outline-none text-center'
              type='text'
              placeholder='Tahun'
              maxLength='4'
              required
            />
          </div>
        </div>
        <div className='flex flex-col mb-8'>
          <label className='mb-2 font-bold text-black text-opacity-30'>
            Jenis Seleksi
          </label>
          <div className='flex text-center'>
            <div
              onClick={() => handleSetParam(true, setSnm)}
              className={`
                w-full rounded-md shadow
                p-3 sm:p-4 mr-4
                font-bold text-black text-opacity-60 
                ${snm ? 'bg-gray-300' : 'bg-white hover:bg-gray-200'} 
                cursor-pointer
                duration-200
              `}>
              SNMPTN
            </div>
            <div
              onClick={() => handleSetParam(false, setSnm)}
              className={`
                p-3 sm:p-4
                w-full rounded-md shadow
                font-bold text-black text-opacity-60 
                ${!snm ? 'bg-gray-300' : 'bg-white hover:bg-gray-200'} 
                cursor-pointer
                duration-200
              `}>
              SBMPTN
            </div>
          </div>
        </div>
        {snm && (
          <>
            <div className='flex flex-col mb-8'>
              <label className='mb-2 font-bold text-black text-opacity-30'>
                NISN
              </label>
              <input
                onChange={(e) => inputDataHandler(e, setNisn, true)}
                value={nisn}
                className='p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base'
                type='text'
                placeholder='NISN'
                maxLength='10'
                required
              />
            </div>
            <div className='flex flex-col mb-8'>
              <label className='mb-2 font-bold text-black text-opacity-30'>
                Asal Sekolah
              </label>
              <input
                onChange={(e) => inputDataHandler(e, setSekolah)}
                value={sekolah}
                className='p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base'
                type='text'
                placeholder='Asal Sekolah'
                required
              />
            </div>
            <div className='flex flex-col mb-8'>
              <label className='mb-2 font-bold text-black text-opacity-30'>
                Domisili
              </label>
              <div className='flex text-sm sm:text-base'>
                <div className='w-full flex items-center relative'>
                  <select
                    name='prov'
                    title='Daftar Provinsi'
                    className='w-full p-3 pr-8 sm:p-4 sm:pr-10 mr-4 rounded-md shadow focus:outline-none appearance-none overflow-ellipsis'
                    onChange={(e) => {
                      inputDataObjHandler(e, setDomisili, false, true);
                    }}>
                    {provinsi.map((prov) => (
                      <option
                        data-prov={prov.id}
                        key={prov.id}
                        value={prov.name}>
                        {prov.name}
                      </option>
                    ))}
                  </select>
                  <div className='absolute right-7'>▼</div>
                </div>

                <div className='w-full flex items-center relative '>
                  <select
                    name='kotaKab'
                    title='Daftar Kabupaten'
                    id=''
                    className='w-full p-3 pr-8 sm:p-4 sm:pr-12 rounded-md shadow focus:outline-none appearance-none overflow-ellipsis'
                    onChange={(e) => inputDataObjHandler(e, setDomisili)}>
                    {kotaKab.map((regency) => (
                      <option key={regency.id} value={regency.name}>
                        {regency.name}
                      </option>
                    ))}
                  </select>
                  <div className='absolute right-2'>▼</div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className='flex flex-col mb-8'>
          <label className='mb-2 font-bold text-black text-opacity-30'>
            Hasil
          </label>
          <div className='flex text-center'>
            <div
              onClick={() => handleSetParam(true, setIsLulus)}
              className={`
                w-full rounded-md shadow
                p-3 sm:p-4 mr-4
                font-bold text-black text-opacity-60 
                ${isLulus ? 'bg-green-300' : 'bg-white hover:bg-green-100'} 
                cursor-pointer
                duration-200
              `}>
              Lulus
            </div>
            <div
              onClick={() => handleSetParam(false, setIsLulus)}
              className={`
                p-3 sm:p-4
                w-full rounded-md shadow
                font-bold text-black text-opacity-60 
                ${!isLulus ? 'bg-red-300' : 'bg-white hover:bg-red-100'} 
                cursor-pointer
                duration-200
              `}>
              Gagal
            </div>
          </div>
        </div>
        {isLulus && (
          <>
            <div className='flex flex-col mb-8'>
              <label className='mb-2 font-bold text-black text-opacity-30'>
                Universitas
              </label>
              <input
                onChange={(e) => inputDataHandler(e, setUniv)}
                value={univ}
                className='p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base'
                type='text'
                placeholder='Universitas Tujuan'
                required
              />
            </div>
            <div className='flex flex-col mb-8'>
              <label className='mb-2 font-bold text-black text-opacity-30'>
                Program Studi
              </label>
              <input
                onChange={(e) => inputDataHandler(e, setProdi)}
                value={prodi}
                className='p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base'
                type='text'
                placeholder='Program Studi'
                required
              />
            </div>
          </>
        )}
        <button
          type='submit'
          className='
          w-full bg-gray-300 p-3 sm:p-4 
          rounded-md shadow 
          text-sm sm:text-base font-bold
          hover:bg-gray-200
          duration-200
        '>
          Generate
        </button>
      </form>
      {/* End Form Register Camaba */}
    </div>
  );
}

export default Home;
