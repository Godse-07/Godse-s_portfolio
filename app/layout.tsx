import type { Metadata } from "next";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/layout/StatusBar";
import PanelLayout from "@/components/layout/PanelLayout";
import BootScreen from "@/components/boot/BootScreen";
import AchievementToast from "@/components/achievements/AchievementToast";

export const metadata: Metadata = {
  title: "Godse-07 | PushanOS — Developer Portfolio",
  description:
    "Pushan Mukhopadhyay's immersive VS Code-themed developer portfolio. Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Pushan Mukhopadhyay",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ClientOnly>
          {/* Boot Screen — shown once on first visit */}
          <BootScreen />

          {/* Main OS Shell */}
          <div className="os-shell">
            {/* Top navbar */}
            <div className="os-navbar">
              <Navbar />
            </div>

            {/* Resizable panel layout: Sidebar | Editor | Terminal */}
            <PanelLayout>{children}</PanelLayout>

            {/* Bottom status bar */}
            <StatusBar />
          </div>

          {/* Achievement toast notifications */}
          <AchievementToast />

          {/* Subtle CRT scanline overlay */}
          <div className="scanline-overlay" />
        </ClientOnly>
      </body>
    </html>
  );
}
