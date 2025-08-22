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
              Hello, I'm{" "}
              <span className="text-[--green]">
                Avernold – Full-Stack Web Developer & UI Designer
              </span>{" "}
              I specialize in crafting intuitive, user-centered web experiences
              that blend clean design with solid functionality. With a
              background in both software development and visual design, I bring
              a well-rounded skill set that bridges aesthetics and performance,
              whether it's building scalable booking systems, HR platforms, or
              high-converting landing pages.
            </p>
            <p className="mb-[20px]">
              Over the years, I’ve worked with tech startups, BPO service
              providers, and agencies leading projects, mentoring teams, and
              delivering production-ready solutions across a wide range of
              stacks like{" "}
              <span className="text-[--green]">
                React.js, Laravel, CakePHP, and WordPress
              </span>
              .
            </p>
            <p className="mb-[20px]">
              Currently open for{" "}
              <span className="text-[--green]">
                freelance or remote opportunities
              </span>
              , I’m passionate about building efficient, modern web applications
              and growing my network within the development community. Whether
              you're a business in need of a digital solution or a team looking
              for a versatile developer and I’d love to connect with you.
            </p>
            <p className="mb-[20px]">
              Here are the technologies I've been using:
            </p>
            <ul className="grid grid-cols-2 font-mono text-sm max-[767px]:text-xs">
              <Tech techno="HTML5" />
              <Tech techno="CSS3" />
              <Tech techno="JavaScript" />
              <Tech techno="PHP" />
              <Tech techno="ReactJs" />
              <Tech techno="Laravel" />
              <Tech techno="VueJs" />
              <Tech techno="CakePHP" />
              <Tech techno="AngularJS" />
              <Tech techno="Github" />
              <Tech techno="Tailwind" />
              <Tech techno="Bootstrap" />
              <Tech techno="MySQL" />
              <Tech techno="Microsoft SQL Server" />
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
