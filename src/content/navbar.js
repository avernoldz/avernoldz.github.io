import React from "react";
import Logo from "../assets/logo.png";

function NavBar() {
  return (
    <header className="w-[100%] bg-zinc-900">
      <nav className="flex justify-between h-[10vh] items-center m-auto pl-20 pr-20 ">
        <div>
          <img
            style={{ animationDuration: "100ms" }}
            className=" animate-fadeDown w-10 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer transition ease-in-out delay-100 duration-300"
            src={Logo}
            alt="logo"
          />
        </div>
        <div className="flex justify-between ">
          <ul className="font-mono text-white/75 flex items-center gap-7 justify-between">
            <li
              className="animate-fadeDown "
              style={{ animationDuration: "200ms" }}
            >
              <a
                href="#about"
                className="hover:text-[--green] transition ease-in-out delay-100 duration-200"
              >
                <span className="text-[--green] ">01. </span> About
              </a>
            </li>
            <li
              className="animate-fadeDown"
              style={{ animationDuration: "300ms" }}
            >
              <a
                href="#experience"
                className="hover:text-[--green]  transition ease-in-out delay-100 duration-200"
              >
                <span className="text-[--green] ">02. </span> Experience
              </a>
            </li>
            <li
              className="animate-fadeDown"
              style={{ animationDuration: "400ms" }}
            >
              <a
                href="#work"
                className="hover:text-[--green]  transition ease-in-out delay-100 duration-200"
              >
                <span className="text-[--green] ">03. </span> Work
              </a>
            </li>
            <li
              className="animate-fadeDown"
              style={{ animationDuration: "500ms" }}
            >
              <a
                href="#contact"
                className="hover:text-[--green]  transition ease-in-out delay-100 duration-200"
              >
                <span className="text-[--green] ">04. </span> Contact
              </a>
            </li>
          </ul>
          <div
            style={{ animationDuration: "600ms" }}
            className="animate-fadeDown hover:-translate-y-1 hover:-translate-x-1  transition ease-in-out delay-100 duration-200"
          >
            <a
              href="Avernold Emocling.pdf"
              download="Avernold Emocling.pdf"
              className="transition ease-in-out delay-100 duration-400 hover:shadow-[4px_4px_0_0px] hover:shadow-[--green] text-[--green] p-2 border-[1px] rounded font-mono bg-zinc-900 border-[--green] ml-6 pl-4 pr-4"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
