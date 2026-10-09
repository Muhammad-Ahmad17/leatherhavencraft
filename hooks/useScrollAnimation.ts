"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { clamp, prefersReducedMotion } from "@/lib/utils";
import { easeInOut } from "@/lib/easing";

type UseScrollAnimationOptions = {
  trackRef: RefObject<HTMLElement | null>;
  svgRef: RefObject<SVGSVGElement | null>;
  count: number;
};

// Portion of each transition gap where the jacket sits completely steady and 100% visible on model
const REST_ZONE = 0.22;

export function useScrollAnimation({
  trackRef,
  svgRef,
  count,
}: UseScrollAnimationOptions) {
  const groupsRef = useRef<(SVGGElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);

  const metricsRef = useRef({ trackTop: 0, max: 1 });
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const isLoopRunningRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  const setGroupRef = useCallback((index: number, node: SVGGElement | null) => {
    groupsRef.current[index] = node;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const trackTop = rect.top + window.scrollY;
    const max = Math.max(track.offsetHeight - window.innerHeight, 1);
    metricsRef.current = { trackTop, max };
  }, [trackRef]);

  const updateTarget = useCallback(() => {
    if (count < 1) return;
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const max = Math.max(track.offsetHeight - window.innerHeight, 1);
    // Live viewport bounding client rect calculation ensures 100% accuracy on mobile regardless of layout shifts
    const progress = clamp(-rect.top / max, 0, 1);
    targetProgressRef.current = progress;
    metricsRef.current = { trackTop: rect.top + window.scrollY, max };
  }, [count, trackRef]);

  const renderFrame = useCallback(
    (progress: number) => {
      if (count < 1) return;
      const reduced = prefersReducedMotion();

      if (reduced || count === 1) {
        const position = count === 1 ? 0 : progress * (count - 1);
        const activeIndex = clamp(Math.round(position), 0, count - 1);
        groupsRef.current.forEach((group, i) => {
          if (!group) return;
          const active = i === activeIndex;
          group.style.display = active ? "" : "none";
          group.removeAttribute("transform");
          group.removeAttribute("opacity");
        });
        setCurrentIndex((prev) => (prev === activeIndex ? prev : activeIndex));
        return;
      }

      // Continuous float position from 0.0 to count - 1
      const totalTransitions = count - 1;
      const position = clamp(progress * totalTransitions, 0, totalTransitions);

      // Active pair: between pairIndex and pairIndex + 1
      const pairIndex = Math.min(Math.floor(position), count - 2);
      const localProgress = position - pairIndex; // in [0, 1]

      // Active index for dots, arrows, and captions
      const activeIndex = clamp(Math.round(position), 0, count - 1);

      groupsRef.current.forEach((group, i) => {
        if (!group) return;

        // If this jacket is neither the outgoing nor incoming one, cleanly hide it
        if (i !== pairIndex && i !== pairIndex + 1) {
          group.style.display = "none";
          group.setAttribute("opacity", "0");
          group.removeAttribute("transform");
          return;
        }

        // Clean display
        group.style.display = "";
        group.removeAttribute("transform");

        // Case 1: Sitting in the rest zone of pairIndex
        if (localProgress <= REST_ZONE) {
          if (i === pairIndex) {
            group.setAttribute("opacity", "1");
          } else {
            group.style.display = "none";
            group.setAttribute("opacity", "0");
          }
          return;
        }

        // Case 2: Sitting in the rest zone of pairIndex + 1
        if (localProgress >= 1.0 - REST_ZONE) {
          if (i === pairIndex + 1) {
            group.setAttribute("opacity", "1");
          } else {
            group.style.display = "none";
            group.setAttribute("opacity", "0");
          }
          return;
        }

        // Case 3: Smooth transition zone between REST_ZONE and (1 - REST_ZONE)
        const transitionSpan = 1.0 - 2 * REST_ZONE;
        const t = clamp((localProgress - REST_ZONE) / transitionSpan, 0, 1);
        const blend = easeInOut(t);

        // Equal-power cosine/sine cross-fade maintains 100% perceived leather density
        if (i === pairIndex) {
          const opacityOut = Math.cos((blend * Math.PI) / 2);
          group.setAttribute("opacity", opacityOut.toFixed(3));
        } else if (i === pairIndex + 1) {
          const opacityIn = Math.sin((blend * Math.PI) / 2);
          group.setAttribute("opacity", opacityIn.toFixed(3));
        }
      });

      const showHint = progress <= 0.02 && count > 1;
      setHintVisible((prev) => (prev === showHint ? prev : showHint));
      setCurrentIndex((prev) => (prev === activeIndex ? prev : activeIndex));
    },
    [count]
  );

  const tick = useCallback(() => {
    const target = targetProgressRef.current;
    let current = currentProgressRef.current;
    const diff = target - current;

    // 0.12 lerp factor: silky-smooth organic luxury damping
    if (Math.abs(diff) > 0.0001) {
      current += diff * 0.12;
      currentProgressRef.current = current;
      renderFrame(current);
      rafIdRef.current = requestAnimationFrame(tick);
    } else {
      current = target;
      currentProgressRef.current = target;
      renderFrame(current);
      isLoopRunningRef.current = false;
      rafIdRef.current = null;
    }
  }, [renderFrame]);

  const triggerAnimation = useCallback(() => {
    updateTarget();
    if (!isLoopRunningRef.current) {
      isLoopRunningRef.current = true;
      rafIdRef.current = requestAnimationFrame(tick);
    }
  }, [updateTarget, tick]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track || count < 2) return;
      const rect = track.getBoundingClientRect();
      const liveTrackTop = rect.top + window.scrollY;
      const max = Math.max(track.offsetHeight - window.innerHeight, 1);
      const targetIndex = clamp(index, 0, count - 1);
      const top = liveTrackTop + (targetIndex / (count - 1)) * max;
      window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    },
    [count, trackRef]
  );

  const nextJacket = useCallback(() => {
    if (count < 2) return;
    const currentPos = targetProgressRef.current * (count - 1);
    const target = clamp(Math.floor(currentPos + 1.001), 0, count - 1);
    if (target > Math.round(currentPos)) {
      scrollToIndex(target);
    } else if (target < count - 1) {
      scrollToIndex(target + 1);
    } else {
      scrollToIndex(count - 1);
    }
  }, [count, scrollToIndex]);

  const prevJacket = useCallback(() => {
    if (count < 2) return;
    const currentPos = targetProgressRef.current * (count - 1);
    const target = clamp(Math.ceil(currentPos - 1.001), 0, count - 1);
    if (target < Math.round(currentPos)) {
      scrollToIndex(target);
    } else if (target > 0) {
      scrollToIndex(target - 1);
    } else {
      scrollToIndex(0);
    }
  }, [count, scrollToIndex]);

  const canNext = currentIndex < count - 1;
  const canPrev = currentIndex > 0;

  useEffect(() => {
    measure();
    updateTarget();
    currentProgressRef.current = targetProgressRef.current;
    renderFrame(currentProgressRef.current);

    const onScroll = () => triggerAnimation();
    const onResize = () => {
      measure();
      triggerAnimation();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3;
      if (!inView) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextJacket();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevJacket();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);

    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length === 1) {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;
        // Horizontal swipe threshold: 45px and dominant over vertical
        if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
          const track = trackRef.current;
          if (!track) return;
          const rect = track.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= window.innerHeight * 0.2) {
            if (deltaX < 0) {
              nextJacket();
            } else {
              prevJacket();
            }
          }
        }
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [triggerAnimation, updateTarget, renderFrame, measure, nextJacket, prevJacket, trackRef]);

  return {
    currentIndex,
    hintVisible,
    svgRef,
    setGroupRef,
    scrollToIndex,
    nextJacket,
    prevJacket,
    canNext,
    canPrev,
  };
}
