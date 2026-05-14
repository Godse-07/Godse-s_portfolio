"use client";

import React, { useEffect, useState } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import VsCodeSidebar from "@/components/VsCodeSidebar";
import TabBar from "@/components/tabs/TabBar";
import Breadcrumbs from "@/components/tabs/Breadcrumbs";
import Terminal from "@/components/terminal/Terminal";
import { motion, AnimatePresence } from "framer-motion";

interface PanelLayoutProps {
  children: React.ReactNode;
}

export default function PanelLayout({ children }: PanelLayoutProps) {
  const {
    isSidebarOpen,
    isTerminalOpen,
    isRecruiterMode,
    toggleTerminal,
  } = usePortfolioStore();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut: Ctrl + ` to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        toggleTerminal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTerminal]);

  return (
    <div className="panel-layout">
      <Group orientation="horizontal" className="panel-group-horizontal">
        {/* Sidebar Panel */}
        <AnimatePresence>
          {mounted && isSidebarOpen && !isRecruiterMode && (
            <Panel
              defaultSize="18%"
              minSize="10%"
              maxSize="30%"
              className="sidebar-panel"
              id="sidebar"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="sidebar-panel-inner"
              >
                <VsCodeSidebar />
              </motion.div>
            </Panel>
          )}
        </AnimatePresence>

        {/* Resize Handle between sidebar and editor */}
        {mounted && isSidebarOpen && !isRecruiterMode && (
          <Separator className="resize-handle resize-handle--horizontal" />
        )}

        {/* Main Editor Panel */}
        <Panel minSize="40%" id="editor">
          <Group orientation="vertical" className="panel-group-vertical">
            {/* Editor content */}
            <Panel
              defaultSize={isTerminalOpen ? "65%" : "100%"}
              minSize="30%"
              id="editor-content"
            >
              <div className="editor-panel">
                <TabBar />
                <Breadcrumbs />
                <div className="editor-content-area">
                  {children}
                </div>
              </div>
            </Panel>

            {/* Terminal resize handle */}
            {isTerminalOpen && (
              <Separator className="resize-handle resize-handle--vertical" />
            )}

            {/* Terminal Panel */}
            {isTerminalOpen && (
              <Panel
                defaultSize="35%"
                minSize="15%"
                maxSize="60%"
                id="terminal"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="terminal-panel"
                >
                  <Terminal />
                </motion.div>
              </Panel>
            )}
          </Group>
        </Panel>
      </Group>
    </div>
  );
}
