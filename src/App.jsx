import { useEffect, useState } from "react";
import { motion, useSpring, useScroll } from "framer-motion"
import Scroller from "./components/Scroller";
import BootScreen from "./components/BootScreen";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(useGSAP,SlowMo);
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
    }, 3000);

   
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
