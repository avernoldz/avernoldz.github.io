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
                  During our Bootcamp, we created a website that drew
                  inspiration from{" "}
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
                  Reports of each student's BMI are automatically submitted to
                  the regional branch. The administrator has the ability to view
                  all schools in Nueva Ecija that have submitted these reports.
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
          <li className="bg-[#121212] py-8 px-6 rounded-md min-h-[300px] hover:translate-y-[-5px] delay-75 duration-150 drop-shadow-lg">
            <div className="flex flex-col">
              <div className="min-h-[250px]">
                <div className="flex justify-between content-center items-center mb-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    className="w-11 h-11 stroke-[--green] fill-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <a
                    href="https://clients.odrtechinc.com/fasttrack/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 hover:fill-[--green] delay-75 duration-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <h2 className="text-white/90 text-lg font-semibold">
                  Fast Track
                </h2>
                <p className=" mt-3">
                  This website serves as a platform for the business to showcase
                  its services, products, and expertise in the electrical
                  industry.
                </p>
              </div>
              <div className="mt-3">
                <ul className="flex gap-3 font-mono text-sm text-[--green] flex-wrap">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>CSS</li>
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
