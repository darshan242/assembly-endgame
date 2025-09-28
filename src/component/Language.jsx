import React from "react";
import { languages } from "../languages";

const Language = () => {
  return (
    <div className="language-container">
      {languages.map((sinlglelang) => {
        const Style = {
          backgroundColor: sinlglelang.backgroundColor,
          color: sinlglelang.color,
        };
        return (
          <span className="chip" style={Style} key={sinlglelang.name}>
            {sinlglelang.name}
          </span>
        );
      })}
    </div>
  );
};

export default Language;
