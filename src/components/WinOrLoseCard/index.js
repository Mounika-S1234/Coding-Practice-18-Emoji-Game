// Write your code here.
import React from 'react';
import './index.css';

const WinOrLoseCard = ({ isWon, score, onClickPlayAgain }) => {
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png';
  const gameStatus = isWon ? 'You Won' : 'You Lose';
  const gameStatusClassName = isWon ? 'win-status' : 'lose-status';

  return (
    <div className="win-or-lose-card">
      <div className="status-container">
        <h1 className={`game-status ${gameStatusClassName}`}>{gameStatus}</h1>
        {isWon && <p className="best-score">Best Score</p>}
        {isWon && <p className="total-score">12/12</p>}
        {!isWon && <p className="current-score">Score: {score}</p>}
        <button className="play-again-button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
    </div>
  );
};

export default WinOrLoseCard;

