import React from "react";

function App() {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-screen-sm">
        <div className="mb-4">Lorem ipsum dolor sit amet</div>
        <div className="border p-4 mb-4">
          <h1 className="mb-2 font-bold text-xl">
            Lorem ipsum dolor sit amet 2021
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            excepturi, earum, voluptas sint laudantium est deleniti.
          </p>
        </div>

        <div className="border p-4 mb-4">
          <p className=" text-sm">NISN 123210078 - NO. REG 3404131510000005</p>
          <h1 className="text-2xl font-bold uppercase">John Doe</h1>
        </div>

        {/* Keterangan */}
        <div className="border mb-4">
          <div className="flex justify-between px-4 py-2">
            <div className="flex items-center">
              <div className="mr-3 border border-red-600 w-8 h-8"></div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Tanggal lahir
                </p>
                <p className="">25/04/2001</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-3 border border-red-600 w-8 h-8"></div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Kabupaten / Kota
                </p>
                <p className="">Kota Yogyakarta</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4 py-2">
            <div className="flex items-center">
              <div className="mr-3 border border-red-600 w-8 h-8"></div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Tanggal lahir
                </p>
                <p className="">25/04/2001</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-3 border border-red-600 w-8 h-8"></div>
              <div>
                <p className="text-xs font-bold text-black text-opacity-30">
                  Kabupaten / Kota
                </p>
                <p className="">Kota Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
