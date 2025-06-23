import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Cokctails from "./components/Cokctails";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cokctails />
    </main>
  );
};

export default App;
