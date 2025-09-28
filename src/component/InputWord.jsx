import React from "react";

const InputWord = (props) => {
  return (
    <div className="word">
      {props.word
        .toUpperCase()
        .split("")
        .map((singleWord, index) => {
          return <span key={index}>{singleWord}</span>;
        })}
    </div>
  );
};

export default InputWord;
