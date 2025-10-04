import clsx from "clsx";
import React from "react";

const Keyboard = (props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div className="keyboard">
      {alphabet.split("").map((singleAlphabet, index) => {
        const isGuessed = props.guessedLetter.includes(singleAlphabet);

        const isCorrect =
          isGuessed && props.currentWord.includes(singleAlphabet);

        const isWrong =
          isGuessed && !props.currentWord.includes(singleAlphabet);
        const className = clsx({
          correct: isCorrect,
          wrong: isWrong,
        });

        return (
          <button
            onClick={() => props.addGuessedLetter(singleAlphabet)}
            key={index}
            disabled={props.isGameOver}
            className={className}
          >
            {singleAlphabet.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
