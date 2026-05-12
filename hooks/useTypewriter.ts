"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UseTypewriterOptions {
  /** Characters per second */
  speed?: number;
  /** Delay before starting (ms) */
  startDelay?: number;
  /** Whether to start immediately */
  autoStart?: boolean;
  /** Callback when typing finishes */
  onComplete?: () => void;
}

interface UseTypewriterReturn {
  displayText: string;
  isComplete: boolean;
  isTyping: boolean;
  start: () => void;
  reset: () => void;
}

/**
 * Typewriter effect hook. Types out text character by character
 * with realistic speed variation.
 */
export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
): UseTypewriterReturn {
  const {
    speed = 40,
    startDelay = 0,
    autoStart = true,
    onComplete,
  } = options;

  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  const type = useCallback(
    (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;

      // Add slight speed variation for realism
      const variation = 0.5 + Math.random();
      const interval = (1000 / speed) * variation;

      if (timestamp - lastTimeRef.current >= interval) {
        lastTimeRef.current = timestamp;
        indexRef.current++;

        if (indexRef.current <= text.length) {
          setDisplayText(text.slice(0, indexRef.current));
          rafRef.current = requestAnimationFrame(type);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          onCompleteRef.current?.();
        }
      } else {
        rafRef.current = requestAnimationFrame(type);
      }
    },
    [text, speed]
  );

  const start = useCallback(() => {
    setIsTyping(true);
    setIsComplete(false);
    indexRef.current = 0;
    lastTimeRef.current = 0;
    setDisplayText("");

    const timeoutId = setTimeout(() => {
      rafRef.current = requestAnimationFrame(type);
    }, startDelay);

    return () => clearTimeout(timeoutId);
  }, [type, startDelay]);

  const reset = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setDisplayText("");
    setIsTyping(false);
    setIsComplete(false);
    indexRef.current = 0;
    lastTimeRef.current = 0;
  }, []);

  useEffect(() => {
    if (autoStart) {
      const cleanup = start();
      return () => {
        cleanup?.();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [autoStart, start]);

  return { displayText, isComplete, isTyping, start, reset };
}

/**
 * Multi-line typewriter that types lines sequentially.
 */
export function useMultiLineTypewriter(
  lines: string[],
  options: UseTypewriterOptions & { lineDelay?: number } = {}
) {
  const { lineDelay = 200, ...typewriterOptions } = options;
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isAllComplete, setIsAllComplete] = useState(false);

  const currentText = lines[currentLineIndex] || "";

  const { displayText, isComplete } = useTypewriter(currentText, {
    ...typewriterOptions,
    startDelay: currentLineIndex === 0 ? typewriterOptions.startDelay : lineDelay,
    autoStart: currentLineIndex < lines.length,
    onComplete: () => {
      if (currentLineIndex < lines.length - 1) {
        setCompletedLines((prev) => [...prev, currentText]);
        setCurrentLineIndex((prev) => prev + 1);
      } else {
        setCompletedLines((prev) => [...prev, currentText]);
        setIsAllComplete(true);
        options.onComplete?.();
      }
    },
  });

  return {
    completedLines,
    currentLine: currentLineIndex < lines.length ? displayText : "",
    currentLineIndex,
    isAllComplete,
    totalLines: lines.length,
  };
}
