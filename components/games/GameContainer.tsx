"use client";

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '@/stores/usePortfolioStore';
import Snake from './Snake';
import BugHunt from './BugHunt';
import MatrixRain from './MatrixRain';
import TypingRace from './TypingRace';
import Pong from './Pong';

export default function GameContainer() {
  const { currentGame, setCurrentGame, leaderboard } = usePortfolioStore();

  const handleExit = useCallback(() => {
    setCurrentGame(null);
  }, [setCurrentGame]);

  // ESC key to exit game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleExit();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleExit]);

  if (!currentGame) return null;

  const renderGame = () => {
    switch (currentGame) {
      case 'snake': return <Snake />;
      case 'bughunt': return <BugHunt />;
      case 'matrix': return <MatrixRain />;
      case 'typing': return <TypingRace />;
      case 'pong': return <Pong />;
      default: return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="absolute inset-0 z-50 flex flex-col bg-black overflow-hidden"
    >
      {/* Game Header / Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 z-50">
        <div className="flex items-center gap-4">
          {/* Back Button */}
          <button
            onClick={handleExit}
            className="flex items-center gap-2 px-3 py-1 rounded border transition-all"
            style={{
              borderColor: '#0f0',
              color: '#0f0',
              background: 'rgba(0, 255, 0, 0.05)',
              fontFamily: "'Courier New', monospace",
              fontSize: '12px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 0, 0.15)';
              e.currentTarget.style.boxShadow = '0 0 8px rgba(0,255,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 0, 0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ← BACK
          </button>
          <span className="pixel-text text-green-500 text-sm uppercase glow-text">
            {currentGame}OS v1.0
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span style={{ color: '#555', fontFamily: "'Courier New', monospace", fontSize: '10px' }}>
            [ESC] to exit
          </span>
          <button 
            onClick={handleExit}
            className="flex items-center gap-1 px-3 py-1 rounded border transition-all"
            style={{
              borderColor: '#f44',
              color: '#f44',
              background: 'rgba(255, 68, 68, 0.05)',
              fontFamily: "'Courier New', monospace",
              fontSize: '12px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 68, 68, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 8px rgba(255,68,68,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 68, 68, 0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ✕ EXIT
          </button>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGame}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            {renderGame()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Leaderboard Overlay (Mini) */}
      <div className="absolute bottom-4 right-4 z-50 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <div className="bg-black/80 border border-green-900 p-2 rounded text-[10px] min-w-[120px]">
          <div className="text-green-500 font-bold mb-1 border-b border-green-900/50">TOP_SCORES</div>
          {leaderboard
            .filter(s => s.game === currentGame)
            .slice(0, 5)
            .map((s, i) => (
              <div key={i} className="flex justify-between gap-4 text-green-700">
                <span>{new Date(s.date).toLocaleDateString()}</span>
                <span className="text-green-400 font-mono">{s.score}</span>
              </div>
            ))}
          {leaderboard.filter(s => s.game === currentGame).length === 0 && (
            <div className="text-zinc-600 italic">No data yet</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
