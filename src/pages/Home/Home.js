import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection/HeroSection';
import FeatureSection from '../sections/FeatureSection/FeatureSection';
import TechSection from '../sections/TechSection/TechSection';

function Home() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: 'spring',
      }}
    >
      <HeroSection />
      <FeatureSection />
      <TechSection />
    </motion.div>
  );
}

export default Home;
