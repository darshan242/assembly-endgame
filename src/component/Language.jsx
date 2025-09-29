import React from "react";
import { languages } from "../languages";

const Language = (props) => {
  return (
    <div className="language-container">
      {languages.map((sinlglelang, index) => {
        const Style = {
          backgroundColor: sinlglelang.backgroundColor,
          color: sinlglelang.color,
        };
        return (
          <span
            className={`chip ${props.wrongGuessedCount > index ? "lost" : ""}`}
            style={Style}
            key={sinlglelang.name}
          >
            {sinlglelang.name}
          </span>
        );
      })}
    </div>
  );
};

export default Language;
