import React from 'react';

const ServiceCard = ({service}) => {
  return (
    <div className="card w-96 lg:max-w-lg bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}!</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;