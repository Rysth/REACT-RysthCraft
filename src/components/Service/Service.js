import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Service({ icon, text }) {
  return (
    <div className="grid gap-3">
      <motion.div className="w-28 h-28 grid place-items-center rounded-2xl mx-auto bg-violet-700 bg-opacity-25  transition duration-200 cursor-pointer lg:hover:scale-110 lg:hover:bg-opacity-100">
        <i className={`fa-solid ${icon} text-4xl`} />
      </motion.div>
      <p className="text-xs lg:text-base text-center">{text}</p>
    </div>
  );
}

Service.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Service;
