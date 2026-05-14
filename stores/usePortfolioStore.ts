import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  TabItem,
  Achievement,
  AchievementDefinition,
  ThemeMode,
  GameType,
  GameScore,
  PortfolioState,
} from "@/types/portfolio";

/**
 * Central zustand store for PushanOS.
 * Persists achievements, theme, boot state, and recruiter mode to localStorage.
 */
export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set, get) => ({
      // ── Boot ───────────────────────────
      isBootComplete: false,
      setBootComplete: (complete: boolean) => set({ isBootComplete: complete }),

      // ── Tabs ───────────────────────────
      openTabs: [] as TabItem[],
      activeTabId: "",
      openTab: (tab: TabItem) => {
        const { openTabs } = get();
        const exists = openTabs.find((t) => t.id === tab.id);
        if (!exists) {
          set({ openTabs: [...openTabs, tab], activeTabId: tab.id });
        } else {
          set({ activeTabId: tab.id });
        }
      },
      closeTab: (tabId: string) => {
        const { openTabs, activeTabId } = get();
        const filtered = openTabs.filter((t) => t.id !== tabId);
        let newActiveId = activeTabId;

        if (activeTabId === tabId) {
          const idx = openTabs.findIndex((t) => t.id === tabId);
          if (filtered.length > 0) {
            newActiveId =
              filtered[Math.min(idx, filtered.length - 1)]?.id || "";
          } else {
            newActiveId = "";
          }
        }

        set({ openTabs: filtered, activeTabId: newActiveId });
      },
      setActiveTab: (tabId: string) => set({ activeTabId: tabId }),

      // ── Terminal ───────────────────────
      isTerminalOpen: false,
      toggleTerminal: () =>
        set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
      setTerminalOpen: (open: boolean) => set({ isTerminalOpen: open }),

      // ── Sidebar ────────────────────────
      isSidebarOpen: true,
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

      // ── Achievements ───────────────────
      unlockedAchievements: [] as Achievement[],
      achievementToastQueue: [] as Achievement[],
      unlockAchievement: (definition: AchievementDefinition) => {
        const { unlockedAchievements } = get();
        if (unlockedAchievements.find((a) => a.id === definition.id)) return;

        const newAchievement: Achievement = {
          ...definition,
          unlockedAt: Date.now(),
        };
        set({
          unlockedAchievements: [...unlockedAchievements, newAchievement],
          achievementToastQueue: [
            ...get().achievementToastQueue,
            newAchievement,
          ],
        });
      },
      isAchievementUnlocked: (id: string) => {
        return get().unlockedAchievements.some((a) => a.id === id);
      },
      dismissAchievementToast: () => {
        set((state) => ({
          achievementToastQueue: state.achievementToastQueue.slice(1),
        }));
      },

      // ── Theme ──────────────────────────
      theme: "default" as ThemeMode,
      setTheme: (theme: ThemeMode) => set({ theme }),

      // ── Recruiter Mode ─────────────────
      isRecruiterMode: false,
      toggleRecruiterMode: () =>
        set((state) => ({ isRecruiterMode: !state.isRecruiterMode })),

      // ── Games ──────────────────────────
      currentGame: null,
      setCurrentGame: (game: GameType) => set({ currentGame: game }),
      leaderboard: [] as GameScore[],
      addScore: (game: string, score: number) => {
        const { leaderboard } = get();
        const newScore: GameScore = { game, score, date: Date.now() };
        // Keep top 10 scores per game
        const updatedLeaderboard = [...leaderboard, newScore]
          .sort((a, b) => b.score - a.score)
          .filter((s, idx, self) => 
            s.game !== game || self.filter(x => x.game === game).indexOf(s) < 10
          );
        set({ leaderboard: updatedLeaderboard });
      },
    }),
    {
      name: "pushan-os-store",
      partialize: (state) => ({
        isBootComplete: state.isBootComplete,
        unlockedAchievements: state.unlockedAchievements,
        theme: state.theme,
        isRecruiterMode: state.isRecruiterMode,
        leaderboard: state.leaderboard,
      }),
    }
  )
);
