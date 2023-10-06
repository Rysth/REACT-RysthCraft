import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Service from '../../../components/Service/Service';
import servicesData from '../../../utils/services';

function ServicesSection() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: 'spring',
      }}
      className="container max-w-screen-xl px-4 py-12 mx-auto text-white lg:py-20 lg:pb-28"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold lg:text-5xl"> {t('techTitle')}</h2>
        <p className="text-sm lg:text-base my-1 lg:my-5 text-gray-300 md:max-w-[30rem] mx-auto">
          {t('techDescription')}
        </p>
      </div>
      <div className="relative">
        <hr className="h-20 bg-gradient-to-bl from-[var(--CL-primary-blue)] to-[var(--CL-primary-purple)] absolute top-2/4 lg:top-6 w-full z-40 blur-3xl opacity-30" />
        <div className="relative z-50 grid grid-cols-2 gap-5 mt-16 md:grid-cols-4">
          {servicesData.map((service) => (
            <Service key={service.id} icon={service.icon} text={service.text} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesSection;
