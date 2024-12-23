import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Project from "./components/Project";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Project />
        <Accordion />
        <Footer />
      </div>
    </>
  );
}

export default App;
