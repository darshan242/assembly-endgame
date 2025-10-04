import React, { useState } from "react";
import Status from "./Status";
import Language from "./Language";
import InputWord from "./InputWord";
import Keyboard from "./Keyboard";
import clsx from "clsx";
import ConfettiCustom from "./ConfettiCustom";

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetter, setGuessedLetter] = useState([]);
  function addGuessedLetter(letter) {
    setGuessedLetter((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    );
  }

  //Keyboard Update variables
  const wrongGuessedArray = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  );
  const wrongGuessedCount = wrongGuessedArray.length;

  //Status Checking Variables
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetter.includes(letter));
  const isGameEnd = wrongGuessedCount >= 8;
  const isGameOver = isGameEnd || isGameWon;

  //Farewell Message Varaibles
  const lastGuessedLetter = guessedLetter[guessedLetter.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  //Status Message Class Conditional Rendering Variables
  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameEnd,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  return (
    <>
      {isGameWon && <ConfettiCustom></ConfettiCustom>}
      <Status
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        gameStatusClass={gameStatusClass}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessedCount={wrongGuessedCount}
      ></Status>
      <Language wrongGuessedCount={wrongGuessedCount}></Language>
      <InputWord word={currentWord} guessedLetter={guessedLetter}></InputWord>
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        guessedLetter={guessedLetter}
        currentWord={currentWord}
        isGameOver={isGameOver}
      ></Keyboard>
      {isGameOver && <button className="new-game">New Game</button>}
    </>
  );
};

export default AssemblyEndgame;
