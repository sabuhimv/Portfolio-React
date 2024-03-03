import React from "react";
import FeaturedProject from "../components/Projects/FeaturedProject";
import project1 from "../assets/images/projects/it_solutions.png";
import project2 from "../assets/images/projects/project_2.jpeg";
import project3 from "../assets/images/projects/project3.jpeg";
import Project from "../components/Projects/Project";

const Projects = () => {
  return (
    <div className="my-container lg:px-16 lg:pt-4 sm:px-9">
      <p className="text-dark font-bold text-5xl pb-8 lg:text-center">My Projects</p>

      <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"> 
        <div className="col-span-12">
          <FeaturedProject
            title={"IT Solutions Company Website"}
            summary={
              "A feature-rich IT Solutions Company Website using ReactJS.It shows detail regarding almost all the section of the company.You can easily get the help from there."
            }
            link={"https://github.com/sabuhimv/IT_Solutions_Company"}
            github={"https://github.com/sabuhimv"}
            type={"Featured projects"}
            img={project1}
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project
            title={"Basic Portfolio Example"}
            link={"https://github.com/sabuhimv/portfolio"}
            github={"https://github.com/sabuhimv/portfolio"}
            type={"Website"}
            img={project2}
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project
            title={"My Website"}
            link={"https://github.com/sabuhimv/my-website"}
            github={"https://github.com/sabuhimv/my-website"}
            type={"Website"}
            img={project3}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
