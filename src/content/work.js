import React, { useState } from "react";
import { Title, WorkDescription, Tabs } from "../components/components";
import Description from "../assets/records.json";

function Work() {
  const [setToggle, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className=" m-auto max-w-[750px] py-[6rem] " id="experience">
      <Title number="02." info="Where I've worked" />
      <div className="grid grid-cols-[2fr,6fr] gap-10 max-[767px]:grid-cols-none">
        <div className="text-white/50 font-mono text-sm max-[767px]:flex m-auto">
          <Tabs
            tabdesc={"Freelancing"}
            toggle={() => toggleTab(1)}
            className={
              setToggle === 1
                ? "text-[--green] bg-black/20 border-l-2 max-[767px]:border-b-2 max-[767px]:border-l-0 !border-[--green]"
                : "text-white/50 bg-none"
            }
          />
          <Tabs
            tabdesc={"Atos"}
            toggle={() => toggleTab(2)}
            className={
              setToggle === 2
                ? "text-[--green] bg-black/20 border-l-2 max-[767px]:border-b-2 !max-[767px]:border-l-0 !border-[--green]"
                : "text-white/50 bg-none"
            }
          />
          <Tabs
            tabdesc={"ODR Technologies"}
            toggle={() => toggleTab(3)}
            className={
              setToggle === 3
                ? "text-[--green] bg-black/20 border-l-2 max-[767px]:border-b-2 max-[767px]:border-l-0 !border-[--green]"
                : "text-white/50 bg-none"
            }
          />
        </div>

        <div className={setToggle === 1 ? "block animate-fadeIn" : "hidden"}>
          <div className="font-mono">
            <div className="text-white/90 text-xl font-medium mb-2 font-inter">
              Web Developing <span className="text-[--green]">@ Home</span>
            </div>
            <p className="text-white/50 mb-3">June 2023 - Present</p>
            <div className="font-inter text-white/50 text-[15px] max-[767px]:text-[14px]">
              <ul>
                {Description.map((des, i) => (
                  <>
                    {des.FREE.map((jobdesc, j) => (
                      <WorkDescription key={j} desc={jobdesc.desc} />
                    ))}
                  </>
                ))}
              </ul>
              <ul className="font-mono flex gap-2 flex-row flex-wrap">
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  HTML5
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  CSS3
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green] ">
                  WordPress
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  cPanel
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={setToggle === 2 ? "block animate-fadeIn" : "hidden"}>
          <div className="font-mono">
            <div className="text-white/90 text-xl font-medium mb-2 font-inter">
              Junior Software Developer{" "}
              <span className="text-[--green]">
                @{" "}
                <a
                  href="https://atos.net"
                  target="_blank"
                  className="hover:opacity-70"
                >
                  Atos
                </a>
              </span>
            </div>
            <p className="text-white/50 mb-3">April 2022 – March 2023</p>
            <div className="font-inter text-white/50 text-[15px]">
              <ul>
                {Description.map((des, i) => (
                  <>
                    {des.JSD.map((jobdesc, j) => (
                      <WorkDescription key={j} desc={jobdesc.desc} />
                    ))}
                  </>
                ))}
              </ul>
              <ul className="font-mono flex gap-2 flex-row flex-wrap">
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  Java
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  Spring MVC
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green] ">
                  JavaScript
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  ReactJS
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  HTML5
                </li>
                <li className="bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  CSS3
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={setToggle === 3 ? "block animate-fadeIn" : "hidden"}>
          <div className="font-mono">
            <div className="text-white/90 text-xl font-medium mb-2 font-inter">
              Graphic Artist{" "}
              <span className="text-[--green]">
                @{" "}
                <a
                  href="https://odrtechinc.com"
                  target="_blank"
                  className="hover:opacity-70 "
                >
                  ODR Technologies
                </a>
              </span>
            </div>
            <p className="text-white/50 mb-3">February 2020 – March 2022</p>
            <div className="font-inter text-white/50 text-[15px]">
              <ul>
                {Description.map((des, i) => (
                  <>
                    {des.GA.map((jobdesc, j) => (
                      <WorkDescription key={j} desc={jobdesc.desc} />
                    ))}
                  </>
                ))}
              </ul>
              <ul className="font-mono flex gap-2 flex-row flex-wrap">
                <li className=" bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]">
                  Photoshop
                </li>
                <li className=" bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green] ">
                  Illustrator
                </li>
                <li className=" bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green]  ">
                  WordPress
                </li>
                <li className=" bg-black/20 p-4 pt-1 pb-1 rounded-2xl text-[--green] ">
                  Digital Arts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
