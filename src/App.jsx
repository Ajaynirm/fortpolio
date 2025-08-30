import { useEffect, useState } from "react";
import Scroller from "./components/Scroller";
import BootScreen from "./components/BootScreen";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(useGSAP,SlowMo);


function App() {
  const [boot,setBoot]=useState(true);

  //logic to welcome screen on wake up
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

