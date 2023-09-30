import React from "react";

function GuessInput({ handleNewGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewGuess(guess);
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
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
