"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePortfolioStore } from '@/stores/usePortfolioStore';
import { ACHIEVEMENTS } from '@/data/achievements';

const PADDLE_HEIGHT = 80;
const PADDLE_WIDTH = 10;
const BALL_SIZE = 10;
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

export default function Pong() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerYRef = useRef(CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const aiYRef = useRef(CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const ballRef = useRef({ x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: 4, dy: 4 });
  const scoresRef = useRef({ player: 0, ai: 0 });
  const gameOverRef = useRef(false);
  const animFrameRef = useRef<number>(0);

  // Display state (only for re-rendering UI)
  const [displayScores, setDisplayScores] = useState({ player: 0, ai: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);

  const { addScore, unlockAchievement } = usePortfolioStore();

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      playerYRef.current = Math.max(0, Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, mouseY - PADDLE_HEIGHT / 2));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const endGame = useCallback((won: boolean) => {
    gameOverRef.current = true;
    setGameOver(true);
    setPlayerWon(won);
    const finalScore = scoresRef.current.player;
    addScore('pong', finalScore);
    if (won) {
      const ach = ACHIEVEMENTS.find(a => a.id === 'pong-king');
      if (ach) unlockAchievement(ach);
    }
  }, [addScore, unlockAchievement]);

  // Game loop using requestAnimationFrame
  useEffect(() => {
    if (gameOverRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = 0;
    const TICK = 16; // ~60fps

    const loop = (timestamp: number) => {
      if (gameOverRef.current) return;

      if (timestamp - lastTime >= TICK) {
        lastTime = timestamp;

        const ball = ballRef.current;
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Wall collision (top/bottom)
        if (ball.y <= 0 || ball.y >= CANVAS_HEIGHT - BALL_SIZE) {
          ball.dy = -ball.dy;
        }

        // Player paddle collision (left)
        if (
          ball.x <= PADDLE_WIDTH &&
          ball.y + BALL_SIZE >= playerYRef.current &&
          ball.y <= playerYRef.current + PADDLE_HEIGHT
        ) {
          ball.dx = Math.abs(ball.dx) * 1.03;
        }

        // AI paddle collision (right)
        if (
          ball.x >= CANVAS_WIDTH - PADDLE_WIDTH - BALL_SIZE &&
          ball.y + BALL_SIZE >= aiYRef.current &&
          ball.y <= aiYRef.current + PADDLE_HEIGHT
        ) {
          ball.dx = -Math.abs(ball.dx) * 1.03;
        }

        // Player missed (ball went past left edge)
        if (ball.x <= 0) {
          scoresRef.current.ai += 1;
          setDisplayScores({ ...scoresRef.current });
          if (scoresRef.current.ai >= 5) {
            endGame(false);
            return;
          }
          ball.x = CANVAS_WIDTH / 2;
          ball.y = CANVAS_HEIGHT / 2;
          ball.dx = 4;
          ball.dy = 4;
        }

        // AI missed (ball went past right edge)
        if (ball.x >= CANVAS_WIDTH) {
          scoresRef.current.player += 1;
          setDisplayScores({ ...scoresRef.current });
          if (scoresRef.current.player >= 5) {
            endGame(true);
            return;
          }
          ball.x = CANVAS_WIDTH / 2;
          ball.y = CANVAS_HEIGHT / 2;
          ball.dx = -4;
          ball.dy = 4;
        }

        // AI movement
        const aiCenter = aiYRef.current + PADDLE_HEIGHT / 2;
        if (aiCenter < ball.y) {
          aiYRef.current = Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, aiYRef.current + 3);
        } else if (aiCenter > ball.y) {
          aiYRef.current = Math.max(0, aiYRef.current - 3);
        }

        // --- Draw ---
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Center line
        ctx.setLineDash([10, 10]);
        ctx.strokeStyle = '#666';
        ctx.beginPath();
        ctx.moveTo(CANVAS_WIDTH / 2, 0);
        ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
        ctx.stroke();
        ctx.setLineDash([]);

        // Paddles
        ctx.fillStyle = '#0f0';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#0f0';
        ctx.fillRect(0, playerYRef.current, PADDLE_WIDTH, PADDLE_HEIGHT);
        ctx.fillRect(CANVAS_WIDTH - PADDLE_WIDTH, aiYRef.current, PADDLE_WIDTH, PADDLE_HEIGHT);

        // Ball
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.fillRect(ball.x, ball.y, BALL_SIZE, BALL_SIZE);
        ctx.shadowBlur = 0;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [endGame]);

  const resetGame = () => {
    scoresRef.current = { player: 0, ai: 0 };
    setDisplayScores({ player: 0, ai: 0 });
    gameOverRef.current = false;
    setGameOver(false);
    setPlayerWon(false);
    ballRef.current = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: 4, dy: 4 };
    playerYRef.current = CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2;
    aiYRef.current = CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2;
  };

  return (
    <div className="retro-game-container">
      <div className="crt-overlay" />
      <div className="scanlines" />

      <div className="pong-scores pixel-text glow-text" style={{ fontSize: '2rem', display: 'flex', gap: '4rem', marginBottom: '1rem' }}>
        <span>{displayScores.player}</span>
        <span>{displayScores.ai}</span>
      </div>

      <canvas 
        ref={canvasRef} 
        width={CANVAS_WIDTH} 
        height={CANVAS_HEIGHT} 
        className="neon-border"
        style={{ cursor: 'none' }}
      />

      {gameOver && (
        <div className="game-over-overlay" style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 50
        }}>
          <h1 className="pixel-text glow-text" style={{ color: playerWon ? '#0f0' : '#f00' }}>
            {playerWon ? 'VICTORY' : 'DEFEAT'}
          </h1>
          <button onClick={resetGame} className="status-bar-btn" style={{ border: '1px solid #0f0', color: '#0f0', padding: '10px 20px', marginTop: '1rem' }}>
            PLAY AGAIN
          </button>
        </div>
      )}

      <div className="pixel-text" style={{ marginTop: '1.5rem', color: '#666', fontSize: '0.8rem' }}>
        USE MOUSE TO MOVE PADDLE
      </div>
    </div>
  );
}
