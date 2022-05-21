import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  console.log(service);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title text-amber-700">{name}</h2>
        <p>{
          slots.length
            ?
            <span>{slots[0]}</span>
            :
            <span className='text-red-500'>No slot available. Try another day</span>
        }</p>
        <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-end">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-info uppercase">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;