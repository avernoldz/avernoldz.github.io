import React, { useState } from "react";
import { Title, WorkDescription, Tabs } from "../components/components";
import Description from "../assets/records.json";

// Define metadata for each company here
const companies = [
  {
    key: "MCP",
    name: "MyCreativePanda",
    position: "Lead Software Developer",
    date: "November 2024 - June 2025",
    label: "@ MyCreativePanda",
    link: "https://mycreativepanda.com/",
    tech: [
      "CakePHP",
      "AngularJs",
      "Bootstrap",
      "MySQL",
      "WordPress",
      "SiteGround",
    ],
  },
  {
    key: "FREE",
    name: "Freelancing",
    position: "Web Developer",
    date: "June 2023 - Present",
    label: "@ Home",
    link: "",
    tech: [
      "HTML5",
      "CSS3",
      "WordPress",
      "ReactJs",
      "Vanilla PHP",
      "Laravel (PHP)",
    ],
  },
  {
    key: "JSD",
    name: "Atos",
    position: "Junior Software Developer",
    date: "April 2022 – March 2023",
    label: "@ Atos",
    link: "https://atos.net",
    tech: ["Java", "Spring MVC", "CSS3", "JavaScript", "ReactJS", "HTML5"],
  },
  {
    key: "GA",
    name: "ODR Technologies",
    position: "Graphic Artist",
    date: "February 2020 – March 2022",
    label: "@ ODR Technologies",
    link: "https://odrtechinc.com",
    tech: ["Photoshop", "Illustrator", "WordPress", "Digital Arts"],
  },
];

function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompany = companies[activeIndex];
  const jobDescriptions = Description[activeCompany.key];

  return (
    <section className="m-auto max-w-[750px] py-[6rem]" id="experience">
      <Title number="02." info="Where I've worked" />

      <div className="grid grid-cols-[2fr,6fr] gap-10 max-[767px]:grid-cols-none">
        {/* Tabs */}
        <div className="text-white/50 font-mono text-sm max-[767px]:flex max-[767px]:m-auto overflow-x-auto max-[767px]:max-w-[100%]">
          {companies.map((company, index) => (
            <Tabs
              key={index}
              tabdesc={company.name}
              toggle={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? "text-[--green] bg-black/20 border-l-2 max-[767px]:border-b-2 max-[767px]:border-l-0 !border-[--green]"
                  : "text-white/50 bg-none"
              }
            />
          ))}
        </div>

        {/* Job Details */}
        <div className="block animate-fadeIn">
          <div className="font-mono">
            <div className="text-white/90 text-xl font-medium mb-2 font-inter">
              {activeCompany.position}{" "}
              <span className="text-[--green]">
                {activeCompany.link ? (
                  <a
                    href={activeCompany.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-70"
                  >
                    {activeCompany.label}
                  </a>
                ) : (
                  activeCompany.label
                )}
              </span>
            </div>
            <p className="text-white/50 mb-3">{activeCompany.date}</p>
            <div className="font-inter text-white/50 text-[15px] max-[767px]:text-[14px]">
              <ul>
                {jobDescriptions.map((job, index) => (
                  <WorkDescription key={index} desc={job.desc} />
                ))}
              </ul>

              {/* Tech Stack */}
              <ul className="font-mono flex gap-2 flex-row flex-wrap mt-4">
                {activeCompany.tech.map((item, i) => (
                  <li
                    key={i}
                    className="p-4 pt-1 pb-1 rounded-2xl text-[--green]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
