"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import {
  EASE_SPAN,
  EASE_START,
  ROTATION_DEGREES,
  SVG_VIEWBOX,
} from "@/lib/constants";
import { easeInOut } from "@/lib/easing";
import { clamp, prefersReducedMotion } from "@/lib/utils";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";
import { useViewportSize } from "@/hooks/useViewportSize";

type UseScrollAnimationOptions = {
  trackRef: RefObject<HTMLElement | null>;
  svgRef: RefObject<SVGSVGElement | null>;
  count: number;
};

export function useScrollAnimation({
  trackRef,
  svgRef,
  count,
}: UseScrollAnimationOptions) {
  const groupsRef = useRef<(SVGGElement | null)[]>([]);
  const travelRef = useRef(600);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);
  const schedule = useAnimationFrame();
  const viewport = useViewportSize();

  const setGroupRef = useCallback((index: number, node: SVGGElement | null) => {
    groupsRef.current[index] = node;
  }, []);

  const measure = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const height = svg.getBoundingClientRect().height;
    if (height < 1) return;
    const scale = height / SVG_VIEWBOX.height;
    travelRef.current = window.innerWidth / 2 / scale + 260;
  }, [svgRef]);

  const render = useCallback(() => {
    const track = trackRef.current;
    if (!track || count < 1) return;

    const max = Math.max(track.offsetHeight - window.innerHeight, 1);
    const progress = clamp((window.scrollY - track.offsetTop) / max, 0, 1);
    const position = count === 1 ? 0 : progress * (count - 1);
    const index = clamp(Math.round(position), 0, count - 1);
    const reduced = prefersReducedMotion();
    const travel = travelRef.current;

    groupsRef.current.forEach((group, i) => {
      if (!group) return;

      if (reduced || count === 1) {
        const active = i === index;
        group.style.display = active ? "" : "none";
        group.removeAttribute("transform");
        return;
      }

      const delta = position - i;
      const distance = Math.abs(delta);
      if (distance >= 1) {
        group.style.display = "none";
        return;
      }

      group.style.display = "";
      const eased = easeInOut(clamp((distance - EASE_START) / EASE_SPAN, 0, 1));
      const dx = (delta < 0 ? 1 : -1) * eased * travel;
      const rotation = (dx / travel) * ROTATION_DEGREES;
      group.setAttribute(
        "transform",
        `translate(${dx.toFixed(1)} 0) rotate(${rotation.toFixed(2)} 350 620)`,
      );
    });

    const showHint = progress <= 0.02 && count > 1;
    setHintVisible((previous) => (previous === showHint ? previous : showHint));
    setCurrentIndex((previous) => (previous === index ? previous : index));
  }, [count, trackRef]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track || count < 2) return;
      const max = track.offsetHeight - window.innerHeight;
      const top = track.offsetTop + (index / (count - 1)) * max;
      window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    },
    [count, trackRef],
  );

  useEffect(() => {
    measure();
    render();

    const onScroll = () => schedule(render);
    const onResize = () => {
      measure();
      schedule(render);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [measure, render, schedule, viewport.height, viewport.width]);

  return {
    currentIndex,
    hintVisible,
    svgRef,
    setGroupRef,
    scrollToIndex,
  };
}
