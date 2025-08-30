import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";
import Accordion from "./Accordion";
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
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          left: 1,
          right: 0,
          bottom: 0,
          height: 6,
          originX: 0,
          backgroundColor: "blue",
          zIndex: 100,
        }}
      />

      <div className="select-none">
        <Navbar />
        <Hero />
        <Experience />
        <Project />
        <Accordion />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default Scroller;


