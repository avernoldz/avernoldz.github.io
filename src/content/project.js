import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Title } from "../components/components";
import projectsData from "../assets/projects.json";

// import images manually
import Proj1 from "../assets/project1.jpg";
import Proj2 from "../assets/project2.jpg";
import Proj3 from "../assets/project3.jpg";
import Proj4 from "../assets/project4.jpg";
import Proj5 from "../assets/project5.jpg";
import Proj6 from "../assets/project6.jpg";
import Proj7 from "../assets/project7.jpg";
import Proj8 from "../assets/project8.jpg";

import ProjectCard from "../components/project-card";
import Testimonial from "../components/testimonial";

const imageMap = {
  "project1.jpg": Proj1,
  "project2.jpg": Proj2,
  "project3.jpg": Proj3,
  "project4.jpg": Proj4,
  "project5.jpg": Proj5,
  "project6.jpg": Proj6,
  "project7.jpg": Proj7,
  "project8.jpg": Proj8,
};

function Project() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="m-auto max-w-[1000px] py-[6rem]" id="work">
      <div data-aos="slide-up">
        <Title number="03." info="Some projects I've contributed" />
      </div>

      {projectsData.map((project, i) => (
        <div key={i} data-aos="slide-up">
          <ProjectCard project={project} image={imageMap[project.image]} />
        </div>
      ))}

      <div data-aos="slide-up">
        <Testimonial />
      </div>
    </section>
  );
}

export default Project;
