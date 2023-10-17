import React from "react";

function Contact() {
  return (
    <section
      className="m-auto max-w-[1000px] py-[6rem] mb-[7rem] "
      id="contact"
    >
      <h2 className="text-center text-[--green] font-semibold text-xl font-mono">
        04. What's Next?
      </h2>
      <div className="text-center mt-7 max-w-[70%] m-auto">
        <h2 className="text-white/90 text-5xl font-semibold">Get in Touch</h2>
        <p className=" mt-5">
          I'm currently looking for any new opportunities, my inbox is always
          open. Available for select freelance opportunities, have an exciting
          project you need help with? Send me an email or contact me via instant
          message!
        </p>

        <div className="hover:-translate-y-1 hover:-translate-x-1  transition ease-in-out delay-100 duration-150 mt-20 max-w-[30%] m-auto">
          <a
            href="mailto:averemocling@gmail.com"
            className="transition ease-in-out delay-100 duration-400 hover:shadow-[4px_4px_0_0px] hover:shadow-[--green] text-[--green] py-4 px-8 border-[1px] rounded font-mono bg-zinc-900 border-[--green] text-lg "
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
