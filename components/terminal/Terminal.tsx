"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { ACHIEVEMENTS } from "@/data/achievements";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "error" | "system" | "ascii";
  content: string;
}

const BOX_WIDTH = 38;

const boxLine = (content: string = "") => {
  return `║ ${content.padEnd(BOX_WIDTH)} ║`;
};

const boxTop = (width = BOX_WIDTH) => `╔${"═".repeat(width + 2)}╗`;
const boxSep = (width = BOX_WIDTH) => `╠${"═".repeat(width + 2)}╣`;
const boxBot = (width = BOX_WIDTH) => `╚${"═".repeat(width + 2)}╝`;

const COMMANDS: Record<
  string,
  {
    description: string;
    execute: (args: string[]) => string | string[];
  }
> = {
  help: {
    description: "Show available commands",
    execute: () => [
      boxTop(),
      boxLine("      PushanOS Terminal v3.0      "),
      boxBot(),
      "",
      "  NAVIGATION",
      "    about        — Who is Pushan?",
      "    skills       — View tech stack",
      "    projects     — List projects",
      "    blogs        — List blog articles",
      "    contact      — Show contact info",
      "",
      "  LINKS",
      "    github       — Open GitHub profile",
      "    linkedin     — Open LinkedIn profile",
      "    resume       — Download resume",
      "",
      "  SYSTEM",
      "    clear        — Clear terminal",
      "    whoami       — Current user info",
      "    date         — Show current date",
      "    uptime       — System uptime",
      "    neofetch     — System information",
      "    theme <name> — Change theme (default/cyberpunk/hacker)",
      "",
      "  FUN / EASTER EGGS",
      "    sudo hire-pushan  — Try it ;)",
      "    npm install pushan — Install creativity",
      "    rm -rf bugs       — Remove all bugs",
      "    matrix            — Enter the Matrix",
      "    easteregg         — ???",
      "    cowsay <msg>      — Moo!",
      "",
    ],
  },
  about: {
    description: "Display developer bio",
    execute: () => [
      "",
      boxTop(),
      boxLine("  Pushan Mukhopadhyay"),
      boxLine("  Full Stack Web Developer"),
      boxSep(),
      boxLine("  I build elegant, responsive web apps"),
      boxLine("  with modern technologies. Focused on"),
      boxLine("  clean code & intuitive UX."),
      boxLine(),
      boxLine("  🎓 Computer Science Student"),
      boxLine("  📍 India"),
      boxLine("  ☕ Powered by caffeine"),
      boxBot(),
      "",
    ],
  },
  skills: {
    description: "List tech stack",
    execute: () => [
      "",
      "  ⚡ CODING      → Java, C",
      "  🎨 FRONTEND    → JS, TS, React, Next.js, Tailwind, Flutter",
      "  🔧 BACKEND     → Node.js, Express, PHP, Solidity",
      "  🗄️  DATABASE    → MongoDB, MySQL, Firebase, Redis, Sanity",
      "  🧪 TESTING     → Jest",
      "  🛠️  TOOLS       → Git, GitHub, VS Code, Postman, Vercel",
      "",
    ],
  },
  projects: {
    description: "List projects",
    execute: () => [
      "",
      "  📦 PROJECTS",
      "  ──────────────────────────────────",
      "  1. IPL Auction Simulator — Real-time auction platform",
      "  2. Portfolio OS — This VS Code-themed portfolio",
      "  3. More on GitHub → github.com/Godse-07",
      "",
      "  Run 'github' to view all repositories.",
      "",
    ],
  },
  blogs: {
    description: "List blog articles",
    execute: () => [
      "",
      "  📝 BLOGS",
      "  ──────────────────────────────────",
      "  Check out my latest articles and thoughts",
      "  on web development and technology.",
      "",
      "  Navigate to the Blogs section to read more.",
      "",
    ],
  },
  contact: {
    description: "Show contact information",
    execute: () => [
      "",
      "  📬 CONTACT",
      "  ──────────────────────────────────",
      "  📧 Email    → reach out via contact page",
      "  🐙 GitHub   → github.com/Godse-07",
      "  💼 LinkedIn → Check 'linkedin' command",
      "",
    ],
  },
  github: {
    description: "Open GitHub profile",
    execute: () => {
      if (typeof window !== "undefined") {
        window.open("https://github.com/Godse-07", "_blank");
      }
      return "Opening GitHub profile...";
    },
  },
  linkedin: {
    description: "Open LinkedIn profile",
    execute: () => {
      if (typeof window !== "undefined") {
        window.open("https://linkedin.com", "_blank");
      }
      return "Opening LinkedIn profile...";
    },
  },
  resume: {
    description: "Download resume",
    execute: () => {
      if (typeof window !== "undefined") {
        const link = document.createElement("a");
        link.href = "/Pushan_Mukhopadhyay.pdf";
        link.download = "Pushan_Mukhopadhyay.pdf";
        link.click();
      }
      return "📄 Downloading resume...";
    },
  },
  clear: {
    description: "Clear terminal",
    execute: () => "__CLEAR__",
  },
  whoami: {
    description: "Current user info",
    execute: () => "pushan@portfolio — Full Stack Developer | Open to opportunities",
  },
  date: {
    description: "Show current date",
    execute: () => new Date().toString(),
  },
  uptime: {
    description: "System uptime",
    execute: () => {
      const hours = Math.floor(Math.random() * 500) + 100;
      return `PushanOS has been running for ${hours} hours with 0 crashes ✅`;
    },
  },
  neofetch: {
    description: "System information",
    execute: () => [
      "",
      "  pushan@portfolio",
      "  ─────────────────",
      "  OS:       PushanOS v3.0",
      "  Host:     Browser/Next.js 15",
      "  Kernel:   React 19 + TypeScript",
      "  Shell:    PushanTerminal v1.0",
      "  Theme:    VS Code Dark+",
      "  Terminal: xterm-256color",
      "  CPU:      Caffeine-Powered™",
      "  Memory:   256GB Imagination",
      "  Uptime:   Since the Big Bang",
      "",
    ],
  },
  cowsay: {
    description: "Moo!",
    execute: (args) => {
      const msg = args.length > 0 ? args.join(" ") : "Moo!";
      const border = "─".repeat(msg.length + 2);
      return [
        ` ┌${border}┐`,
        ` │ ${msg} │`,
        ` └${border}┘`,
        "        \\   ^__^",
        "         \\  (oo)\\_______",
        "            (__)\\       )\\/\\",
        "                ||----w |",
        "                ||     ||",
      ];
    },
  },
};

// Special commands that need store access (handled in component)
const _SPECIAL_COMMANDS = ["sudo hire-pushan", "npm install pushan", "rm -rf bugs", "matrix", "easteregg", "theme"];

let lineCounter = 0;
const genId = () => `line-${++lineCounter}-${Date.now()}`;

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: genId(), type: "system", content: "Welcome to PushanOS Terminal v3.0" },
    { id: genId(), type: "system", content: "Type 'help' to see available commands." },
    { id: genId(), type: "output", content: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandCount, setCommandCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { unlockAchievement, isAchievementUnlocked, setTerminalOpen } = usePortfolioStore();

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addLines = useCallback(
    (newLines: TerminalLine[]) => {
      setLines((prev) => [...prev, ...newLines]);
    },
    []
  );

  const handleSpecialCommand = useCallback(
    (fullCmd: string): string | string[] | null => {
      const cmd = fullCmd.trim().toLowerCase();

      if (cmd === "sudo hire-pushan") {
        const achievement = ACHIEVEMENTS.find((a) => a.id === "hire-me");
        if (achievement) unlockAchievement(achievement);
        return [
          "",
          "  🔐 SUDO ACCESS GRANTED",
          "  ─────────────────────────────────",
          "  ✅ Authorization: APPROVED",
          "  ✅ Background check: PASSED",
          "  ✅ Skill assessment: EXCEPTIONAL",
          "  ✅ Culture fit: PERFECT",
          "",
          "  🎉 Congratulations! You've hired Pushan!",
          "  📧 Sending offer letter... Done!",
          "",
        ];
      }

      if (cmd === "npm install pushan") {
        return [
          "",
          "  📦 Installing pushan@latest...",
          "  ████████████████████████████████ 100%",
          "",
          "  + pushan@3.0.0",
          "  added 1 developer, 0 bugs in 0.42s",
          "",
          "  ✨ Successfully installed! Features include:",
          "  • Full Stack Development",
          "  • Clean Code Architecture",
          "  • Infinite Curiosity",
          "  • Caffeinated Productivity",
          "",
        ];
      }

      if (cmd.startsWith("rm -rf")) {
        const bugAchievement = ACHIEVEMENTS.find((a) => a.id === "bug-hunter");
        if (bugAchievement) unlockAchievement(bugAchievement);
        return "🐛 Error: bugs are protected system files. Nice try though!";
      }

      if (cmd === "matrix") {
        const matrixAchievement = ACHIEVEMENTS.find((a) => a.id === "matrix-neo");
        if (matrixAchievement) unlockAchievement(matrixAchievement);
        return [
          "",
          "  🟢 Wake up, Neo...",
          "  🟢 The Matrix has you...",
          "  🟢 Follow the white rabbit.",
          "",
          "  (Matrix rain effect coming in Phase 2!)",
          "",
        ];
      }

      if (cmd === "easteregg") {
        return [
          "",
          "  🥚 You found the easter egg!",
          "  ──────────────────────────────",
          "  Here's a secret: I once debugged",
          "  for 4 hours only to find a missing",
          "  semicolon. True story.",
          "",
          "  Try: 'sudo hire-pushan' 😉",
          "",
        ];
      }

      if (cmd.startsWith("theme")) {
        const parts = cmd.split(" ");
        if (parts.length < 2) return "Usage: theme <default|cyberpunk|hacker>";
        const theme = parts[1];
        if (!["default", "cyberpunk", "hacker"].includes(theme)) {
          return `Unknown theme '${theme}'. Available: default, cyberpunk, hacker`;
        }
        return `🎨 Theme changed to '${theme}' (visual themes coming soon!)`;
      }

      return null;
    },
    [unlockAchievement]
  );

  const executeCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      // Add input line
      const inputLine: TerminalLine = { id: genId(), type: "input", content: trimmed };

      // Update history
      setHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      // Track command count for achievement
      const newCount = commandCount + 1;
      setCommandCount(newCount);
      if (newCount >= 5 && !isAchievementUnlocked("terminal-hacker")) {
        const achievement = ACHIEVEMENTS.find((a) => a.id === "terminal-hacker");
        if (achievement) unlockAchievement(achievement);
      }

      // Check special commands first
      const specialResult = handleSpecialCommand(trimmed);
      if (specialResult !== null) {
        const outputLines: TerminalLine[] = Array.isArray(specialResult)
          ? specialResult.map((line) => ({ id: genId(), type: "output" as const, content: line }))
          : [{ id: genId(), type: "output" as const, content: specialResult }];
        addLines([inputLine, ...outputLines]);
        return;
      }

      // Check regular commands
      const cmdName = trimmed.split(" ")[0].toLowerCase();
      const cmdArgs = trimmed.split(" ").slice(1);
      const command = COMMANDS[cmdName];

      if (command) {
        const result = command.execute(cmdArgs);

        if (result === "__CLEAR__") {
          setLines([]);
          return;
        }

        const outputLines: TerminalLine[] = Array.isArray(result)
          ? result.map((line) => ({ id: genId(), type: "output" as const, content: line }))
          : [{ id: genId(), type: "output" as const, content: result }];
        addLines([inputLine, ...outputLines]);
      } else {
        addLines([
          inputLine,
          {
            id: genId(),
            type: "error",
            content: `bash: ${cmdName}: command not found. Type 'help' for available commands.`,
          },
        ]);
      }
    },
    [commandCount, isAchievementUnlocked, unlockAchievement, handleSpecialCommand, addLines]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="terminal-component" onClick={() => inputRef.current?.focus()}>
      {/* Terminal header */}
      <div className="terminal-header">
        <span className="terminal-header-title">TERMINAL</span>
        <div className="terminal-header-actions">
          <span className="terminal-tab terminal-tab--active">bash</span>
          <button
            className="terminal-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setTerminalOpen(false);
            }}
            title="Close Terminal"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Terminal body */}
      <div className="terminal-body" ref={scrollRef}>
        <AnimatePresence initial={false}>
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className={`terminal-line terminal-line--${line.type}`}
            >
              {line.type === "input" && (
                <span className="terminal-prompt-inline">
                  <span className="terminal-user">pushan@portfolio</span>
                  <span className="terminal-colon">:</span>
                  <span className="terminal-path">~</span>
                  <span className="terminal-dollar">$ </span>
                </span>
              )}
              <span>{line.content}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current input line */}
        <div className="terminal-input-line">
          <span className="terminal-prompt-inline">
            <span className="terminal-user">pushan@portfolio</span>
            <span className="terminal-colon">:</span>
            <span className="terminal-path">~</span>
            <span className="terminal-dollar">$ </span>
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
