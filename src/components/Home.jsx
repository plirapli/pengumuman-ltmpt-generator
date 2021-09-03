import { useState } from "react";
import { useHistory } from "react-router";
import Logo from "./Logo";

function Home({ dataMaba, setDataMaba }) {
  let history = useHistory();
  // Data Camaba
  const [noReg, setNoReg] = useState("");
  const [nama, setNama] = useState("");
  const [lahir, setLahir] = useState({ d: "", m: "", y: "" });

  const [snm, setSnm] = useState(true);
  const [nisn, setNisn] = useState("");
  const [sekolah, setSekolah] = useState("");
  const [domisili, setDomisili] = useState({ kotaKab: "", prov: "" });

  const [isLolos, setIsLolos] = useState(true);
  const [univ, setUniv] = useState("");
  const [prodi, setProdi] = useState("");

  // input handler
  const handleSetParam = (param, setParam) => setParam(() => param);
  const inputDataHandler = (e, setInput) => {
    const { value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setInput(() => val);
  };
  const inputDataObjHandler = (e, setInput) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setInput((prev) => ({ ...prev, [name]: val }));
  };

  // submit handler
  const submitDataHandler = (e) => {
    e.preventDefault();
    const tgLahir = `${lahir.d}/${lahir.m}/${lahir.y}`;

    setDataMaba((prev) => ({
      ...prev,
      noReg,
      nama,
      tgLahir,
      snm,
      nisn,
      sekolah,
      kotaKab: domisili.kotaKab,
      prov: domisili.prov,
      isLolos,
      univ,
      prodi,
    }));

    snm ? history.push("/gagal") : history.push("/lolos");
  };

  return (
    <div>
      <Logo />
      <div className="mb-4">
        <h1 className="text-3xl font-bold uppercase">
          HASIL SELEKSI SNMPTN 2021
        </h1>
        <p className="text-black text-opacity-30">
          Silakan isi formulir di bawah ini.
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
            type="number"
            placeholder="No. Peserta"
            required
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold text-black text-opacity-30">
            Nama Peserta
          </label>
          <input
            onChange={(e) => inputDataHandler(e, setNama)}
            value={nama}
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
              onChange={(e) => inputDataObjHandler(e, setLahir)}
              name="d"
              value={lahir.d}
              className="w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none"
              type="number"
              placeholder="Tanggal"
              required
            />
            <input
              onChange={(e) => inputDataObjHandler(e, setLahir)}
              name="m"
              value={lahir.m}
              className="w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none"
              type="number"
              placeholder="Bulan"
              required
            />
            <input
              onChange={(e) => inputDataObjHandler(e, setLahir)}
              name="y"
              value={lahir.y}
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
                ${snm ? "bg-gray-300" : "bg-white hover:bg-gray-200"} 
                cursor-pointer
                duration-200
              `}
            >
              SNMPTN
            </div>
            <div
              onClick={() => handleSetParam(false, setSnm)}
              className={`
                p-3 sm:p-4
                w-full rounded-md shadow
                font-bold text-black text-opacity-60 
                ${!snm ? "bg-gray-300" : "bg-white hover:bg-gray-200"} 
                cursor-pointer
                duration-200
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
                NISN
              </label>
              <input
                onChange={(e) => inputDataHandler(e, setNisn)}
                value={nisn}
                className="p-3 sm:p-4 rounded-md shadow focus:outline-none text-sm sm:text-base"
                type="number"
                placeholder="NISN"
                required
              />
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-2 font-bold text-black text-opacity-30">
                Asal Sekolah
              </label>
              <input
                onChange={(e) => inputDataHandler(e, setSekolah)}
                value={sekolah}
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
                  onChange={(e) => inputDataObjHandler(e, setDomisili)}
                  name="kotaKab"
                  value={domisili.kotaKab}
                  className="w-full p-3 sm:p-4 mr-4 rounded-md shadow focus:outline-none"
                  type="text"
                  placeholder="Kab/Kota"
                  required
                />
                <input
                  onChange={(e) => inputDataObjHandler(e, setDomisili)}
                  name="prov"
                  value={domisili.prov}
                  className="w-full p-3 sm:p-4 rounded-md shadow focus:outline-none"
                  type="text"
                  placeholder="Provinsi"
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
                p-3 sm:p-4
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
                onChange={(e) => inputDataHandler(e, setUniv)}
                value={univ}
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
                onChange={(e) => inputDataHandler(e, setProdi)}
                value={prodi}
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
