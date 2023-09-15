import React from 'react';
import Card from '../../../../components/Card/Card';
import projectsData from '../../../../utils/ProjectData';

function FeatureSection() {
  return (
    <div className="container max-w-[1300px] mx-auto text-white p-4 py-16 lg:py-28">
      <header className="mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left font-bold">
          Featured Projects
        </h2>
      </header>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {projectsData.map((project) => (
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
