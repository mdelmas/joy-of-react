import React from "react";

function GuessInput({ addGuessToList }) {
  const [guess, setGuess] = React.useState("");

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGuessToList(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
