import React from 'react';
import appointment from '../../assets/images/appointment.png';

const StayConnected = () => {
  return (
    <section
      className='py-16'
      style={{
        'background': `url(${appointment})`
      }}>
      <div className='text-center'>
        <h3 className='text-accent text-xl font-bold uppercase'>Contact Us</h3>
        <h4 className='text-3xl'>Stay connected with us</h4>
      </div>
      <div className='mt-6 text-center'>
      <input type="email" placeholder="Email Address" className="mt-4 input input-bordered w-3/4" />
      <br />
      <input type="text" placeholder="Subject" className="mt-4 input input-bordered w-3/4" />
      <br />
      <textarea className="mt-4 w-3/4 textarea textarea-bordered" placeholder="Your message"></textarea>
      <br />
      <br />
      <button className="btn btn-outline btn-success btn-wide">Submit</button>
      </div>        
    </section>
  );
};

export default StayConnected;