import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Service({ icon, text }) {
  return (
    <div className="grid gap-3 transition duration-200 cursor-pointer group lg:hover:scale-110 ">
      <motion.div className="grid w-full p-5 mx-auto bg-opacity-25 lg:p-10 place-items-center rounded-2xl bg-violet-700 group-hover:bg-opacity-100">
        <img src={icon} alt="" className="" />
      </motion.div>
      <p className="text-xs text-center lg:text-base">{text}</p>
    </div>
  );
}

Service.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Service;
