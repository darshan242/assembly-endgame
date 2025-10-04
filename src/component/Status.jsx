import React from "react";

const Status = (props) => {
  return (
    <section className={props.gameStatusClass}>
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
      ) : null}
    </section>
  );
};

export default Status;
