import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import MultiProject from "./components/MultiProject";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <MultiProject />
        <Accordion />
        <Footer />
      </div>
    </>
  );
}

export default App;
