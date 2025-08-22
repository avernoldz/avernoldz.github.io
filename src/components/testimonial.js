import React from "react";

function Testimonial() {
  return (
    <div className="text-white/50 my-[6.5rem] w-[80%] m-auto bg-[--light-navy] rounded-md p-5 max-[767px]:w-[90%] max-[767px]:text-[15px]">
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
  );
}

export default Testimonial;
