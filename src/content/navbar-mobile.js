import React, { useState } from "react";
import Logo from "../assets/logo.png";

function NavMob(props) {
  const [setOpen, setOpenState] = useState();

  return (
    <>
      <header className={`w-[100%] bg-zinc-900 ${props.className}`}>
        <nav className="flex justify-between h-[10vh] items-center m-auto p-7">
          <div>
            <img
              style={{ animationDuration: "100ms" }}
              className=" animate-fadeDown w-10 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer transition ease-in-out delay-100 duration-300"
              src={Logo}
              alt="logo"
            />
          </div>
          <div className="flex justify-between hidden">
            <ul className="font-mono text-white/75 flex items-center gap-7 justify-between">
              <li
                className="animate-fadeDown "
                style={{ animationDuration: "200ms" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 fill-[--green]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavMob;
