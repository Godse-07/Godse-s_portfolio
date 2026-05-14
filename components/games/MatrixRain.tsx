"use client";

import React, { useEffect, useRef } from 'react';
import { usePortfolioStore } from '@/stores/usePortfolioStore';
import { ACHIEVEMENTS } from '@/data/achievements';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { unlockAchievement } = usePortfolioStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const startTime = Date.now();

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Green text
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Brighter head of the rain
        if (Math.random() > 0.98) {
          ctx.fillStyle = "#FFF";
        } else {
          ctx.fillStyle = "#0F0";
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Check achievement: watch for 1 minute
      if (Date.now() - startTime >= 60000) {
        const ach = ACHIEVEMENTS.find(a => a.id === 'matrix-master');
        if (ach) unlockAchievement(ach);
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [unlockAchievement]);

  return (
    <div className="retro-game-container" style={{ background: '#000' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 10, textAlign: 'center' }}>
        <p className="pixel-text glow-text" style={{ fontSize: '1.5rem', letterSpacing: '4px' }}>WAKE UP, NEO...</p>
        <p className="pixel-text" style={{ fontSize: '0.7rem', color: '#666', marginTop: '1rem' }}>RECRUITER MODE ACTIVE</p>
      </div>

      <div className="crt-overlay" style={{ opacity: 0.3 }} />
      <div className="scanlines" style={{ opacity: 0.2 }} />
    </div>
  );
}
