import React from "react";

function Footer() {
  return (
    <section className="m-auto max-w-[1000px] py-10">
      <div className="mb-10 text-center max-[767px]:block hidden">
        <ul className="flex justify-center gap-5 mb-5">
          <li>
            <a
              href="https://www.linkedin.com/in/aver-emocling-89a349267/"
              target="_blank"
            >
              <svg
                className="w-[35px] fill-white/75 hover:fill-[--green] transition ease-in-out delay-100 duration-200 hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0,0,256,256"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Avernoldz" target="_blank">
              <svg
                className="w-[35px] fill-white/75 hover:fill-[--green] transition ease-in-out delay-100 duration-200 hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0,0,256,256"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
        <a
          href="mailto:averemocling@gmail.com"
          target="_blank"
          className="hover:text-[--green] font-mono"
        >
          averemocling@gmail.com
        </a>
      </div>
      <div className="text-center">
        <p className="font-mono">
          Coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            className="text-[--green] hover:opacity-70"
          >
            Visual Studio Code
          </a>{" "}
          by yours truly. Built with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            className="text-[--green] hover:opacity-70"
          >
            ReactJs
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="text-[--green] hover:opacity-70"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://pages.github.com/"
            target="_blank"
            className="text-[--green] hover:opacity-70"
          >
            GitHub Pages
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Footer;
