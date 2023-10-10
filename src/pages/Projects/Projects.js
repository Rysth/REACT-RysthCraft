import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../../components/Card/Card';
import Subtitle from '../../components/Subtitle/Subtitle';
import projectsData from '../../utils/ProjectData';
import Missing from '../../components/Missing/Missing';

function Products() {
  const { t } = useTranslation();

  const [filteredArray, setfilteredArray] = useState(projectsData);

  const handleSearchBar = (e) => {
    const search = e.target.value.trim().toUpperCase();
    if (search) {
      if (filteredArray.length === 0) {
        setfilteredArray(projectsData);
      }
      const filteredData = projectsData.filter((project) => {
        const title = project.title.toUpperCase();
        const technology = project.technology.toUpperCase();

        return title.includes(search) || technology.includes(search);
      });
      setfilteredArray(filteredData);
    } else {
      setfilteredArray(projectsData);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1,
        type: 'spring',
      }}
      className="text-white"
    >
      <div className="container max-w-[1300px] flex flex-col px-4 py-10 md:py-16 mx-auto">
        <div className="flex flex-col items-center justify-between gap-3 mb-10 md:flex-row">
          <Subtitle text={t('projectTitle')} />
          <input
            type="text"
            name="search"
            id="search"
            className="w-full p-2 px-3 text-black rounded-lg md:w-2/4 focus:outline-none"
            placeholder={t('projectSearch')}
            onChange={handleSearchBar}
          />
        </div>
        {filteredArray.length !== 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-10">
            {filteredArray.map((project) => (
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
        ) : (
          <Missing />
        )}
      </div>
    </motion.div>
  );
}

export default Products;
