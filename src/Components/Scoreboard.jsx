import React from "react";

const Scoreboard = ({score, bestScore}) => {
  return (
    <>
      <div className="scoreboard">
        <h1>Pokemon Memory Card</h1>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore} </p>
      </div>
    </>
  );
};

export default Scoreboard;
