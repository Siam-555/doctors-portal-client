import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-3 px-12'>
      <InfoCard cardTitle='Opening Hours' bgClass='font-bold bg-gradient-to-r from-cyan-500 to-blue-500' img={clock}/>
      <InfoCard cardTitle='Our Locations' bgClass='bg-zinc-600' img={marker}/>
      <InfoCard cardTitle='Contact Us' bgClass='font-bold bg-gradient-to-r from-cyan-500 to-blue-500' img={phone}/>
    </div>
  );
};

export default Info;