import React from "react";
import Team from "./Team";

const Accordion = () => {
  return (
    <>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-center text-red-300" id="team">
          Click to see my  Team Mates
        </div>
        <div className="collapse-content overflow-auto md:overflow-x-scroll sm:w-50">
          <Team />
        </div>
      </div>
    </>
  );
};

export default Accordion;
