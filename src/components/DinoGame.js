// src/components/DinoGame.js
import React, { useState, useEffect } from 'react';
import Dino from './Dino';
import Obstacle from './Obstacle';
import './DinoGame.css';

const DinoGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Game logic here...

  return (
    <div className="game-container">
      <Dino isJumping={isJumping} />
      {obstacles.map((obstacle, index) => (
        <Obstacle key={index} left={obstacle.left} height={obstacle.height} />
      ))}
      {gameOver && <div className="game-over">Game Over! Score: {score}</div>}
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default DinoGame;