import React, { useEffect, useState } from 'react';
import Wifi from '../../../../assets/Fasilitas-kamar/Wifi.svg';
import KMDalam from '../../../../assets/Fasilitas-kamar/Shower.svg';
import AirPanas from '../../../../assets/Fasilitas-kamar/Hot-tub.svg';
import Lemari from '../../../../assets/Fasilitas-kamar/Wardrobe.svg';
import Kasur from '../../../../assets/Fasilitas-kamar/Bed.svg';
import KursiMeja from '../../../../assets/Fasilitas-kamar/Chair-Table.svg';
import AC from '../../../../assets/Fasilitas-kamar/AC.svg';
import TV from '../../../../assets/Fasilitas-kamar/TV.svg';
import Listrik from '../../../../assets/Fasilitas-kamar/Electricity.svg';
import KipasAngin from '../../../../assets/Fasilitas-kamar/Fan.svg';

const Fasilitaskamar = () => {
  const [Fasilitas, setFasilitas] = useState([]);
  useEffect(() => {
    const FacilityList = [
      {
        id: 1,
        text: 'Wifi',
        image: Wifi,
      },
      {
        id: 2,
        text: 'KM Dalam',
        image: KMDalam,
      },
      {
        id: 3,
        text: 'Air Panas',
        image: AirPanas,
      },
      {
        id: 4,
        text: 'Lemari',
        image: Lemari,
      },
      {
        id: 5,
        text: 'Kasur',
        image: Kasur,
      },
      {
        id: 6,
        text: 'Kursi',
        image: KursiMeja,
      },
      {
        id: 7,
        text: 'AC',
        image: AC,
      },
      {
        id: 8,
        text: 'TV',
        image: TV,
      },
      {
        id: 9,
        text: 'Listrik',
        image: Listrik,
      },
      {
        id: 10,
        text: 'Meja',
        image: KursiMeja,
      },
      {
        id: 11,
        text: 'Kipas Angin',
        image: KipasAngin,
      },
    ];
    setFasilitas(FacilityList);
  }, []);

  return (
    <>
      <div className='grid gap-4 text-[Montserrat] text-[20px]'>
        <p className='font-[700]'>Fasilitas Kamar</p>
        <div className='grid grid-rows-4 grid-flow-col auto-cols-max gap-8 gap-x-6'>
          {Fasilitas.map((fasilitas, index) => {
            return (
              <React.Fragment key={index}>
                <div className='grid grid-cols-5 grid-flow-col gap-2'>
                  <span className='self-center'>
                    <img className='rounded-full bg-[#FFDCBD] h-6 w-6' src={fasilitas.image} alt='' />
                  </span>
                  <span className='col-span-4 self-center justify-self-start'>
                    <p>{fasilitas.text}</p>
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fasilitaskamar;