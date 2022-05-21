import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section style={{
      'background': `url(${appointment})`
    }} className='flex justify-center items-center px-20'>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-120px]' src={doctor} alt="" />
      </div>
      <div className='flex-1'>
        <h3 className='text-xl text-cyan-500 font-bold uppercase'>Appointment</h3>
        <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere, odio praesentium expedita repudiandae perferendis, omnis reiciendis consectetur culpa aspernatur iusto quae, perspiciatis dolorem asperiores voluptates magnam nam explicabo dignissimos?</p>
        <PrimaryButton className='mt-20'>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;