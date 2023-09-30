import React from "react";

// function Banner({ bannerType, guessNumber = 0, guessWord = "", resetGame }) {
//   return (
//     <div className={`${bannerType} banner`}>
//       {bannerType === "happy" ? (
//         <p>
//           <strong>Congratulations!</strong> Got it in
//           <strong> {guessNumber} guesses</strong>.
//         </p>
//       ) : (
//         <p>
//           Sorry, the correct answer is <strong>{guessWord}</strong>.
//         </p>
//       )}
//       <button id="restart" onClick={resetGame}>
//         Restart Game
//       </button>
//     </div>
//   );
// }

function LoseBanner({ guessWord, action }) {
  return (
    <Banner status="sad" action={action}>
      <p>
        Sorry, the correct answer is <strong>{guessWord}</strong>. //{" "}
      </p>{" "}
    </Banner>
  );
}

function WinBanner({ guessNumber, action }) {
  return (
    <Banner status="happy" action={action}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessNumber} guesses</strong>.
      </p>
    </Banner>
  );
}

function Banner({ status, children, action = undefined }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && (
        <button id="restart" onClick={action.callback}>
          {action.label}
        </button>
      )}
    </div>
  );
}

export { LoseBanner, WinBanner };
