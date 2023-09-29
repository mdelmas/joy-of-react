import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  console.log("guessList", guessList);

  const addGuessToList = (guess) => {
    setGuessList(guessList.concat(guess));
  };

  const checkedGuessList = guessList.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults guessList={checkedGuessList} />
      <GuessInput addGuessToList={addGuessToList} />
    </>
  );
}

export default Game;
