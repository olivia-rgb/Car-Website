import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const vehicles = [
  {
    img: "/assets/vehicle-img/car3.png",
    label: "Great Price",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/348fe31f7de4c903fb742339ce50bff35e5678243cc310b136cbda8c1b8629fb?apiKey=f417b8c00fe14582a1a201b8017683ae&",
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b638a452eed951ff1261632504feea0fe82c611ce4afa6ba1fa08eb480d93553?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "20 Miles" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1aa89b3dc655ef64b399fc74f74e8bc0fc173ee3fa9c71c6849bbbf4f78ee15?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Petrol" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0230a66e60b5982f048e2cb3f205fb32036b575545e55c338915cb4765650266?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Automatic" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/55ca5f29be414001cbf3dab724712d408849c200c42c8d104f7507b3c7fbc443?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "2023" },
    ],
    price: "$40,000",
  },
  {
    img: "/assets/vehicle-img/car3.png",
    name: "T-Cross – 2023",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f23822ee1365fbf24b2db05e41e9f046be156c8b2c6316e1c2d6859198d74b4?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "15 Miles" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2314abd824d6c6a766f432210dad7664a9e42fa34ca43371da03d9dfaf43e480?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Petrol" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aedc244bd959c6b0507f497c06ccd1bd33d620f238ff4c4c8e5f391cef28f558?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "CVT" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a54e98b654f39ac559dc18f94f4e5ccf06361c446ab936630abb1a0903ac2b67?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "2023" },
    ],
    price: "$15,000",
  },
  {
    img: "/assets/vehicle-img/car4.png",
    name: "C-Class – 2023",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4f8d08f756f3c6cfcf3bb6affd82a0f2409cb13082c82031efbca038482ffdc?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "50 Miles" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3022ecb208907e9adb272e4a775ff9b3be71683f5d0b0c213b7656684a03c022?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Petrol" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0230a66e60b5982f048e2cb3f205fb32036b575545e55c338915cb4765650266?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Automatic" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bab4cc712336518f781d8313b6254f23a855bfcfb4935a75e3794e643d02ea93?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "2023" },
    ],
    price: "$150,000",
  },
  {
    img: "/assets/vehicle-img/car5.png",
    label: "Great Price",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/51183dfc62d2b3c366bced2381e8bc5f886f607da1b506833488d047d47c10cf?apiKey=f417b8c00fe14582a1a201b8017683ae&",
    name: "Ford Transit – 2021",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f8d7f15b3668e435b3e89952c70cbd557b1a1e4b92ced3ba4137b19e54ca9b8?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "2500 Miles" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/964050ec402b1225a38f886983adde82c7161c92efdc0e4cad63207ad4a6d717?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Diesel" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aedc244bd959c6b0507f497c06ccd1bd33d620f238ff4c4c8e5f391cef28f558?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Manual" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/589c7dd3e49a01edb3357ef9a0414db7dd741abb0ad77d9f0c84e925a70baadc?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "2021" },
    ],
    price: "$22,000",
  },
  {
    img: "/assets/vehicle-img/car2.png",
    label: "Low Mileage",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ca9e7e23ec751a3028d1d18b9a30c4572aaaf6576a48f4274027fa8653534c5?apiKey=f417b8c00fe14582a1a201b8017683ae&",
    name: "New GLC – 2023",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c122eced6e1ece5cf1baaa6b8b84bdf67009711306361d1a4aef2754dc71829e?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "50 Miles" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1aa89b3dc655ef64b399fc74f74e8bc0fc173ee3fa9c71c6849bbbf4f78ee15?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Petrol" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0230a66e60b5982f048e2cb3f205fb32036b575545e55c338915cb4765650266?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Automatic" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bab4cc712336518f781d8313b6254f23a855bfcfb4935a75e3794e643d02ea93?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "2023" },
    ],
    price: "$80,000",
  },
  {
    img: "/assets/vehicle-img/car3.png",
    label: "Great Price",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/348fe31f7de4c903fb742339ce50bff35e5678243cc310b136cbda8c1b8629fb?apiKey=f417b8c00fe14582a1a201b8017683ae&",
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b638a452eed951ff1261632504feea0fe82c611ce4afa6ba1fa08eb480d93553?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "20 Miles" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1aa89b3dc655ef64b399fc74f74e8bc0fc173ee3fa9c71c6849bbbf4f78ee15?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Petrol" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0230a66e60b5982f048e2cb3f205fb32036b575545e55c338915cb4765650266?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "Automatic" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/55ca5f29be414001cbf3dab724712d408849c200c42c8d104f7507b3c7fbc443?apiKey=f417b8c00fe14582a1a201b8017683ae&", label: "2023" },
    ],
    price: "$40,000",
  },
  

];

const BestDeals = () => {
  return (
    <div className=" py-8 sm:py-12 sm:px-10  md:py-16  bg-white">
      <div className="flex flex-col items-center justify-center space-y-3 text-center mb-6">
        <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl">Best Deals</h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Discover your perfect car at a discounted price
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-md p-3 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              {vehicle.label && (
                <div className="flex items-center space-x-2">
                  <img src={vehicle.icon} alt="label icon" className="w-5 h-5" />
                  <span className="text-orange-600 text-sm font-semibold">
                    {vehicle.label}
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <FiArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="w-full h-48 mb-4">
              <img
                src={vehicle.img}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-3">
              <h2 className="text-black text-lg font-semibold">{vehicle.name}</h2>
              <p className="text-gray-500 text-sm">{vehicle.description}</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              {vehicle.details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <img src={detail.icon} alt="detail icon" className="w-4 h-4" />
                  <span className="text-gray-600 text-xs">{detail.label}</span>
                </div>
              ))}
            </div>
            <div className="text-black text-lg font-bold">{vehicle.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
