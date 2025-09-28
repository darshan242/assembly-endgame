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

  return (
    <>
      <Status></Status>
      <Language></Language>
      <InputWord word={currentWord}></InputWord>
      <Keyboard addGuessedLetter={addGuessedLetter}></Keyboard>
      <button className="new-game">New Game</button>
    </>
  );
};

export default AssemblyEndgame;
