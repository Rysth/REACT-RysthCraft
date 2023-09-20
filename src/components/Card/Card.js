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
          className="object-cover object-center transition-transform rounded-xl md:hover:-translate-y-3 "
          src={imageSource}
          alt={title}
        />
      </a>
      <div className="flex justify-between my-3 md:text-base">
        <p className="font-bold truncate max-w-[12rem]">{title}</p>
        <p className="font-bold uppercase">{technology}</p>
      </div>
      <hr className="my-2 h-[1px] border-none bg-gray-500" />
      <ul className="grid gap-2 py-2">
        <li className="flex items-center justify-between text-xs">
          <p>
            <i className="w-3 mr-2 fa-solid fa-star" />
            Live Preview
          </p>
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border btn btn-primary btn-badge"
          >
            Watch
          </a>
        </li>
        <li className="flex items-center justify-between text-xs">
          <p>
            <i className="w-3 mr-2 fa-brands fa-github" />
            GitHub
          </p>
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border btn btn-badge"
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
