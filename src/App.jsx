import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
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

export default App;
