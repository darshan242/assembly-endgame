import React from "react";
import clsx from "clsx";
const InputWord = (props) => {
  return (
    <div className="word">
      {props.word.split("").map((singleWord, index) => {
        return (
          <span key={index}>
            {props.guessedLetter.includes(singleWord)
              ? singleWord.toUpperCase()
              : " "}
          </span>
        );
      })}
    </div>
  );
};

export default InputWord;
