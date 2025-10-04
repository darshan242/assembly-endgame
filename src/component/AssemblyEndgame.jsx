import React, { useState } from "react";
import Status from "./Status";
import Language from "./Language";
import InputWord from "./InputWord";
import Keyboard from "./Keyboard";
import clsx from "clsx";

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetter, setGuessedLetter] = useState([]);
  function addGuessedLetter(letter) {
    setGuessedLetter((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    );
  }
  const wrongGuessedArray = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  );
  const wrongGuessedCount = wrongGuessedArray.length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const isGameEnd = wrongGuessedCount >= 8;
  const isGameOver = isGameEnd || isGameWon;

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameEnd,
  });

  return (
    <>
      <Status
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        gameStatusClass={gameStatusClass}
      ></Status>
      <Language wrongGuessedCount={wrongGuessedCount}></Language>
      <InputWord word={currentWord} guessedLetter={guessedLetter}></InputWord>
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        guessedLetter={guessedLetter}
        currentWord={currentWord}
      ></Keyboard>
      {isGameOver && <button className="new-game">New Game</button>}
    </>
  );
};

export default AssemblyEndgame;
