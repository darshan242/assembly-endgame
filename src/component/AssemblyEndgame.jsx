import React, { useState } from "react";
import Status from "./Status";
import Language from "./Language";
import InputWord from "./InputWord";
import Keyboard from "./Keyboard";

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetter, setGuessedLetter] = useState([]);
  function addGuessedLetter(letter) {
    setGuessedLetter((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    );
  }
  console.log(guessedLetter);
  const wrongGuessedArray = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  );
  const wrongGuessedCount = wrongGuessedArray.length;

  return (
    <>
      <Status></Status>
      <Language wrongGuessedCount={wrongGuessedCount}></Language>
      <InputWord word={currentWord} guessedLetter={guessedLetter}></InputWord>
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        guessedLetter={guessedLetter}
        currentWord={currentWord}
      ></Keyboard>
      <button className="new-game">New Game</button>
    </>
  );
};

export default AssemblyEndgame;
