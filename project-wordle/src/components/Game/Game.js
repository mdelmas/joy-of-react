import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessList, setGuessList] = React.useState([]);
  const [banner, setBanner] = React.useState(null);

  console.info({ answer });
  const checkedGuessList = guessList.map((guess) => checkGuess(guess, answer));

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuessList([]);
    setBanner(null);
  };

  const handleNewGuess = (guess) => {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;

    if (guess === answer) {
      setBanner(
        <Banner
          bannerType={"happy"}
          guessNumber={guessList.length + 1}
          resetGame={resetGame}
        />
      );
    } else if (guessList.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setBanner(
        <Banner bannerType={"sad"} guessWord={answer} resetGame={resetGame} />
      );
    }
    setGuessList(guessList.concat(guess));
  };

  return (
    <>
      {banner}
      <GuessResults guessList={checkedGuessList} />
      <GuessInput
        handleNewGuess={handleNewGuess}
        disabled={guessList.length >= NUM_OF_GUESSES_ALLOWED}
      />
    </>
  );
}

export default Game;
