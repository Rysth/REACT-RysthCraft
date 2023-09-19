import React from 'react';
import { motion } from 'framer-motion';
import Service from '../../../../components/Service/Service';

const servicesData = [
  {
    id: '1',
    icon: 'fa-check',
    text: 'Excellent work.',
  },
  {
    id: '2',
    icon: 'fa-star',
    text: 'Good-looking projects.',
  },
  {
    id: '3',
    icon: 'fa-image',
    text: 'Nice assets.',
  },
  {
    id: '4',
    icon: 'fa-code',
    text: 'React skills.',
  },
];

function ServicesSection() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: 'spring',
      }}
      className="container max-w-[1300px] mx-auto text-white p-4 py-12 lg:py-20"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold lg:text-5xl">Getting Started</h2>
        <p className="text-sm lg:text-base my-1 lg:my-3 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, soluta.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-0 mt-16">
        {servicesData.map((service) => (
          <Service key={service.id} icon={service.icon} text={service.text} />
        ))}
      </div>
    </motion.div>
  );
}

export default ServicesSection;
