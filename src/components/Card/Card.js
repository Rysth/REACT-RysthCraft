import React from 'react';
import PropTypes from 'prop-types';

function Card(
  /* prettier-ignore */
  {
    imageSource,
    title,
    technology,
    previewLink,
    gitHubLink,
  },
) {
  return (
    <div className="rounded-xl">
      <picture>
        <img className="w-full rounded-xl" src={imageSource} alt="" />
      </picture>
      <div className="flex justify-between text-base my-4">
        <p className="font-bold">{title}</p>
        <p className="font-bold uppercase">{technology}</p>
      </div>
      <hr className="my-2" />
      <ul className="py-3 grid gap-2">
        <li className="flex justify-between items-center text-xs">
          <p>
            <i className="fa-solid fa-star w-3 mr-2" />
            Live Preview
          </p>
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-badge border"
          >
            Watch
          </a>
        </li>
        <li className="flex justify-between items-center text-xs">
          <p>
            <i className="fa-brands fa-github w-3 mr-2" />
            GitHub
          </p>
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-badge border"
          >
            Watch
          </a>
        </li>
      </ul>
    </div>
  );
}

Card.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
};

export default Card;
