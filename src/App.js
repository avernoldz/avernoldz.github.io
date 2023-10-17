import { useEffect } from "react";
import NavBar from "./content/navbar";
import RightBar from "./content/right-bar";
import Intro from "./content/intro";
import About from "./content/about";
import Work from "./content/work";
import Project from "./content/project";
import Other from "./content/other";
import Contact from "./content/contact";
import Footer from "./content/footer";
import Aos from "aos";
import "aos/dist/aos.css";

import Headroom from "react-headroom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <div>
      <Headroom>
        <NavBar />
      </Headroom>
      <RightBar />
      <div>
        <main className="pr-[150px] pl-[150px]">
          <Intro />
          <div data-aos="slide-up">
            <About />
          </div>
          <div data-aos="slide-up">
            <Work />
          </div>
          <Project />
          <div data-aos="slide-up">
            <Other />
          </div>
          <div data-aos="slide-up">
            <Contact />
          </div>
          <div data-aos="slide-up">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
