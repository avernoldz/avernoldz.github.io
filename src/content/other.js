import React from "react";

function Other() {
  return (
    <section className="m-auto max-w-[1000px] py-[6rem]">
      <h2 className="text-center text-white/90 font-semibold text-3xl">
        Other Noteworthy Projects
      </h2>
      <div className="mt-12 max-w-[650px] m-auto">
        <ul className="grid xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          <li className="bg-[#121212] py-8 px-6 rounded-md min-h-[300px] hover:translate-y-[-5px] delay-75 duration-150 drop-shadow-lg ">
            <div className="flex flex-col">
              <div className="xl:min-h-[265px] md:min-h-[285px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  className="w-11 h-11 stroke-[--green] fill-none mb-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                <h2 className="text-white/90 text-lg font-semibold">
                  E-commerce Video Games
                </h2>
                <p className=" mt-3">
                  Website we developed during our Bootcamp that was inspired by
                  the{" "}
                  <a
                    href="https://store.epicgames.com/en-US/"
                    target="_blank"
                    className="text-[--green]"
                  >
                    Epic Games.
                  </a>
                </p>
              </div>
              <div className="mt-3">
                <ul className="flex gap-3 font-mono text-sm text-[--green] flex-wrap">
                  <li>Java</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SpringMVC</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bg-[#121212] py-8 px-6 rounded-md min-h-[300px] hover:translate-y-[-5px] delay-75 duration-150 drop-shadow-lg">
            <div className="flex flex-col">
              <div className="min-h-[250px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  className="w-11 h-11 stroke-[--green] fill-none mb-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                <h2 className="text-white/90 text-lg font-semibold">
                  Web-Based School BMI Report
                </h2>
                <p className=" mt-3">
                  Automatically submits reports of each student's BMI to the
                  regional branch, and the administrator can view all of the
                  schools in Nueva Ecija that have submitted reports.
                </p>
              </div>
              <div className="mt-3">
                <ul className="flex gap-3 font-mono text-sm text-[--green] flex-wrap">
                  <li>PHP</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Other;
