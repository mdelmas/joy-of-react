import React from "react";

import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";

function GuessResultCell({ cell }) {
  console.log(cell);
  if (!cell) {
    return <span className="cell"></span>;
  }
  return <span className={`cell ${cell.status}`}>{cell.letter}</span>;
}

function GuessResultLine({ guess }) {
  const displayedGuess = guess || Array(WORD_LENGTH);
  return (
    <p className="guess">
      {[...displayedGuess].map((cell) => (
        <GuessResultCell cell={cell} key={crypto.randomUUID()} />
      ))}
    </p>
  );
}

function GuessResults({ guessList }) {
  const emptyGuessList = [...Array(NUM_OF_GUESSES_ALLOWED - guessList.length)];

  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <GuessResultLine guess={guess} key={crypto.randomUUID()} />
      ))}

      {emptyGuessList.map(() => (
        <GuessResultLine key={crypto.randomUUID()} />
      ))}
    </div>
  );
}

export default GuessResults;
