import React, { useState } from "react";
import Logo from "./Logo";

function Home() {
  // Data Camaba
  const [noReg, setNoReg] = useState("");
  const [nama, setNama] = useState("");
  const [lahir, setLahir] = useState({});

  const [snm, setSnm] = useState(true);
  const [sekolah, setSekolah] = useState("");
  const [domisili, setDomisili] = useState({});

  const [isLolos, setIsLolos] = useState(true);
  const [univ, setUniv] = useState("");
  const [prodi, setProdi] = useState("");

  // Seluruh data camaba
  const [data, setData] = useState({});

  const handleSetParam = (param, setParam) => setParam(() => param);

  const inputDataHandler = (e, setInput) => {
    setInput(() => e.target.value);
  };

  const submitDataHandler = (e) => {
    e.preventDefault();
    return console.log("tes");
  };

  return (
    <div>
      <Logo />
      <div className="mb-4">
        <h1 className="text-3xl font-bold uppercase">
          HASIL SELEKSI SNMPTN 2021
        </h1>
        <p className="text-black text-opacity-30">
          Silakan isi formulir di bawah.
        </p>
      </div>

      {/* Form Register Camaba */}
      <form onSubmit={submitDataHandler} action="">
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold text-black text-opacity-30">
            Nomor Peserta
          </label>
          <input
            onChange={(e) => inputDataHandler(e, setNoReg)}
            value={noReg}
            className="p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base"
            type="text"
            placeholder="Nomor Peserta"
            required
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold text-black text-opacity-30">
            Nama Peserta
          </label>
          <input
            className="p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base"
            type="text"
            placeholder="Nama Peserta"
            required
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold text-black text-opacity-30">
            Tanggal Lahir
          </label>
          <div className="flex text-sm sm:text-base">
            <input
              className="w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none"
              type="number"
              placeholder="Tanggal"
              required
            />
            <input
              className="w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none"
              type="number"
              placeholder="Bulan"
              required
            />
            <input
              className="w-full p-3 sm:p-4 rounded-md shadow focus:outline-none"
              type="number"
              placeholder="Tahun"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold text-black text-opacity-30">
            Jenis Seleksi
          </label>
          <div className="flex text-center">
            <div
              onClick={() => handleSetParam(true, setSnm)}
              className={`
                w-full rounded-md shadow
                p-3 sm:p-4 mr-4
                font-bold text-black text-opacity-60 
                ${snm ? "bg-gray-300" : "bg-white"} 
                cursor-pointer
              `}
            >
              SNMPTN
            </div>
            <div
              onClick={() => handleSetParam(false, setSnm)}
              className={`
                p-3 sm:p-4 mr-4
                w-full rounded-md shadow
                font-bold text-black text-opacity-60 
                ${!snm ? "bg-gray-300" : "bg-white"} 
                cursor-pointer
              `}
            >
              SBMPTN
            </div>
          </div>
        </div>
        {snm && (
          <>
            <div className="flex flex-col mb-8">
              <label className="mb-2 font-bold text-black text-opacity-30">
                Asal Sekolah
              </label>
              <input
                className="p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base"
                type="text"
                placeholder="Asal Sekolah"
                required
              />
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-2 font-bold text-black text-opacity-30">
                Domisili
              </label>
              <div className="flex text-sm sm:text-base">
                <input
                  className="w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none"
                  type="text"
                  placeholder="Provinsi"
                  required
                />
                <input
                  className="w-full p-3 sm:p-4 rounded-md shadow focus:outline-none"
                  type="text"
                  placeholder="Kab/Kota"
                  required
                />
              </div>
            </div>
          </>
        )}
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold text-black text-opacity-30">
            Hasil
          </label>
          <div className="flex text-center">
            <div
              onClick={() => handleSetParam(true, setIsLolos)}
              className={`
                w-full rounded-md shadow
                p-3 sm:p-4 mr-4
                font-bold text-black text-opacity-60 
                ${isLolos ? "bg-green-300" : "bg-white hover:bg-green-100"} 
                cursor-pointer
                duration-200
              `}
            >
              Lolos
            </div>
            <div
              onClick={() => handleSetParam(false, setIsLolos)}
              className={`
                p-3 sm:p-4 mr-4
                w-full rounded-md shadow
                font-bold text-black text-opacity-60 
                ${!isLolos ? "bg-red-300" : "bg-white hover:bg-red-100"} 
                cursor-pointer
                duration-200
              `}
            >
              Gagal
            </div>
          </div>
        </div>
        {isLolos && (
          <>
            <div className="flex flex-col mb-8">
              <label className="mb-2 font-bold text-black text-opacity-30">
                Universitas
              </label>
              <input
                className="p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base"
                type="text"
                placeholder="Universitas Tujuan"
                required
              />
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-2 font-bold text-black text-opacity-30">
                Program Studi
              </label>
              <input
                className="p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base"
                type="text"
                placeholder="Program Studi"
                required
              />
            </div>
          </>
        )}
        <button
          type="submit"
          className="
          w-full bg-gray-300 p-3 sm:p-4 
          rounded-md shadow 
          text-sm sm:text-base font-bold
          hover:bg-gray-200
          duration-200
        "
        >
          Generate
        </button>
      </form>
    </div>
  );
}

export default Home;
