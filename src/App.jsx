import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import { motion, useSpring, useScroll } from "framer-motion"
import Scroller from "./components/Scroller";
import BootScreen from "./components/BootScreen";

function ScrollLinked() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
  })

  return (
      <>
          <motion.div
              id="scroll-indicator"
              style={{
                  scaleX,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 10,
                  originX: 0,
                  backgroundColor: "#ff0088",
              }}
          />
          <App />
      </>
  )
}
function App() {
  const [boot,setBoot]=useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setBoot(false);
    }, 2000);

   
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
     {boot ? <BootScreen /> :
     <Scroller />
    }
    </>
  );
}

export default App;
