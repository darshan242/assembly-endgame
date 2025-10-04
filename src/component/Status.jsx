import React from "react";
import { languages } from "../languages";
import { getFarewellText } from "../utils";
const Status = (props) => {
  return (
    <section aria-live="polite" role="status" className={props.gameStatusClass}>
      {props.isGameOver ? (
        props.isGameWon ? (
          <>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </>
        ) : (
          <>
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        )
      ) : props.isLastGuessIncorrect ? (
        <p className="farewell-message">
          {getFarewellText(languages[props.wrongGuessedCount - 1].name)}
        </p>
      ) : null}
    </section>
  );
};

export default Status;
