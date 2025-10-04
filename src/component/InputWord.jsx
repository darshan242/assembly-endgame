import React from "react";
import clsx from "clsx";
const InputWord = (props) => {
  return (
    <div className="word">
      {props.word.split("").map((singleWord, index) => {
        const revealLetter =
          props.isGameEnd || props.guessedLetter.includes(singleWord);
        const letterClassName = clsx(
          props.isGameEnd &&
            !props.guessedLetter.includes(singleWord) &&
            "missed-letter"
        );
        return (
          <span key={index} className={letterClassName}>
            {revealLetter ? singleWord.toUpperCase() : " "}
          </span>
        );
      })}
    </div>
  );
};

export default InputWord;
