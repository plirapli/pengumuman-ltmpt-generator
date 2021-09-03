import { Icon } from "@iconify/react";
import Logo from "./Logo";
import QrCode from "./QrCode";

function SnmGagal({ dataMaba }) {
  const kalimatGagal =
    "masih ada kesempatan mendaftar dan mengikuti utbk sbmptn 2021 atau seleksi mandiri ptn.";

  return (
    <div>
      <div className="mt-0 sm:mt-16">
        <div className="mb-4">
          <Logo />
          <div className="mt-4 text-3xl">Pengumuman SNMPTN 2022</div>
        </div>
        <div
          className={`${
            dataMaba.isLulus ? "bg-green-200" : "bg-red-300"
          } rounded-xl shadow p-4 mb-4 text-black text-opacity-75 uppercase`}
        >
          <h1 className="font-bold text-xl">
            anda dinyatakan tidak lulus seleksi snmptn 2022
          </h1>
          {!dataMaba.isLulus && <p className="mt-2">{kalimatGagal}</p>}
        </div>

        <div className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col sm:flex-row">
          {dataMaba.isLulus && <QrCode />}
          <div>
            <p className="text-sm flex flex-col sm:flex-row mb-2">
              <p className="mb-2 sm:mb-0">
                <span className="font-bold text-black text-opacity-30">
                  NISN
                </span>{" "}
                {dataMaba.nisn || "0012345678"}
              </p>
              <span className="hidden sm:inline">&nbsp; | &nbsp;</span>
              <p>
                <span className="font-bold text-black text-opacity-30">
                  NO. REG
                </span>{" "}
                {dataMaba.noReg || "1231231232"}
              </p>
            </p>
            <h1 className="text-3xl font-bold uppercase">
              {dataMaba.nama || "John Doe"}
            </h1>
            {!dataMaba.isLulus && (
              <div className="mt-2 flex flex-col sm:flex-row sm:text-lg uppercase">
                <h3>teknik informatika</h3>
                <span className="hidden sm:inline">&nbsp; | &nbsp;</span>
                <h3>upn"veteran" Yogyakarta</h3>
              </div>
            )}
          </div>
        </div>

        {/* Keterangan */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <div className="flex flex-col pr-2 pt-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-4 bg-white rounded-md shadow flex items-center justify-center">
                <Icon icon="ic:baseline-date-range" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Tanggal lahir
                </p>
                <p className="">{dataMaba.tglLahir || "31/12/2012"}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white mr-4 flex items-center justify-center rounded-md shadow">
                <Icon icon="ic:round-school" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Asal Sekolah
                </p>
                <p className="uppercase">
                  {dataMaba.sekolah || "sma negeri 1 kwangya"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pr-2 sm:pt-2 capitalize">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white mr-4 flex items-center justify-center rounded-md shadow">
                <Icon icon="fluent:location-24-filled" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Kabupaten / Kota
                </p>
                <p>{dataMaba.kotaKab || "Konoha"}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white mr-4 flex items-center justify-center rounded-md shadow">
                <Icon icon="mdi:city-variant" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Provinsi
                </p>
                <p>{dataMaba.prov || "Earth C-137"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnmGagal;
