import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./RenderingArrayOfObjects.js";

const Plans_main = () => {
  return (
    <div>
      <h1>General</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Plans_main;
