import React from "react";

const otherProjects = [
  {
    title: "Electronic Logistics Management System (eLMS)",
    description:
      "Centralized logistics platform for tracking trucks, managing deliveries, and optimizing route planning across the supply chain.",
    tech: ["CakePHP", "AngularJs", "HTML", "CSS", "Bootstrap", "MySQL"],
    link: null,
  },
  {
    title: "Electronic Water Billing System (eWBS)",
    description:
      "Maintains and performs daily backups of the Electronic Water Billing System (eWBS), ensuring data integrity and system reliability. Also responsible for regularly updating the billing device to keep operations smooth and secure.",
    tech: ["CakePHP", "AngularJs", "HTML", "CSS", "MVC", "MySQL"],
    link: null,
  },
  {
    title: "Electronic Cooperation Management System (eCMS)",
    description:
      "A management system developed for a cooperative lending company, handling member records, loans, and financial transactions.",
    tech: ["CakePHP", "AngularJs", "HTML", "CSS", "MVC", "MySQL"],
    link: null,
  },
  {
    title: "Moncada Tarlac",
    description:
      "Official LGU website of Moncada, Tarlac built in WordPress. Prioritized accessibility, responsiveness, and ease of content management.",
    tech: ["WordPress", "HTML", "CSS", "YooTheme"],
    link: "https://moncadatarlac.gov.ph/",
  },
  {
    title: "Jelexie Bakeshop",
    description:
      "A WordPress-based website developed for display and informational purposes, showcasing products and company details.",
    tech: ["WordPress", "HTML", "CSS", "YooTheme"],
    link: "https://jelexie.ph/",
  },
  {
    title: "Bolinao Pangasinan",
    description:
      "Official LGU website of Bolinao, Pangasinan built in WordPress. Prioritized accessibility, responsiveness, and ease of content management.",
    tech: ["WordPress", "HTML", "CSS", "YooTheme"],
    link: "https://www.bolinaopangasinan.gov.ph/",
  },
];

const ProjectCard = ({ title, description, tech, link }) => (
  <li className="bg-[--light-navy] py-8 px-6 rounded-md min-h-[300px] hover:translate-y-[-5px] transition duration-150 drop-shadow-lg">
    <div className="flex flex-col h-full">
      <div className="mb-6 flex justify-between items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1"
          className="w-10 h-10 stroke-[--green] fill-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:fill-[--green] transition duration-100"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>
      <h3 className="text-white/90 text-lg font-semibold">{title}</h3>
      <p className="text-[--light-slate] mt-3 flex-1 text-sm">{description}</p>
      <ul className="mt-4 flex gap-2 flex-wrap font-mono text-sm text-white/50">
        {tech.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </li>
);

function Other() {
  return (
    <section className="m-auto max-w-[1000px] py-[6rem] px-5">
      <h2 className="text-center text-white/90 font-semibold text-3xl mb-12">
        Other Noteworthy Projects
      </h2>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default Other;
