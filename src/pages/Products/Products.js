import React from 'react';
import Card from '../../components/Card/Card';
import Subtitle from '../../components/Subtitle/Subtitle';
import projectsData from '../../utils/ProjectData';

function Products() {
  return (
    <div className="text-white">
      <div className="container max-w-[1300px] flex flex-col px-4 py-16 mx-auto">
        <div className="flex justify-between">
          <Subtitle text="My Projects" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-10">
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
    </div>
  );
}

export default Products;
