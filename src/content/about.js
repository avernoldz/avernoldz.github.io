import React from "react";
import Img from "../assets/2x2.png";
import { Title, Tech } from "../components/components";

function About() {
  return (
    <section className="m-auto max-w-[900px] py-[6rem] mb-[4rem]" id="about">
      <Title number="01." info="About me" />
      <div className="grid grid-cols-[3fr,2fr] gap-[50px] max-[767px]:grid-cols-none max-[767px]:text-[15px]">
        <div>
          <div className="text-white/50 ">
            <p className="mb-[20px]">
              Hi! My name is <span className="text-[--green]">Avernold</span>{" "}
              and I love designing and programming very much. I reasoned, why
              not combine these two? I can use my skills most effectively as a
              web developer. Playing with HTML & CSS and creating some UI for
              the web are two things I really enjoy doing!
            </p>
            <p className="mb-[20px]">
              I've had the privilege working at{" "}
              <a
                href="https://atos.net"
                target="_blank"
                className="text-[--green] font-medium hover:opacity-70"
              >
                European number one in cybersecurity
              </a>{" "}
              and{" "}
              <a
                href="https://odrtechinc.com"
                target="_blank"
                className="text-[--green] font-medium hover:opacity-70 "
              >
                a startup web base solutions.{" "}
              </a>
              Although I still lack experience, I can confidently say that I
              have the necessary skills. While I'm still looking for work, my
              current priorities are growing my network in the freelancing
              industry and learning more about frameworks like ReactJS,
              Bootstrap, Tailwind CSS and jQuery.
            </p>
            <p className="mb-[20px]">
              Here are the technologies I've been using:
            </p>
            <ul className="grid grid-cols-2 font-mono text-sm max-[767px]:text-xs">
              <Tech techno="JavaScript" />
              <Tech techno="React" />
              <Tech techno="HTML5" />
              <Tech techno="CSS3" />
              <Tech techno="WordPress" />
              <Tech techno="Tailwind" />
              <Tech techno="Bootstrap" />
              <Tech techno="Github" />
            </ul>
          </div>
        </div>
        <div>
          <div
            className="max-w-fit m-auto after:duration-100 hover:after:translate-y-[4px] hover:after:translate-x-[4px]
          before:content-[''] before:block before:w-[100%] before:h-[100%] before:absolute before:bg-[--green] before:opacity-20 before:z-[3] before:rounded-md hover:before:hidden
          
          after:content-[''] after:block after:w-[100%] after:h-[100%] after:absolute  after:border-2 after:border-[--green] after:top-[14px] after:z-[-1] after:rounded-md after:left-[14px] relative"
          >
            <img
              src={Img}
              alt="2x2"
              className="w-[300px] rounded-md  hover:blur-none hover:translate-y-[-4px] hover:translate-x-[-4px] duration-200 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
