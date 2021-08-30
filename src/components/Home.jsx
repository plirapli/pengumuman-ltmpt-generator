import React from "react";
import Logo from "./Logo";

function Home() {
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
      <form action="">
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
              type="number"
              placeholder="Provinsi"
              required
            />
            <input
              className="w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none"
              type="number"
              placeholder="Kab/Kota"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
