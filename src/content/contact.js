import React from "react";

function Contact() {
  return (
    <section className="m-auto max-w-[1000px] py-[6rem] mb-[7rem]" id="contact">
      <h2 className="text-center text-[--green] font-semibold text-xl font-mono max-[767px]:text-base">
        04. What's Next?
      </h2>
      <div className="text-center mt-7 max-w-[70%] m-auto max-[767px]:max-w-[90%]">
        <h2 className="text-white/90 text-5xl font-semibold max-[767px]:text-4xl">
          Get in Touch
        </h2>
        <p className=" mt-5 max-[767px]:text-[15px]">
          My inbox is always open and I'm looking for any new opportunities.
          Have a fascinating project you need assistance with, and are available
          for specific freelance opportunities? You can email me or message me
          right away!
        </p>

        <div className="hover:-translate-y-1 hover:-translate-x-1  transition ease-in-out delay-100 duration-150 mt-20 xl:max-w-[30%] m-auto lg:max-w-[50%] md:max-w-[50%] w-[50%] max-[767px]:w-[100%]">
          <a
            href="mailto:averemocling@gmail.com"
            className="transition ease-in-out delay-100 duration-400 hover:shadow-[4px_4px_0_0px] hover:shadow-[--green] text-[--green] py-4 px-8 border-[1px] rounded font-mono bg-zinc-900 border-[--green] text-lg "
          >
            Say Hello!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
