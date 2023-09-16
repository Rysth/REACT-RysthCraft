import React from 'react';
import PropTypes from 'prop-types';

function Subtitle({ text }) {
  return (
    <header className="mb-10">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left font-bold">{text}</h2>
    </header>
  );
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
