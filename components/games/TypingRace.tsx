"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { usePortfolioStore } from '@/stores/usePortfolioStore';
import { ACHIEVEMENTS } from '@/data/achievements';

const HACKER_TEXTS = [
  "sudo apt-get install creativity --force-yes",
  "curl -X POST https://api.pushan.dev/hire",
  "rm -rf /sys/imposter_syndrome",
  "git commit -m 'feat: added scalability'",
  "docker run -d pushan/portfolio:latest",
  "ssh-keygen -t rsa -b 4096",
  "npm install pushan@latest --save",
  "ping -c 4 recruiter.world.com",
  "chmod +x deploy_portfolio.sh",
  "tar -xzf talent.tar.gz",
];

export default function TypingRace() {
  const [targetText, setTargetText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [totalChars, setTotalChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const { addScore, unlockAchievement } = usePortfolioStore();

  // Pick a random text on mount
  useEffect(() => {
    setTargetText(HACKER_TEXTS[Math.floor(Math.random() * HACKER_TEXTS.length)]);
    // Delay focus so it doesn't conflict with GameContainer mounting
    const timer = setTimeout(() => inputRef.current?.focus(), 200);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!startTime || gameOver) return;
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, gameOver]);

  // Compute live WPM
  useEffect(() => {
    if (!startTime || gameOver) return;
    const elapsed = (Date.now() - startTime) / 1000 / 60; // minutes
    if (elapsed > 0) {
      setWpm(Math.round((correctChars / 5) / elapsed));
    }
  }, [userInput, startTime, gameOver, correctChars]);

  // Render highlighted target text
  const renderedTarget = useMemo(() => {
    return targetText.split('').map((char, i) => {
      let color = '#555'; // not yet typed
      if (i < userInput.length) {
        color = userInput[i] === char ? '#0f0' : '#f00'; // correct vs wrong
      }
      return (
        <span key={i} style={{ color, borderBottom: i === userInput.length ? '2px solid #0f0' : 'none' }}>
          {char}
        </span>
      );
    });
  }, [targetText, userInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameOver) return;
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());
    
    setUserInput(val);
    setTotalChars(val.length);

    // Count correct characters
    let correct = 0;
    for (let i = 0; i < val.length && i < targetText.length; i++) {
      if (val[i] === targetText[i]) correct++;
    }
    setCorrectChars(correct);
    setAccuracy(val.length > 0 ? Math.round((correct / val.length) * 100) : 100);

    // Completed!
    if (val === targetText) {
      const timeTaken = (Date.now() - (startTime || Date.now())) / 1000;
      const finalWpm = Math.round((targetText.length / 5) / (timeTaken / 60));
      setWpm(finalWpm);
      setGameOver(true);
      addScore('typing', finalWpm);
      
      if (finalWpm > 80) {
        const ach = ACHIEVEMENTS.find(a => a.id === 'speed-typer');
        if (ach) unlockAchievement(ach);
      }
    }
  };

  // Prevent ESC from stealing focus or interfering
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const resetGame = () => {
    setTargetText(HACKER_TEXTS[Math.floor(Math.random() * HACKER_TEXTS.length)]);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setGameOver(false);
    setCountdown(60);
    setTotalChars(0);
    setCorrectChars(0);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const completed = userInput === targetText && gameOver;

  return (
    <div className="retro-game-container">
      <div className="crt-overlay" />
      <div className="scanlines" />

      <div className="neon-border" style={{
        width: '85%',
        maxWidth: '700px',
        padding: '2rem',
        background: 'rgba(0, 20, 0, 0.9)',
        position: 'relative',
        display: 'flex', flexDirection: 'column', gap: '1.5rem'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1a3a1a', paddingBottom: '0.75rem' }}>
          <span className="pixel-text" style={{ color: '#0f0', fontSize: '0.9rem' }}>SYSTEM_BREACH v2.0</span>
          <span className="pixel-text" style={{ color: countdown < 10 ? '#f00' : '#0f0', fontSize: '0.9rem' }}>
            [{countdown}s]
          </span>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.75rem' }}>
          <span className="pixel-text" style={{ color: '#0f0' }}>WPM: {wpm}</span>
          <span className="pixel-text" style={{ color: accuracy < 80 ? '#f00' : '#0f0' }}>ACC: {accuracy}%</span>
          <span className="pixel-text" style={{ color: '#666' }}>CHARS: {totalChars}/{targetText.length}</span>
        </div>

        {/* Target text with live highlighting */}
        <div style={{
          fontSize: '1.3rem',
          minHeight: '3em',
          fontFamily: "'Courier New', monospace",
          lineHeight: '1.8',
          letterSpacing: '0.5px',
          padding: '1rem',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '4px',
          border: '1px solid #1a3a1a'
        }}>
          {renderedTarget}
        </div>

        {/* Input */}
        <div style={{ position: 'relative' }}>
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={gameOver}
            autoComplete="off"
            spellCheck={false}
            style={{
              width: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid #0f0',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '1.2rem',
              fontFamily: "'Courier New', monospace",
              outline: 'none',
              padding: '12px',
              boxShadow: '0 0 5px rgba(0,255,0,0.2)',
            }}
            placeholder="Start typing to breach..."
          />
        </div>

        {/* Progress bar */}
        <div style={{ width: '100%', height: '4px', background: '#111', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{
            width: `${targetText.length > 0 ? (userInput.length / targetText.length) * 100 : 0}%`,
            height: '100%',
            background: accuracy < 80 ? '#f00' : '#0f0',
            transition: 'width 0.1s ease',
            boxShadow: `0 0 8px ${accuracy < 80 ? '#f00' : '#0f0'}`,
          }} />
        </div>

        {startTime && !gameOver && (
          <div className="pixel-text" style={{ color: '#0f0', fontSize: '0.7rem', textAlign: 'center', opacity: 0.6 }}>
            ▓▓▓ BYPASSING ENCRYPTION LAYER... ▓▓▓
          </div>
        )}

        {/* Game Over Overlay */}
        {gameOver && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            zIndex: 30,
            borderRadius: 'inherit'
          }}>
            <h2 className="glow-text pixel-text glitch-transition" style={{ color: completed ? '#0f0' : '#f00', fontSize: '2rem' }}>
              {completed ? 'BREACH SUCCESSFUL' : 'CONNECTION LOST'}
            </h2>
            <div style={{ display: 'flex', gap: '2rem', margin: '1.5rem 0' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="pixel-text" style={{ color: '#666', fontSize: '0.7rem' }}>SPEED</div>
                <div className="pixel-text glow-text" style={{ color: '#0f0', fontSize: '1.5rem' }}>{wpm} WPM</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="pixel-text" style={{ color: '#666', fontSize: '0.7rem' }}>ACCURACY</div>
                <div className="pixel-text" style={{ color: accuracy >= 90 ? '#0f0' : accuracy >= 70 ? '#ff0' : '#f00', fontSize: '1.5rem' }}>{accuracy}%</div>
              </div>
            </div>
            <button 
              onClick={resetGame}
              style={{
                border: '1px solid #0f0',
                color: '#0f0',
                padding: '12px 24px',
                background: 'rgba(0, 255, 0, 0.05)',
                cursor: 'pointer',
                fontFamily: "'Courier New', monospace",
                fontSize: '0.9rem',
                borderRadius: '4px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 255, 0, 0.15)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0,255,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 255, 0, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              HACK ANOTHER TARGET
            </button>
          </div>
        )}
      </div>

      <div style={{ position: 'absolute', bottom: 30, width: '85%', maxWidth: '700px', display: 'flex', justifyContent: 'space-between', opacity: 0.4 }}>
        <div className="pixel-text" style={{ color: '#0f0', fontSize: '10px' }}>TARGET: 192.168.1.42:8080</div>
        <div className="pixel-text" style={{ color: '#0f0', fontSize: '10px' }}>ENCRYPTION: AES-256</div>
        <div className="pixel-text" style={{ color: '#f00', fontSize: '10px' }}>FIREWALL: DISABLED</div>
      </div>
    </div>
  );
}
