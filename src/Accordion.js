import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./App.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item" id="list-item-1">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <strong>{title}</strong>
        </div>
        <div>{!isActive ? <SlArrowDown /> : <SlArrowUp />}</div>
      </div>

      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
