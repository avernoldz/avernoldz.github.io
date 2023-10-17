import React from "react";

function Footer() {
  return (
    <section className="m-auto max-w-[1000px] py-10">
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
