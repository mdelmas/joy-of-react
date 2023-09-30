import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { LoseBanner, WinBanner } from "../Banner";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("playing");
  // const [banner, setBanner] = React.useState(null);

  console.info({ answer });
  const checkedGuessList = guessList.map((guess) => ({
    id: guess.id,
    value: guess.value,
    check: checkGuess(guess.value, answer),
  }));

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setStatus("playing");
  };

  const handleNewGuess = (guess) => {
    const nextGuessList = guessList.concat({ value: guess, id: Math.random() });
    if (guess === answer) {
      setStatus("win");
    } else if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lose");
    }
    setGuessList(nextGuessList);
  };

  return (
    <>
      {status === "win" && (
        <WinBanner
          guessNumber={guessList.length}
          action={{ label: "Restart Game", callback: resetGame }}
        />
      )}
      {status === "lose" && (
        <LoseBanner
          guessWord={answer}
          action={{ label: "Restart Game", callback: resetGame }}
        />
      )}

      <GuessResults guessList={checkedGuessList} />

      <GuessInput
        handleNewGuess={handleNewGuess}
        disabled={status !== "playing"}
      />
    </>
  );
}

export default Game;
