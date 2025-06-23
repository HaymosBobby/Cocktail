import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
