import React from 'react';
import HeroSection from '../sections/HeroSection/HeroSection';
import FeatureSection from '../sections/FeatureSection/FeatureSection';
import ServicesSection from '../sections/ServicesSection/ServicesSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
    </div>
  );
}

export default Home;
