"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Coalesces work onto the next animation frame so scroll handlers
 * do not run more than once per paint.
 */
export function useAnimationFrame() {
  const frame = useRef(0);
  const queued = useRef<(() => void) | null>(null);

  const schedule = useCallback((work: () => void) => {
    queued.current = work;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const next = queued.current;
      queued.current = null;
      next?.();
    });
  }, []);

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return schedule;
}
