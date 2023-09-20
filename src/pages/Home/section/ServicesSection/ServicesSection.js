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
      className="container max-w-[1300px] mx-auto text-white p-4 py-12 lg:py-20 lg:pb-32"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold lg:text-5xl">Getting Started</h2>
        <p className="text-sm lg:text-base my-1 lg:my-5 text-gray-300 lg:max-w-[50rem] mx-auto">
          Let&apos;s collaborate to kickstart your web development projects with seamless, dynamic
          solutions.
        </p>
      </div>
      <div className="relative">
        <hr className="h-20 bg-gradient-to-bl from-[var(--CL-primary-blue)] to-[var(--CL-primary-purple)] absolute top-2/4 lg:top-6 w-full z-40 blur-3xl opacity-30" />
        <div className="relative z-50 grid grid-cols-2 gap-12 mt-16 md:grid-cols-4 lg:gap-10">
          {servicesData.map((service) => (
            <Service key={service.id} icon={service.icon} text={service.text} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesSection;
