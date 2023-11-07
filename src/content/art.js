import React from "react";
import Img1 from "../assets/ga1.jpg";
import Img2 from "../assets/ga2.jpg";
import Img3 from "../assets/ga3.jpg";
import Img5 from "../assets/ga4.jpg";
import Img6 from "../assets/ga5.jpg";
import Img7 from "../assets/ga6.jpg";
import Img8 from "../assets/ga7.jpg";
import Img4 from "../assets/vexel.jpg";
import { ImgRow } from "../components/components";

function Art() {
  return (
    <>
      <section className="m-auto max-w-[1000px] py-[6rem]">
        <div className="flex items-center">
          <div>
            <h2 className="text-[--green] font-semibold text-3xl max-[767px]:text-2xl ">
              Graphic Designs{" "}
              <span className="text-white/90 italic">I created</span>
            </h2>
          </div>
          <div className="w-[300px] h-[1px] bg-white/50 ml-[50px] max-[767px]:hidden "></div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 m-auto max-[767px]:grid-rows-none max-[767px]:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ">
          <div className="max-w-[100%]">
            <a href="https://avernoldz.github.io/kateyes" target="_blank">
              <ImgRow
                img={Img1}
                label="KatEyes"
                desc="Homepage web-design"
                className="w-[380px] h-[285px] "
              />
            </a>
          </div>
          <div className="max-w-[100%]">
            <a href="https://avernoldz.github.io/EVNX" target="_blank">
              <ImgRow
                img={Img2}
                label="EVNX"
                desc="Homepage web-design"
                className="w-[380px] h-[285px] "
              />
            </a>
          </div>
          <div className="max-w-[100%]">
            <a
              href="https://drive.google.com/drive/folders/1H_lNqDwK3t7yesVA8wGfmoC2mVWDyV1Z?usp=sharing"
              target="_blank"
            >
              <ImgRow
                img={Img3}
                label="NGNL"
                desc="Jersey Design"
                className="w-[380px] h-[285px] "
              />
            </a>
          </div>
          <div className="col-span-2 row-span-2 max-[767px]:col-auto max-[767px]:row-auto">
            <a
              href="https://drive.google.com/drive/folders/1H_lNqDwK3t7yesVA8wGfmoC2mVWDyV1Z?usp=sharing"
              target="_blank"
            >
              <ImgRow img={Img4} label="Vexel Art" desc="Graphic Arts" />
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/1H_lNqDwK3t7yesVA8wGfmoC2mVWDyV1Z?usp=sharing"
              target="_blank"
            >
              <ImgRow img={Img5} label="Dalandan" desc="Packaging design" />
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/1H_lNqDwK3t7yesVA8wGfmoC2mVWDyV1Z?usp=sharing"
              target="_blank"
            >
              <ImgRow
                img={Img6}
                label="Uniwest Development Corporation"
                desc="Business Card design"
              />
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/1H_lNqDwK3t7yesVA8wGfmoC2mVWDyV1Z?usp=sharing"
              target="_blank"
            >
              <ImgRow img={Img7} label="Kings" desc="Jersey Design" />
            </a>
          </div>
          <div className="col-span-2 max-[767px]:col-auto max-[767px]:row-auto">
            <a
              href="https://drive.google.com/drive/folders/1H_lNqDwK3t7yesVA8wGfmoC2mVWDyV1Z?usp=sharing"
              target="_blank"
            >
              <ImgRow img={Img8} label="Arci Clarice" desc="Tarpaulin design" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Art;
