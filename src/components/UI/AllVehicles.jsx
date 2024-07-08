import React from 'react'

function AllVehicles() {
  return (
    <div className='w-10/12 mx-auto'>
        <div>
        <div className="flex flex-col items-center  pt-15 pb-6 bg-white leading-[100%] text-[#000db6] max-md:px-5">
      <div className="flex gap-5 mt-10 w-full max-w-[1400px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-4xl font-bold">Explore All Vehicles</div>
        <div className="flex gap-3 my-auto text-base font-medium text-center">
          <div>View All</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84a29f6731a06985362308e49cab3a845cf5d3b4929c759d8c41432c094faab?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            className="shrink-0 w-3.5 aspect-square"
          />
        </div>
      </div>
    </div> 

    <div className="flex gap-5 items-start pt-2 text-base font-medium leading-7 border-b border-gray-200 border-solid text-slate-950 max-md:flex-wrap">
      <div className="flex flex-col self-stretch px-5">
        <div>Recent Cars</div>
        <div className="shrink-0 mt-5 h-0.5 bg-[#f9a826]" />
      </div>
      <div className="flex-auto">Featured Cars</div>
      <div className="flex-auto max-md:max-w-full">Popular Cars</div>
    </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
      <div>

    <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[343px]">
      <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-5 pt-5 pb-20 w-full text-sm font-medium leading-6 text-white capitalize aspect-[1.5]">
        <img src="/assets/vehicle-img/car2.png" alt="" />
        <div className="relative justify-center px-4 py-2.5 bg-[#f9a826] rounded-[30px]">
          Great Price
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/348fe31f7de4c903fb742339ce50bff35e5678243cc310b136cbda8c1b8629fb?apiKey=f417b8c00fe14582a1a201b8017683ae&"
          className="shrink-0 w-9 aspect-square"
        />
      </div>
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-[#000d6b]">
          Toyota Camry New
        </div>
        <div className="mt-2.5 text-sm leading-4 text-slate-950">
          3.5 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 text-[#000d6b]">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b638a452eed951ff1261632504feea0fe82c611ce4afa6ba1fa08eb480d93553?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px] bg-[#f9a826]"
            />
            <div className="text-[#000d6b]">20 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1aa89b3dc655ef64b399fc74f74e8bc0fc173ee3fa9c71c6849bbbf4f78ee15?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Petrol</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0230a66e60b5982f048e2cb3f205fb32036b575545e55c338915cb4765650266?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Automatic</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ca5f29be414001cbf3dab724712d408849c200c42c8d104f7507b3c7fbc443?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2023</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $40,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div className="grow">View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d376af8b9985b69e9e4e6668b1edd74a04bdc1d8c0945ed39a929af4fe0184f4?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>

      </div>
      <div>
      <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[342px]">
      <img src="/assets/vehicle-img/car3.png" alt="" />
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-[#000d6b]">
          T-Cross – 2023
        </div>
        <div className="self-start mt-3.5 text-sm leading-4 text-slate-950">
          4.0 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f23822ee1365fbf24b2db05e41e9f046be156c8b2c6316e1c2d6859198d74b4?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>15 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2314abd824d6c6a766f432210dad7664a9e42fa34ca43371da03d9dfaf43e480?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Petrol</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aedc244bd959c6b0507f497c06ccd1bd33d620f238ff4c4c8e5f391cef28f558?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>CVT</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a54e98b654f39ac559dc18f94f4e5ccf06361c446ab936630abb1a0903ac2b67?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2023</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $15,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div>View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6dd55afec2d6ddeb59fd4fd7d994e4066da02fcdb2641c7cb5edea5bd1c540f?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>

      </div>
      <div>
    <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[343px]">
      <img src="/assets/vehicle-img/car4.png" alt="" />
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-[#000d6b]">
          C-Class – 2023
        </div>
        <div className="mt-3.5 text-sm leading-4 text-slate-950">
          4.0 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4f8d08f756f3c6cfcf3bb6affd82a0f2409cb13082c82031efbca038482ffdc?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>50 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3022ecb208907e9adb272e4a775ff9b3be71683f5d0b0c213b7656684a03c022?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Petrol</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0230a66e60b5982f048e2cb3f205fb32036b575545e55c338915cb4765650266?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Automatic</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bab4cc712336518f781d8313b6254f23a855bfcfb4935a75e3794e643d02ea93?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2023</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $150,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div className="grow">View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d376af8b9985b69e9e4e6668b1edd74a04bdc1d8c0945ed39a929af4fe0184f4?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>



      </div>
      <div >
      <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[342px]">
      <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-5 pt-5 pb-20 w-full text-sm font-medium leading-6 text-white capitalize aspect-[1.5]">
        <img src="/assets/vehicle-img/car5.png" alt="" />
        <div className="relative justify-center px-4 py-2.5 bg-[#00d6b] rounded-[30px]">
          Great Price
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51183dfc62d2b3c366bced2381e8bc5f886f607da1b506833488d047d47c10cf?apiKey=f417b8c00fe14582a1a201b8017683ae&"
          className="shrink-0 w-9 aspect-square"
        />
      </div>
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-[#000d6b]">
          Ford Transit – 2021
        </div>
        <div className="self-start mt-3.5 text-sm leading-4 text-slate-950">
          4.0 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 justify-between mt-5 text-sm leading-4 text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8d7f15b3668e435b3e89952c70cbd557b1a1e4b92ced3ba4137b19e54ca9b8?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="flex-auto">2500 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/964050ec402b1225a38f886983adde82c7161c92efdc0e4cad63207ad4a6d717?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Diesel</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aedc244bd959c6b0507f497c06ccd1bd33d620f238ff4c4c8e5f391cef28f558?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Manual</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/589c7dd3e49a01edb3357ef9a0414db7dd741abb0ad77d9f0c84e925a70baadc?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2021</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $22,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div>View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6dd55afec2d6ddeb59fd4fd7d994e4066da02fcdb2641c7cb5edea5bd1c540f?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
      </div>
      <div>
    <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[343px]">
      <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-5 pt-5 pb-20 w-full text-sm font-medium leading-6 text-white capitalize aspect-[1.5]">
       <img src="/assets/vehicle-img/car2.png" alt="" />
        <div className="relative justify-center px-4 py-2 mt-1 bg-blue-600 rounded-[30px]">
          Low Mileage
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ca9e7e23ec751a3028d1d18b9a30c4572aaaf6576a48f4274027fa8653534c5?apiKey=f417b8c00fe14582a1a201b8017683ae&"
          className="shrink-0 w-9 aspect-square"
        />
      </div>
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-slate-950">
          New GLC – 2023
        </div>
        <div className="mt-3.5 text-sm leading-4 text-slate-950">
          4.0 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c122eced6e1ece5cf1baaa6b8b84bdf67009711306361d1a4aef2754dc71829e?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>50 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49140c62f01efdaa3a55dd43f5406554c09747c4daf122ccfaa8008f20ca46df?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Petrol</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0c3ed88cffe3d85481076f1fefe7e7ce9bb35e4ec7e00a084c4a5a57517451?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Automatic</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/815084fc06bad58a837974cb88fdc582e385ece31cbc34c30ffd66aa1604763a?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2023</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $95,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div className="grow">View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ac6e6b60f161f4541a3a72d8267880a0874a3ba43846d41d51ad7c27b9b4c9?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>

      </div>
      <div>
      <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[342px]">
        <img src="/assets/vehicle-img/car7.png" alt="" />
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-slate-950">
          Audi A6 3.5 – New
        </div>
        <div className="mt-3.5 text-sm leading-4 text-slate-950">
          3.5 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e708195ca03e93488fb7dad24f7888b8e313692f159778dfbb6a9e97cfcbfb6d?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>100 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2e5cae70181887b4254ed5ccc08d3bc97e31614c6394a380d0141d785d11f3?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Petrol</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb7d63cf3b2576260e99eddf78f5f0bf2161367d6137deab84903680b12330d?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Automatic</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e7175501f0ab145b1c38728b88e7044113a207e8dcc4863fba11c3be82c3957?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2023</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $58,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div>View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c4dd652339913c39beaa9aa09d819918a19446d8a9b97057993ff4ce3af410f?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>

      </div>
      <div>
      <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[343px]">
      <img src="/assets/vehicle-img/car8.png" alt="" />
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-slate-950">
          Corolla Altis – 2023
        </div>
        <div className="mt-3.5 text-sm leading-4 text-slate-950">
          3.5 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 justify-between mt-5 text-sm leading-4 text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60098dab506f3067052ee3490ed88fcd5fa8cf4dd8419df3f5a4fa88dfe3c5f3?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="flex-auto">15000 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2552a1f7db381a15bf133d2dabb846adf9cae9df7b8ee24f005e0ddfa7470628?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Petrol</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0c3ed88cffe3d85481076f1fefe7e7ce9bb35e4ec7e00a084c4a5a57517451?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>CVT</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/779aede2bcf165afd0f01378b6af86b7e0140d0e57bda4d4b3dc9b5460a63729?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2023</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $45,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div className="grow">View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ac6e6b60f161f4541a3a72d8267880a0874a3ba43846d41d51ad7c27b9b4c9?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>

      </div>
      <div >
      <div className="flex flex-col justify-center bg-white rounded-2xl max-w-[342px]">
      <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-5 pt-5 pb-20 w-full text-sm font-medium leading-6 text-white capitalize aspect-[1.49]">
        <img src="/assets/vehicle-img/car8.png" alt="" />
        <div className="relative justify-center px-4 py-2.5 mt-1 bg-green-700 rounded-[30px]">
          Great Price
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c2abe78a6cb65fabe1a87f39d3a231d7d5fdab8809a818c1737d656ae5764ea?apiKey=f417b8c00fe14582a1a201b8017683ae&"
          className="shrink-0 w-9 aspect-square"
        />
      </div>
      <div className="flex flex-col px-8 py-5 w-full rounded-none border-r border-b border-l border-gray-200 border-solid">
        <div className="text-lg font-medium leading-5 text-slate-950">
          Ford Explorer 2023
        </div>
        <div className="mt-2.5 text-sm leading-4 text-slate-950">
          3.5 D5 PowerPulse Momentum 5dr AW…
          <br />
          Geartronic Estate
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93b754f7a07ae14f29e9647da0739fd4d66da3e3a8b90641e0177117074031da?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>10 Miles</div>
          </div>
          <div className="flex gap-1.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d26ef01a08a6b542329364bace770e7d801ae909c8390ecad1b071cb1c4408c4?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>Diesel</div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 w-full text-sm leading-4 whitespace-nowrap text-slate-950">
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb7d63cf3b2576260e99eddf78f5f0bf2161367d6137deab84903680b12330d?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>CVT</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c320aac5751731c75d56a0483157c9c2cbf968e38bab2c9c5e9971ffc92cfc68?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div>2023</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-start pt-6 pb-1.5 mt-5 w-full border-t border-gray-200 border-solid">
          <div className="text-xl font-bold leading-8 text-slate-950">
            $35,000
          </div>
          <div className="flex gap-3 text-base font-medium leading-7 text-blue-600">
            <div>View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c4dd652339913c39beaa9aa09d819918a19446d8a9b97057993ff4ce3af410f?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>

    </div>
  )
}

export default AllVehicles