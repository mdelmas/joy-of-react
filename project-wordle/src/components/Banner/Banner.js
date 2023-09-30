import React from "react";

function Banner({ bannerType, guessNumber = 0, guessWord = "", resetGame }) {
  return (
    <div className={`${bannerType} banner`}>
      {bannerType === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessNumber} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{guessWord}</strong>.
        </p>
      )}
      <button id="restart" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}

export default Banner;
