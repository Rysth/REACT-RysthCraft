import React from 'react';
import HeroSection from './section/HeroSection/HeroSection';
import FeatureSection from './section/FeatureSection/FeatureSection';
import ServicesSection from './section/ServicesSection/ServicesSection';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default Home;
