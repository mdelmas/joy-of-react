import React from "react";

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";

function GuessResultCell({ letter }) {
  return letter === undefined ? (
    <span className="cell"></span>
  ) : (
    <span className={`cell ${letter.status}`}>{letter.value}</span>
  );
}

function GuessResultLine({ guess }) {
  return (
    <p className="guess">
      {[...Array(WORD_LENGTH)].map((_, index) => {
        let letter = guess ? guess.check[index] : undefined;
        return <GuessResultCell letter={letter} key={index} />;
      })}
    </p>
  );
}

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {[...Array(NUM_OF_GUESSES_ALLOWED)].map((_, index) => {
        let guess = index < guessList.length ? guessList[index] : undefined;
        return <GuessResultLine guess={guess} key={index} />;
      })}
    </div>
  );
}

export default GuessResults;
