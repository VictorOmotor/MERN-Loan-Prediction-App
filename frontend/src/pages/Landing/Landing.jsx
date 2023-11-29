import React from 'react';
import LandingHeader from '../../components/Landing/LandingHeader';
import LandingFooter from '../../components/Landing/LandingFooter';
import HeroSection from '../../components/HeroSection';

const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <HeroSection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
