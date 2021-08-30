import React from "react";
import { Icon } from "@iconify/react";
import logoSNM from "../../src/assets/images/logo-snmptn.png";
import logoLTMPT from "../../src/assets/images/logo-ltmpt.png";

function SnmLolos() {
  const profile = {
    nisn: 3305657,
    reg: 4210000011,
    isLulus: false,
    nama: "John Doe",
    tglLahir: "15/10/2002",
    kotaKab: "sleman",
    prov: "Daerah Istimewa Yogyakarta",
    sekolah: "SMA N 1 Yogyakarta",
  };

  return (
    <div>
      <div className="mt-0 sm:mt-16">
        <div className="mb-4">
          <div className="flex mb-4">
            <div className="w-14 sm:w-20 h-14 sm:h-20 mr-1">
              <img src={logoSNM} alt="logo_snmptn" />
            </div>
            <div className="w-52 sm:w-72 h-14 sm:h-20">
              <img src={logoLTMPT} alt="logo_ltmpt" />
            </div>
          </div>
          <div className="text-3xl">Pengumuman SNMPTN 2022</div>
        </div>
        <div className="bg-red-300 rounded-xl shadow p-4 mb-4 text-black text-opacity-75 uppercase">
          <h1 className="mb-2 font-bold text-xl">
            anda dinyatakan tidak lulus seleksi snmptn 2022
          </h1>
          <p>
            masih ada kesempatan mendaftar dan mengikuti utbk sbmptn 2021 atau
            seleksi mandiri ptn.
          </p>
        </div>

        <div className="bg-gray-200 rounded-xl shadow p-4 mb-4">
          <p className="text-sm flex flex-col sm:flex-row mb-2">
            <p className="mb-2 sm:mb-0">
              <span className="font-bold text-black text-opacity-30">NISN</span>{" "}
              {profile.nisn}
            </p>
            <span className="hidden sm:inline">&nbsp; | &nbsp;</span>
            <p>
              <span className="font-bold text-black text-opacity-30">
                NO. REG
              </span>{" "}
              {profile.reg}
            </p>
          </p>
          <h1 className="text-3xl font-bold uppercase">{profile.nama}</h1>
        </div>

        {/* Keterangan */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <div className="flex flex-col pr-2 pt-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-4 bg-gray-200 rounded-md shadow flex items-center justify-center">
                <Icon icon="ic:baseline-date-range" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Tanggal lahir
                </p>
                <p className="">{profile.tglLahir}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-200 mr-4 flex items-center justify-center rounded-md shadow">
                <Icon icon="ic:round-school" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Asal Sekolah
                </p>
                <p className="">{profile.sekolah}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pr-2 sm:pt-2 capitalize">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-200 mr-4 flex items-center justify-center rounded-md shadow">
                <Icon icon="fluent:location-24-filled" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Kabupaten / Kota
                </p>
                <p>{profile.kotaKab}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-200 mr-4 flex items-center justify-center rounded-md shadow">
                <Icon icon="mdi:city-variant" width="18" height="18" />
              </div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Provinsi
                </p>
                <p>{profile.prov}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnmLolos;
