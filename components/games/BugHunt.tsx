"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '@/stores/usePortfolioStore';
import { ACHIEVEMENTS } from '@/data/achievements';

interface Bug {
  id: number;
  x: number;
  y: number;
  type: 'crawler' | 'flyer' | 'glitch';
  speed: number;
}

export default function BugHunt() {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [warnings, setWarnings] = useState<string[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { addScore, unlockAchievement } = usePortfolioStore();

  const spawnBug = useCallback(() => {
    if (gameOver) return;
    const id = Date.now();
    const type: Bug['type'] = Math.random() > 0.8 ? 'glitch' : Math.random() > 0.5 ? 'flyer' : 'crawler';
    const newBug: Bug = {
      id,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      type,
      speed: Math.random() * 2 + 1
    };
    setBugs(prev => [...prev, newBug]);

    // Memory leak warning chance
    if (Math.random() > 0.7) {
      const msg = `[WARN] Memory leak detected at 0x${Math.floor(Math.random()*0xFFFFFF).toString(16)}`;
      setWarnings(prev => [...prev.slice(-3), msg]);
    }
  }, [gameOver]);

  useEffect(() => {
    const interval = setInterval(spawnBug, 800);
    return () => clearInterval(interval);
  }, [spawnBug]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      addScore('bughunt', score);
      if (score >= 50) {
        const ach = ACHIEVEMENTS.find(a => a.id === 'bug-slayer');
        if (ach) unlockAchievement(ach);
      }
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameOver, score, addScore, unlockAchievement]);

  const squashBug = (id: number, type: Bug['type']) => {
    setBugs(prev => prev.filter(b => b.id !== id));
    const points = type === 'glitch' ? 5 : type === 'flyer' ? 2 : 1;
    setScore(prev => prev + points * (Math.floor(combo / 5) + 1));
    setCombo(prev => prev + 1);
  };

  const resetGame = () => {
    setBugs([]);
    setScore(0);
    setCombo(0);
    setTimeLeft(30);
    setGameOver(false);
    setWarnings([]);
  };

  return (
    <div className="retro-game-container" ref={containerRef} style={{ cursor: 'crosshair' }}>
      <div className="crt-overlay" />
      <div className="scanlines" />

      <div className="game-ui" style={{ position: 'absolute', top: 20, width: '100%', display: 'flex', justifyContent: 'space-around', zIndex: 15 }}>
        <div className="pixel-text glow-text">SCORE: {score}</div>
        <div className="pixel-text glow-text" style={{ color: timeLeft < 10 ? '#f00' : '#0f0' }}>TIME: {timeLeft}s</div>
        <div className="pixel-text glow-text" style={{ color: '#00f' }}>COMBO: x{combo}</div>
      </div>

      <div className="system-warnings" style={{ position: 'absolute', left: 20, bottom: 20, pointerEvents: 'none' }}>
        {warnings.map((w, i) => (
          <div key={i} className="pixel-text" style={{ color: '#f3de8a', fontSize: '10px', opacity: 0.7 }}>{w}</div>
        ))}
      </div>

      <AnimatePresence>
        {bugs.map(bug => (
          <motion.div
            key={bug.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            className="bug"
            style={{
              position: 'absolute',
              left: `${bug.x}%`,
              top: `${bug.y}%`,
              fontSize: bug.type === 'glitch' ? '2rem' : '1.5rem',
              userSelect: 'none'
            }}
            onMouseDown={() => squashBug(bug.id, bug.type)}
          >
            {bug.type === 'glitch' ? '👾' : bug.type === 'flyer' ? '🪰' : '🪳'}
          </motion.div>
        ))}
      </AnimatePresence>

      {gameOver && (
        <div className="game-over-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          zIndex: 100
        }}>
          <h1 className="glow-text pixel-text glitch-transition" style={{ color: '#f00', fontSize: '3.5rem' }}>DEBUG COMPLETE</h1>
          <p className="pixel-text" style={{ margin: '1rem 0' }}>BUGS SQUASHED: {score}</p>
          <button 
            onClick={resetGame}
            className="status-bar-btn neon-border"
            style={{ padding: '15px 30px', fontSize: '1.2rem', marginTop: '1rem', color: '#0f0' }}
          >
            RUN CLEANUP AGAIN
          </button>
        </div>
      )}
    </div>
  );
}
