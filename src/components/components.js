export const Title = (props) => {
  const { number, info } = props;
  return (
    <div className="flex items-center mb-[50px]">
      <div>
        <h2 className="font-semibold text-3xl text-white/90 max-[767px]:text-xl">
          <span className="text-[--green] font-mono text-xl max-[767px]:text-lg">
            {number}
          </span>{" "}
          {info}
        </h2>
      </div>
      <div className="w-[300px] h-[1px] bg-white/50 ml-[50px] max-[767px]:hidden "></div>
    </div>
  );
};

export const Tech = (props) => {
  const { techno } = props;
  return (
    <li className="before:content-['▹'] before:inline-block before:mr-2 before:text-[--green]">
      {techno}
    </li>
  );
};

export const WorkDescription = (props) => {
  const { desc } = props;

  return (
    <li className="mb-2 before:content-['▹'] before:inline-block before:mr-2 before:text-[--green]">
      {desc}
    </li>
  );
};

export const Tabs = (props) => {
  const { tabdesc, className } = props;

  return (
    <div
      className={`p-3 cursor-pointer hover:text-[--green] max-[767px]:min-w-[150px]  hover:bg-black/20 duration-150 delay-75 border-l-2 max-[767px]:border-l-0 max-[767px]:border-b-2 border-white/50 ${className}`}
      onClick={props.toggle}
    >
      {tabdesc}
    </div>
  );
};

export const ImgRow = (props) => {
  const { img, label, desc, className } = props;
  return (
    <>
      <div className="rounded-t-xl overflow-hidden cursor-pointer ">
        <img
          src={img}
          alt="vexel"
          className={`${className} hover:scale-110 delay-75 duration-200`}
        />
      </div>
      <div className=" bg-zinc-800 p-10 rounded-b-xl ">
        <h1 className="text-white/90 font-semibold text-xl truncate">
          {label}
        </h1>
        <h2>{desc}</h2>
      </div>
    </>
  );
};
