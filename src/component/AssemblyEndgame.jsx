import React, { useState } from "react";
import Status from "./Status";
import Language from "./Language";
import InputWord from "./InputWord";
import Keyboard from "./Keyboard";
import clsx from "clsx";
import ConfettiCustom from "./ConfettiCustom";
import { words } from "../words";
import { wordsWithHints } from "../wordsWithHints";

const AssemblyEndgame = () => {
  function getRandomWord() {
    // let guessLetter = words[Math.ceil(Math.random() * words.length)];
    let guessedLetter =
      wordsWithHints[Math.ceil(Math.random() * wordsWithHints.length)];
    console.log(guessedLetter.word);
    console.log(guessedLetter.hint);

    return [guessedLetter.word, guessedLetter.hint];
  }

  function getRandomLettersFromWord(word) {
    const wordLetters = word.split('');
    const uniqueLetters = [...new Set(wordLetters)]; // Remove duplicates
    
    // Randomly choose 1 or 2 letters
    const numLettersToReveal = Math.random() < 0.5 ? 1 : 2;
    const numLetters = Math.min(numLettersToReveal, uniqueLetters.length);
    
    // Shuffle and pick random letters
    const shuffled = [...uniqueLetters].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numLetters);
  }
  // Get a single random word and hint pair
  const initialWordData = getRandomWord();
  const initialRevealedLetters = getRandomLettersFromWord(initialWordData[0]);
  const [currentWord, setCurrentWord] = useState(initialWordData[0]);
  const [currentWordHint, setCurrentWordHint] = useState(initialWordData[1]);
  // console.log(currentWord);
  // console.log(currentWordHint);

  const [guessedLetter, setGuessedLetter] = useState(initialRevealedLetters);

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
  function newGameClick() {
    const newWordData = getRandomWord();
    const newRevealedLetters = getRandomLettersFromWord(newWordData[0]);
    setCurrentWord(newWordData[0]);
    setCurrentWordHint(newWordData[1]);
    setGuessedLetter(newRevealedLetters);
  }

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
      <InputWord
        word={currentWord}
        guessedLetter={guessedLetter}
        isGameEnd={isGameEnd}
      ></InputWord>
      <>
        {wrongGuessedCount > 3 && (
          <>
            <button
              className="hint-button"
              onClick={() => {
                document.querySelector(".hint-button").classList.add("a-none");
                document.querySelector(".hint").classList.add("d-block");
              }}
            >
              🤔 <span>Need a Hint?</span>
            </button>
            <p className="hint">{`Hint :- ${currentWordHint
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}`}</p>
          </>
        )}
      </>
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        guessedLetter={guessedLetter}
        currentWord={currentWord}
        isGameOver={isGameOver}
      ></Keyboard>
      {isGameOver && (
        <button className="new-game" onClick={newGameClick}>
          New Game
        </button>
      )}
    </>
  );
};

export default AssemblyEndgame;
