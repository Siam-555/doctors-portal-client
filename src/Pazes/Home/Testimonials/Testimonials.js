import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis itaque sunt ab. Nisi, veritatis non?',
      location: 'california',
      img: people1
    },
    {
      _id: 2,
      name: 'Winson Herry',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis itaque sunt ab. Nisi, veritatis non?',
      location: 'california',
      img: people2
    },
    {
      _id: 3,
      name: 'Winson Herry',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis itaque sunt ab. Nisi, veritatis non?',
      location: 'california',
      img: people3
    }
  ]
  return (
    <div className='my-6 p-12'>
      <div className='flex justify-between items-center my-3'>
        <div>
          <h4 className='text-xl text-cyan-400 font-bold'>Testimonials</h4>
          <h2 className='text-3xl'>What Our Patients Says</h2>
        </div>
        <div>
          <img className='w-24 lg:w-48' src={quote} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto'>
        {reviews.map(review => <Review
          key={review._id}
          review={review}
        ></Review>)}
      </div>
    </div>
  );
};

export default Testimonials;