import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess: guess });
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
