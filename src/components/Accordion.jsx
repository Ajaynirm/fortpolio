import React from "react";
import Team from "./Team";

const Accordion = () => {
  return (
    <>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-center">
          Click to see my Intelligent Team
        </div>
        <div className="collapse-content">
          <Team />
        </div>
      </div>
    </>
  );
};

export default Accordion;
