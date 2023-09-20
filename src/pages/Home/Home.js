import React from 'react';
import HeroSection from './section/HeroSection/HeroSection';
import FeatureSection from './section/FeatureSection/FeatureSection';
import ServicesSection from './section/ServicesSection/ServicesSection';

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
