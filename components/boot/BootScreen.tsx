"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { ACHIEVEMENTS } from "@/data/achievements";

const BOOT_LINES = [
  { text: "PushanOS v3.0 — Developer Environment", delay: 0, color: "#f3de8a" },
  { text: "─────────────────────────────────────", delay: 100, color: "#444" },
  { text: "[OK] Initializing developer kernel...", delay: 400, color: "#4ec9b0" },
  { text: "[OK] Loading caffeine modules...", delay: 700, color: "#4ec9b0" },
  { text: "[OK] Mounting creative filesystem...", delay: 1000, color: "#4ec9b0" },
  { text: "[OK] Compiling creativity engine...", delay: 1400, color: "#4ec9b0" },
  { text: "[OK] Connecting to GitHub...", delay: 1800, color: "#4ec9b0" },
  { text: "[OK] Loading project database...", delay: 2100, color: "#4ec9b0" },
  { text: "[OK] Resolving dependencies (0 bugs found)...", delay: 2500, color: "#4ec9b0" },
  { text: "[WARN] Imposter syndrome detected — ignoring.", delay: 2900, color: "#f3de8a" },
  { text: "[OK] Optimizing portfolio render pipeline...", delay: 3300, color: "#4ec9b0" },
  { text: "[OK] All systems operational.", delay: 3700, color: "#4ec9b0" },
  { text: "", delay: 4000, color: "#fff" },
  { text: "Welcome, recruiter. Launching PushanOS...", delay: 4200, color: "#fff" },
];

const ASCII_LOGO = `
    ____            __                 ____  _____
   / __ \\__  ______/ /_  ____ _____  / __ \\/ ___/
  / /_/ / / / / __/ __ \\/ __ \`/ __ \\/ / / /\\__ \\
 / ____/ /_/ (__  ) / / / /_/ / / / / /_/ /___/ /
/_/    \\__,_/____/_/ /_/\\__,_/_/ /_/\\____//____/
                                         v3.0
`;

export default function BootScreen() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showLogo, setShowLogo] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isBootComplete, setBootComplete, unlockAchievement } =
    usePortfolioStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const completeBoot = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setBootComplete(true);
      const firstVisit = ACHIEVEMENTS.find((a) => a.id === "first-visit");
      if (firstVisit) unlockAchievement(firstVisit);
    }, 800);
  }, [setBootComplete, unlockAchievement]);

  useEffect(() => {
    if (isBootComplete) return;

    // Show ASCII logo first
    const logoTimer = setTimeout(() => setShowLogo(true), 200);

    // Then show boot lines
    const timers = BOOT_LINES.map((line, index) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay + 1000) // +1000 for logo display time
    );

    // Auto-complete boot
    const completeTimer = setTimeout(() => {
      completeBoot();
    }, BOOT_LINES[BOOT_LINES.length - 1].delay + 2200);

    return () => {
      clearTimeout(logoTimer);
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [isBootComplete, completeBoot]);

  // Handle skip
  useEffect(() => {
    if (isBootComplete) return;

    const handleSkip = (e: KeyboardEvent | MouseEvent) => {
      if (e instanceof KeyboardEvent && e.key === "Escape") return;
      completeBoot();
    };

    // Allow skip after 1 second
    const skipTimer = setTimeout(() => {
      window.addEventListener("keydown", handleSkip);
      window.addEventListener("click", handleSkip);
    }, 1000);

    return () => {
      clearTimeout(skipTimer);
      window.removeEventListener("keydown", handleSkip);
      window.removeEventListener("click", handleSkip);
    };
  }, [isBootComplete, completeBoot]);

  if (!mounted) return null;
  if (isBootComplete) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* CRT scanline overlay */}
          <div className="boot-scanlines" />

          {/* CRT flicker */}
          <div className="boot-flicker" />

          <div className="boot-content">
            {/* ASCII Logo */}
            <AnimatePresence>
              {showLogo && (
                <motion.pre
                  className="boot-logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {ASCII_LOGO}
                </motion.pre>
              )}
            </AnimatePresence>

            {/* Boot lines */}
            <div className="boot-lines">
              {BOOT_LINES.map((line, index) => (
                <AnimatePresence key={index}>
                  {visibleLines.includes(index) && (
                    <motion.div
                      className="boot-line"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      style={{ color: line.color }}
                    >
                      {line.text}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* Blinking cursor */}
            <motion.span
              className="boot-cursor"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              █
            </motion.span>

            {/* Skip hint */}
            <motion.div
              className="boot-skip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Press any key or click to skip
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
