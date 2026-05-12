"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

export default function AchievementToast() {
  const { achievementToastQueue, dismissAchievementToast } =
    usePortfolioStore();

  const current = achievementToastQueue[0];

  useEffect(() => {
    if (!current) return;
    const timer = setTimeout(dismissAchievementToast, 4500);
    return () => clearTimeout(timer);
  }, [current, dismissAchievementToast]);

  return (
    <div className="achievement-toast-container">
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            className="achievement-toast"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={dismissAchievementToast}
          >
            <div className="achievement-toast-glow" />
            <div className="achievement-toast-icon">{current.icon}</div>
            <div className="achievement-toast-content">
              <div className="achievement-toast-title">
                🏆 Achievement Unlocked!
              </div>
              <div className="achievement-toast-name">{current.name}</div>
              <div className="achievement-toast-desc">
                {current.description}
              </div>
            </div>
            <motion.div
              className="achievement-toast-progress"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4.5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
