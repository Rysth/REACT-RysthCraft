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
    <div className="w-full">
      <a href={previewLink} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-xl transition-transform md:hover:-translate-y-3 "
          src={imageSource}
          alt={title}
        />
      </a>
      <div className="flex justify-between md:text-base my-3">
        <p className="font-bold truncate max-w-[12rem]">{title}</p>
        <p className="font-bold uppercase">{technology}</p>
      </div>
      <hr className="my-2 h-[1px] border-none bg-gray-500" />
      <ul className="py-2 grid gap-2">
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
