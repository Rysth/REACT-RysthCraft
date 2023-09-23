import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../../../components/Card/Card';
import Subtitle from '../../../components/Subtitle/Subtitle';
import projectsData from '../../../utils/ProjectData';

function FeatureSection() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
        type: 'spring',
      }}
      className="container max-w-[1300px] mx-auto text-white p-4 py-16 lg:py-28"
    >
      <div className="flex items-center justify-between mb-10">
        <Subtitle text="Featured Projects" />
        <Link
          to="/projects"
          className="text-sm transition md:text-base md:hover:translate-x-2"
        >
          See All
          <i className="ml-2 fa-solid fa-arrow-right" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-10">
        {projectsData.slice(0, 4).map((project) => (
          <Card
            key={project.id}
            title={project.title}
            technology={project.technology}
            imageSource={project.imageSource}
            previewLink={project.previewLink}
            gitHubLink={project.gitHublink}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default FeatureSection;
