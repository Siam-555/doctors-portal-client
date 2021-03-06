import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  console.log(services);

  const formatDate = format(date, 'PP');
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formatDate}`)
      .then(res => res.json())
      .then(data => setServices(data));
  }, [formatDate])
  return (
    <div>
      <h4 className='text-center text-xl text-primary font-bold mt-5'>Available appointments on {format(date, 'PP')}</h4>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>)
        }
      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment}
      />}
    </div>
  );
};

export default AvailableAppointments;