"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePortfolioStore } from '@/stores/usePortfolioStore';
import { ACHIEVEMENTS } from '@/data/achievements';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
const INITIAL_DIRECTION = { x: 0, y: -1 };

export default function Snake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(150);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { addScore, unlockAchievement } = usePortfolioStore();

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setGameOver(false);
    setSpeed(150);
    generateFood();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

      // Wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        addScore('snake', score);
        if (score >= 500) {
          const ach = ACHIEVEMENTS.find(a => a.id === 'snake-pro');
          if (ach) unlockAchievement(ach);
        }
        return;
      }

      // Self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        addScore('snake', score);
        return;
      }

      newSnake.unshift(head);

      // Food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setSpeed(prev => Math.max(prev - 2, 50));
        generateFood();
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [snake, direction, food, gameOver, score, speed, addScore, unlockAchievement, generateFood]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    ctx.fillStyle = '#0f0';
    snake.forEach((segment, index) => {
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#0f0';
      ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
    });

    // Draw food
    ctx.fillStyle = '#f00';
    ctx.shadowColor = '#f00';
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
    
    ctx.shadowBlur = 0;
  }, [snake, food]);

  return (
    <div className="retro-game-container">
      <div className="crt-overlay" />
      <div className="scanlines" />
      
      <div className="game-header" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <h2 className="glow-text pixel-text">RETRO SNAKE</h2>
        <div className="score">SCORE: {score}</div>
      </div>

      <canvas 
        ref={canvasRef} 
        width={400} 
        height={400} 
        className="neon-border"
        style={{ background: '#000' }}
      />

      {gameOver && (
        <div className="game-over-overlay" style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          zIndex: 20
        }}>
          <h1 className="glow-text pixel-text" style={{ color: '#f00', fontSize: '3rem' }}>GAME OVER</h1>
          <button 
            onClick={resetGame}
            className="status-bar-btn"
            style={{ padding: '10px 20px', fontSize: '1.2rem', marginTop: '1rem', border: '1px solid #0f0' }}
          >
            RESTART
          </button>
        </div>
      )}

      <div className="controls-hint" style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
        USE ARROW KEYS TO MOVE
      </div>
    </div>
  );
}
