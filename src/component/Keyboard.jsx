import React from "react";

const Keyboard = (props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="keyboard">
      {alphabet
        .toUpperCase()
        .split("")
        .map((singleAlphabet, index) => {
          return (
            <button
              onClick={() => props.addGuessedLetter(singleAlphabet)}
              key={index}
            >
              {singleAlphabet}
            </button>
          );
        })}
    </div>
  );
};

export default Keyboard;
