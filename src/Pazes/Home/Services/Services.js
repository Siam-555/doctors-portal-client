import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
  const services = [
    {
      _id: 1,
      img: fluoride,
      name: 'Fluoride Treatment',
      description: 'Get white and healthier teeth'
    },
    {
      _id: 2,
      img: cavity,
      name: 'Cavity Filling',
      description: 'Get rid from cavity'
    },
    {
      _id: 3,
      img: whitening,
      name: 'Teeth Whitening',
      description: 'Make your teeth white'
    }
  ]
  return (
    <div className='my-28'>
      <div className='text-center'>
        <h3 className='text-primary text-4xl uppercase'>Our services</h3>
        <h2 className='text-4xl'>Services We provide</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
        {
          services.map(service => <ServiceCard
            key={services._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;