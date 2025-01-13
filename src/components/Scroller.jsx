import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";

import { motion, useSpring, useScroll } from "framer-motion";

function Scroller() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "green",
          zIndex: 100,
        }}
      />
      <div>
        <Navbar />
        <Hero />
        <Experience />
        <Project />
        {/* <Accordion /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default Scroller;
