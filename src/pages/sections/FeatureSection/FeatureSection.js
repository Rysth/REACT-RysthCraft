import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import Subtitle from '../../../components/Subtitle/Subtitle';
import projectsData from '../../../utils/ProjectData';

function FeatureSection() {
  const { t } = useTranslation();

  return (
    <div className="container max-w-screen-xl p-4 py-16 mx-auto text-white lg:py-28">
      <div className="flex items-center justify-between mb-10">
        <Subtitle text={t('featuredProjects')} />
        <Link
          to="/projects"
          className="text-sm transition md:text-base md:hover:translate-x-2"
        >
          {t('seeAll')}
          <i className="ml-2 fa-solid fa-arrow-right" />
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-10">
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
    </div>
  );
}

export default FeatureSection;
