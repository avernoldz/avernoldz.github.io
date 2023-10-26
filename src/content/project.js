import React from "react";
import { Title } from "../components/components";
import Proj1 from "../assets/project1.jpg";
import Proj2 from "../assets/project2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="m-auto max-w-[1000px] py-[6rem]" id="work">
      <div data-aos="slide-up">
        <Title number="03." info="Some projects I've contributed" />
        <div className="text-right max-[767px]:text-left flex relative mt-[10%]">
          <div
            className="relative cursor-pointer hover:before:delay-100 hover:before:duration-100 before:content-[''] before:block before:w-[100%] before:h-[100%] 
          before:absolute before:bg-[--green] before:opacity-30 before:z-[3] before:rounded-md hover:before:hidden max-[767px]:absolute max-[767px]:before:bg-black/90"
          >
            <a href="https://gungamers.com" target="_blank">
              <img
                src={Proj1}
                alt="image"
                className="rounded-md xl:w-[720px] h-[auto]  lg:w-[500px] md:w-[400px]  max-[767px]:min-h-[300px] "
              />
            </a>
          </div>
          <div
            className="absolute z-30  w-[55%] right-0 xl:top-20 lg:top-5 md:top-0 md:w-[75%] max-[767px]:static max-[767px]:w-[100%] 
            max-[767px]:p-5 max-[767px]:bg-black/90 max-[767px]:min-h-[300px] max-[767px]:flex max-[767px]:flex-wrap max-[767px]:shadow-[1px_8px_7px_0px_rgba(0,0,0,0.5)]"
          >
            <a href="https://gungamers.com" target="_blank">
              <p className="font-mono text-[--green] text-base mb-2">
                Featured Project
              </p>
              <h3 className="font-semibold text-white/90 text-2xl">
                Gungamers Portfolio
              </h3>
              <div className="bg-[#121212] rounded-md py-6 px-7 mb-5 mt-5 max-[767px]:bg-transparent max-[767px]:p-0">
                <p className="text-white/50">
                  A website portfolio that showcases the work of professional
                  individuals in the gun industry, developed using WordPress.
                </p>
              </div>
              <ul className="flex gap-5 text-[--green] font-mono float-right mr-5 max-[767px]:float-none">
                <li>WordPress</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
      <div
        className="text-white/50 my-[6.5rem] w-[80%] m-auto bg-[#121212] rounded-md p-5 max-[767px]:w-[90%] max-[767px]:text-[15px]"
        data-aos="slide-up"
      >
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/material-sharp/48/FFFFFF/quote-right.png"
          alt="quote-right"
          className="my-2"
        />
        <h2 className="mb-4">
          Aver did a fantastic job designing a portfolio to my satisfaction. He
          was responsive to my feedback, and was professional during his work
          every step of the way. I would strongly recommend him for his
          exceptional web design skills, and you can count on him to make your
          next project look good, even from a distance!
        </h2>
        <a
          href="https://www.linkedin.com/in/cameron-t-81570ab9/"
          target="_blank"
          className="text-[--green] mt-5 hover:opacity-70"
        >
          - Cameron Thompson
        </a>
      </div>

      <div
        className="flex flex-row-reverse relative mt-[10%] max-[767px]:text-left"
        data-aos="slide-up"
      >
        <div
          className="absolute z-30 w-[55%] left-0 xl:top-20 lg:top-0 lg:w-[75%] md:-top-5 md:w-[90%] max-[767px]:static max-[767px]:w-[100%] 
            max-[767px]:p-5 max-[767px]:bg-black/90 max-[767px]:min-h-[300px] max-[767px]:flex max-[767px]:flex-wrap max-[767px]:shadow-[1px_8px_7px_0px_rgba(0,0,0,0.5)]"
        >
          <p className="font-mono text-[--green] text-base mb-2">
            Featured Project
          </p>
          <h3 className="font-semibold text-white/90 text-2xl">
            M-Pesa Backoffice
          </h3>
          <div className="bg-[#121212] rounded-md py-6 px-7 mb-5 mt-5 max-[767px]:bg-transparent max-[767px]:p-0">
            <p className="text-white/50">
              With the help of our senior developer who is in charge of
              supervising our work, I created web pages that were designed in
              Figma using ReactJs. Additionally, we made some minor improvements
              to the login session time and the Response Header consolidation.
            </p>
          </div>
          <ul className="flex gap-5 text-[--green] font-mono ml-5 max-[767px]:ml-0 max-[767px]:float-none flex-wrap">
            <li>ReactJS</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Figma</li>
            <li>Jira</li>
          </ul>
        </div>
        <div
          className="relative cursor-pointer hover:before:delay-100 hover:before:duration-100 before:content-[''] before:block 
        before:w-[100%] before:h-[100%] before:absolute before:bg-[--green] before:opacity-30 before:z-[3] before:rounded-md hover:before:hidden
        max-[767px]:absolute max-[767px]:before:bg-black/80"
        >
          <a href="https://www.vodafone.com/" target="_blank">
            <img
              src={Proj2}
              alt="image"
              className="rounded-md xl:w-[720px] h-[auto] lg:w-[500px] md:w-[400px] max-[767px]:min-h-[300px] "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
