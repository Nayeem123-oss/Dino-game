// src/components/Obstacle.js
import React from 'react';
import './Obstacle.css';

const Obstacle = ({ left, height }) => {
  return <div className="obstacle" style={{ left, height }} />;
};

export default Obstacle;