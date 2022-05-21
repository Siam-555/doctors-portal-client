import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import StayConnected from './StayConnected';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <StayConnected />
      <Footer />
    </div>
  );
};

export default Home;