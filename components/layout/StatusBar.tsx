"use client";

import React from "react";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { usePathname } from "next/navigation";
import { GitBranch, Bell } from "lucide-react";
import { motion } from "framer-motion";

const ROUTE_FILE_MAP: Record<string, { file: string; lang: string }> = {
  "/": { file: "Welcome.tsx", lang: "TypeScript React" },
  "/home": { file: "Home.tsx", lang: "TypeScript React" },
  "/skills": { file: "Skills.tsx", lang: "TypeScript React" },
  "/projects": { file: "Projects.tsx", lang: "TypeScript React" },
  "/contact": { file: "Contact.tsx", lang: "TypeScript React" },
  "/blogs": { file: "Blogs.tsx", lang: "TypeScript React" },
  "/github": { file: "Github.tsx", lang: "TypeScript React" },
  "/experience": { file: "Experience.tsx", lang: "TypeScript React" },
};

export default function StatusBar() {
  const pathname = usePathname();
  const {
    isRecruiterMode,
    toggleRecruiterMode,
    unlockedAchievements,
    isTerminalOpen,
    toggleTerminal,
  } = usePortfolioStore();

  const currentFile = ROUTE_FILE_MAP[pathname] || {
    file: "Unknown.tsx",
    lang: "TypeScript React",
  };

  return (
    <motion.div
      className="status-bar"
      initial={{ y: 24 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
    >
      {/* Left section */}
      <div className="status-bar-left">
        <div className="status-bar-item status-bar-branch">
          <GitBranch size={12} />
          <span>main</span>
        </div>

        <div className="status-bar-item">
          <span className="status-dot status-dot--success" />
          <span>0 errors</span>
        </div>

        <div className="status-bar-item">
          <span className="status-dot status-dot--warning" />
          <span>0 warnings</span>
        </div>
      </div>

      {/* Center section */}
      <div className="status-bar-center">
        <span className="status-bar-item">{currentFile.file}</span>
      </div>

      {/* Right section */}
      <div className="status-bar-right">
        <button
          className="status-bar-item status-bar-btn"
          onClick={toggleTerminal}
          title="Toggle Terminal (Ctrl+`)"
        >
          {isTerminalOpen ? "✕ Terminal" : "⌨ Terminal"}
        </button>

        <div className="status-bar-item">
          <span>Ln 1, Col 1</span>
        </div>

        <div className="status-bar-item">
          <span>UTF-8</span>
        </div>

        <div className="status-bar-item">
          <span>{currentFile.lang}</span>
        </div>

        <button
          className="status-bar-item status-bar-btn"
          onClick={() => {
            /* placeholder for achievement panel */
          }}
          title="Achievements"
        >
          <Bell size={12} />
          <span>{unlockedAchievements.length}</span>
        </button>

        <button
          className={`status-bar-item status-bar-btn ${isRecruiterMode ? "status-bar-recruiter-active" : ""}`}
          onClick={toggleRecruiterMode}
          title="Toggle Recruiter Mode"
        >
          {isRecruiterMode ? "👔 Recruiter" : "🎮 Developer"}
        </button>
      </div>
    </motion.div>
  );
}
