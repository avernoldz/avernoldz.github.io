import React from "react";
import { Title } from "../components/components";
import Proj1 from "../assets/project1.jpg";
import Proj2 from "../assets/project2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="m-auto max-w-[1000px] py-[6rem]" id="work">
      <Title number="03." info="Some projects I've contributed in" />
      <div className="text-right flex relative mt-[10%]">
        <div className="relative cursor-pointer hover:before:delay-100 hover:before:duration-100 before:content-[''] before:block before:w-[100%] before:h-[100%] before:absolute before:bg-[--green] before:opacity-30 before:z-[3] before:rounded-md hover:before:hidden">
          <a href="https://gungamers.com" target="_blank">
            <img
              src={Proj1}
              alt="image"
              className="rounded-md w-[720px] h-[440px]"
            />
          </a>
        </div>
        <div className="absolute z-30 w-[55%] right-0 top-20">
          <p className="font-mono text-[--green] text-base mb-2">
            Featured Project
          </p>
          <h3 className="font-semibold text-white/90 text-2xl">
            Gungamers Portfolio
          </h3>
          <div className="bg-[#121212] rounded-md py-6 px-7 mb-5 mt-5">
            <p className="text-white/50">
              A website portfolio that showcases the work of professional
              individuals in the gun industry, developed using WordPress.
            </p>
          </div>
          <ul className="flex gap-5 text-[--green] font-mono float-right mr-5">
            <li>WordPress</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>

      <div
        className="text-white/50 mt-[6.5rem] w-[80%] m-auto bg-[#121212] rounded-md p-5"
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
        className="flex flex-row-reverse relative mt-[10%] "
        data-aos="slide-up"
      >
        <div className="absolute z-30 w-[55%] left-0 top-20">
          <p className="font-mono text-[--green] text-base mb-2">
            Featured Project
          </p>
          <h3 className="font-semibold text-white/90 text-2xl">
            M-Pesa Backoffice
          </h3>
          <div className="bg-[#121212] rounded-md py-6 px-7 mb-5 mt-5">
            <p className="text-white/50">
              I developed web pages that is designed in Figma using ReactJs with
              the help of our senior developer overseeing our work. Also
              contributed in consolidating the Response Header and some minor
              fixes in the login session time.
            </p>
          </div>
          <ul className="flex gap-5 text-[--green] font-mono ml-5">
            <li>ReactJS</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Figma</li>
            <li>Jira</li>
          </ul>
        </div>
        <div className="relative cursor-pointer hover:before:delay-100 hover:before:duration-100 before:content-[''] before:block before:w-[100%] before:h-[100%] before:absolute before:bg-[--green] before:opacity-30 before:z-[3] before:rounded-md hover:before:hidden">
          <a href="https://www.vodafone.com/" target="_blank">
            <img
              src={Proj2}
              alt="image"
              className="rounded-md w-[720px] h-[440px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
