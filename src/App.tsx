import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Cokctails from "./components/Cokctails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      {/* <div className="h-dvh"></div> */}
      <Hero />
      <Cokctails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
