import { useEffect } from "react";
import NavBar from "./content/navbar";
import NavMob from "./content/navbar-mobile";
import RightBar from "./content/right-bar";
import Intro from "./content/intro";
import About from "./content/about";
import Work from "./content/work";
import Project from "./content/project";
import Other from "./content/other";
import Contact from "./content/contact";
import Footer from "./content/footer";
import Art from "./content/art";
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
        <NavBar className="max-[767px]:hidden" />
        <NavMob className="hidden max-[767px]:block" />
      </Headroom>
      <RightBar />
      <div>
        <main className="xl:px-[150px] md:px-[120px] px-8">
          <Intro />
          <div data-aos="slide-up">
            <About />
          </div>
          <div data-aos="slide-up">
            <Work />
          </div>
          <div data-aos="slide-up">
            <Project />
          </div>
          <div data-aos="slide-up">
            <Other />
          </div>
          <div data-aos="slide-up">
            <Art />
          </div>
          <div data-aos="slide-up">
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
