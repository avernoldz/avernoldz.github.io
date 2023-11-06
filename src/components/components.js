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
      <div className="w-[300px] h-[1px] bg-white/50 ml-[50px] max-[767px]:hidden md:hidden"></div>
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
