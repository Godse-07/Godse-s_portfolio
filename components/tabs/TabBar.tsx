"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePortfolioStore } from "@/stores/usePortfolioStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TAB_ICON = "/react.png";

export default function TabBar() {
  const { openTabs, activeTabId, setActiveTab, closeTab } =
    usePortfolioStore();
  const router = useRouter();

  const handleTabClick = (tabId: string, path: string) => {
    setActiveTab(tabId);
    router.push(path);
  };

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    closeTab(tabId);

    // Navigate to the next active tab if we closed the current one
    if (tabId === activeTabId) {
      const remaining = openTabs.filter((t) => t.id !== tabId);
      if (remaining.length > 0) {
        const newActive = remaining[remaining.length - 1];
        router.push(newActive.path);
      } else {
        router.push("/");
      }
    }
  };

  // Handle middle-click to close
  const handleMouseDown = (e: React.MouseEvent, tabId: string) => {
    if (e.button === 1) {
      e.preventDefault();
      handleCloseTab(e, tabId);
    }
  };

  if (openTabs.length === 0) return null;

  return (
    <div className="tab-bar">
      <div className="tab-bar-scroll">
        <AnimatePresence mode="popLayout">
          {openTabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <motion.div
                key={tab.id}
                layout
                layoutId={`tab-${tab.id}`}
                className={`tab-item ${isActive ? "tab-item--active" : ""} ${tab.isSecret ? "tab-item--secret" : ""}`}
                onClick={() => handleTabClick(tab.id, tab.path)}
                onMouseDown={(e) => handleMouseDown(e, tab.id)}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image
                  src={tab.icon || TAB_ICON}
                  alt=""
                  width={14}
                  height={14}
                  className="tab-item-icon"
                />
                <span className="tab-item-label">{tab.label}</span>
                <button
                  className="tab-item-close"
                  onClick={(e) => handleCloseTab(e, tab.id)}
                  title="Close"
                >
                  <X size={12} />
                </button>

                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    className="tab-active-indicator"
                    layoutId="tab-indicator"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
