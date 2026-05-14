// ============================================
// PushanOS v3.0 — Shared TypeScript Types
// ============================================

export interface TabItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  isSecret?: boolean;
  isPinned?: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: number; // timestamp
}

export interface AchievementDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system' | 'ascii';
  content: string;
  timestamp: number;
}

export interface TerminalCommand {
  name: string;
  description: string;
  category: 'navigation' | 'info' | 'fun' | 'system';
  execute: () => string | string[];
}

export interface CommitEntry {
  hash: string;
  message: string;
  date: string;
  branch: string;
  type: 'feat' | 'fix' | 'refactor' | 'docs' | 'chore' | 'style';
}

export interface SecretFile {
  name: string;
  icon: string;
  content: string;
  type: 'json' | 'tsx' | 'md';
  achievement?: string;
}

export interface AiMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export type ThemeMode = 'default' | 'cyberpunk' | 'hacker';

export type GameType = 'snake' | 'bughunt' | 'matrix' | 'typing' | 'pong' | null;

export interface GameScore {
  game: string;
  score: number;
  date: number;
}

export interface PortfolioState {
  // Boot
  isBootComplete: boolean;
  setBootComplete: (complete: boolean) => void;

  // Tabs
  openTabs: TabItem[];
  activeTabId: string;
  openTab: (tab: TabItem) => void;
  closeTab: (tabId: string) => void;
  setActiveTab: (tabId: string) => void;

  // Terminal
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
  setTerminalOpen: (open: boolean) => void;

  // Sidebar
  isSidebarOpen: boolean;
  toggleSidebar: () => void;

  // Achievements
  unlockedAchievements: Achievement[];
  unlockAchievement: (achievement: AchievementDefinition) => void;
  isAchievementUnlocked: (id: string) => boolean;

  // Theme
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;

  // Recruiter Mode
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;

  // Achievement toast queue
  achievementToastQueue: Achievement[];
  dismissAchievementToast: () => void;

  // Games
  currentGame: GameType;
  setCurrentGame: (game: GameType) => void;
  leaderboard: GameScore[];
  addScore: (game: string, score: number) => void;
}
