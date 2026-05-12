"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePortfolioStore } from "@/stores/usePortfolioStore";

type MenuItem =
  | {
      label: string;
      shortcut?: string;
      action?: () => void;
      divider?: false;
      disabled?: boolean;
    }
  | {
      divider: true;
      label?: never;
      shortcut?: never;
      action?: never;
      disabled?: never;
    };

interface MenuDropdownProps {
  label: string;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function MenuDropdown({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}: MenuDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="navbar-menu-wrapper">
      <button
        className={`navbar-menu-trigger ${isOpen ? "navbar-menu-trigger--active" : ""}`}
        onClick={onToggle}
      >
        {label}
      </button>
      {isOpen && (
        <div className="navbar-dropdown">
          {items.map((item, i) =>
            item.divider ? (
              <div key={i} className="navbar-dropdown-divider" />
            ) : (
              <button
                key={i}
                className={`navbar-dropdown-item ${item.disabled ? "navbar-dropdown-item--disabled" : ""}`}
                onClick={() => {
                  if (!item.disabled) {
                    item.action?.();
                    onClose();
                  }
                }}
                disabled={item.disabled}
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="navbar-dropdown-shortcut">
                    {item.shortcut}
                  </span>
                )}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const {
    toggleSidebar,
    toggleTerminal,
    toggleRecruiterMode,
    isRecruiterMode,
    isSidebarOpen,
    isTerminalOpen,
  } = usePortfolioStore();

  const handleToggle = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const handleClose = () => setOpenMenu(null);

  const fileMenu: MenuItem[] = [
    { label: "New File", shortcut: "Ctrl+N", disabled: true },
    { label: "Open File...", shortcut: "Ctrl+O", disabled: true },
    { divider: true },
    {
      label: "Download Resume",
      action: () => {
        const link = document.createElement("a");
        link.href = "/Pushan_Mukhopadhyay.pdf";
        link.download = "Pushan_Mukhopadhyay.pdf";
        link.click();
      },
    },
    { divider: true },
    {
      label: "Exit",
      shortcut: "Alt+F4",
      action: () => window.close(),
    },
  ];

  const viewMenu: MenuItem[] = [
    {
      label: `${isSidebarOpen ? "✓ " : "  "}Explorer`,
      shortcut: "Ctrl+B",
      action: toggleSidebar,
    },
    {
      label: `${isTerminalOpen ? "✓ " : "  "}Terminal`,
      shortcut: "Ctrl+\`",
      action: toggleTerminal,
    },
    { divider: true },
    {
      label: `${isRecruiterMode ? "✓ " : "  "}Recruiter Mode`,
      action: toggleRecruiterMode,
    },
  ];

  const terminalMenu: MenuItem[] = [
    {
      label: "New Terminal",
      shortcut: "Ctrl+`",
      action: () => {
        const store = usePortfolioStore.getState();
        if (!store.isTerminalOpen) store.toggleTerminal();
      },
    },
    {
      label: "Clear Terminal",
      action: () => {
        /* handled by terminal component */
      },
    },
  ];

  const helpMenu: MenuItem[] = [
    { label: "About PushanOS", action: () => {} },
    { label: "Keyboard Shortcuts", shortcut: "Ctrl+K", disabled: true },
    { divider: true },
    {
      label: "View on GitHub",
      action: () =>
        window.open("https://github.com/Godse-07/Godse-s_portfolio", "_blank"),
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Image
          src="/VsCode.png"
          alt="PushanOS"
          width={25}
          height={25}
          className="navbar-logo"
          style={{ height: "18px", width: "25px", objectFit: "contain" }}
        />

        <MenuDropdown
          label="File"
          items={fileMenu}
          isOpen={openMenu === "file"}
          onToggle={() => handleToggle("file")}
          onClose={handleClose}
        />
        <MenuDropdown
          label="Edit"
          items={[
            { label: "Copy", shortcut: "Ctrl+C", disabled: true },
            { label: "Paste", shortcut: "Ctrl+V", disabled: true },
          ]}
          isOpen={openMenu === "edit"}
          onToggle={() => handleToggle("edit")}
          onClose={handleClose}
        />
        <MenuDropdown
          label="View"
          items={viewMenu}
          isOpen={openMenu === "view"}
          onToggle={() => handleToggle("view")}
          onClose={handleClose}
        />
        <span className="navbar-menu-trigger" style={{ cursor: "default" }}>
          Go
        </span>
        <span className="navbar-menu-trigger" style={{ cursor: "default" }}>
          Run
        </span>
        <MenuDropdown
          label="Terminal"
          items={terminalMenu}
          isOpen={openMenu === "terminal"}
          onToggle={() => handleToggle("terminal")}
          onClose={handleClose}
        />
        <MenuDropdown
          label="Help"
          items={helpMenu}
          isOpen={openMenu === "help"}
          onToggle={() => handleToggle("help")}
          onClose={handleClose}
        />
      </div>

      <div className="navbar-center">
        <span className="navbar-title">Godse&apos;s PushanOS</span>
      </div>

      <div className="navbar-right">
        <div className="navbar-window-btn navbar-window-btn--minimize" />
        <div className="navbar-window-btn navbar-window-btn--maximize" />
        <div className="navbar-window-btn navbar-window-btn--close" />
      </div>
    </div>
  );
};

export default Navbar;
