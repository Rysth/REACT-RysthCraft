import React from 'react';
import PropTypes from 'prop-types';

function Subtitle({ text }) {
  return (
    <header>
      <h2 className="text-xl font-bold text-center md:text-2xl lg:text-3xl md:text-left">{text}</h2>
    </header>
  );
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
