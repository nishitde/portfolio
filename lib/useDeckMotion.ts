"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/content/site";

const PARALLAX_DEPTH = 6;
/** Below this width the design turns parallax off. */
const SMALL_SCREEN = "(max-width: 759px)";
const REVEAL_THRESHOLD = 0.12;
const STAGGER_MS = 60;
const STAGGER_GROUP = 5;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Tracks whether the viewport is in the design's small band. */
function useIsSmallScreen() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(SMALL_SCREEN);
    const sync = () => setSmall(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return small;
}

/**
 * Drives the deck: which section is active, arrow-key paging between
 * sections, scroll-triggered reveals, and the hero parallax.
 *
 * Everything degrades to a plain scrolling page when JS never runs — the
 * reveal styles only engage once this hook arms them.
 */
export function useDeckMotion(ids: readonly SectionId[]) {
  const [active, setActive] = useState(0);
  const isSmall = useIsSmallScreen();

  // Active-section tracking, driven by the document scroller.
  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let next = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) next = i;
      });
      setActive((prev) => (prev === next ? prev : next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  // Arrow / PageUp / PageDown paging between sections.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const forward =
        e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown";
      const back = e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp";
      if (!forward && !back) return;

      // Left/right belong to the timeline carousel when focus is inside it,
      // rather than paging the whole deck.
      const target = e.target as Element | null;
      const horizontal = e.key === "ArrowLeft" || e.key === "ArrowRight";
      if (horizontal && target?.closest?.("[data-carousel]")) return;

      e.preventDefault();
      setActive((current) => {
        const next = Math.min(ids.length - 1, Math.max(0, current + (forward ? 1 : -1)));
        document.getElementById(ids[next])?.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
        return next;
      });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ids]);

  // Reveal-on-scroll for [data-reveal] and [data-heading-reveal].
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal],[data-heading-reveal]"),
    );

    nodes.forEach((node, i) => {
      node.style.setProperty("--reveal-delay", `${(i % STAGGER_GROUP) * STAGGER_MS}ms`);
      node.dataset.armed = "1";
    });

    const show = (node: HTMLElement) => {
      node.dataset.shown = "1";
    };

    // A heading's wipe clips it to zero width, and a zero-area box never
    // reports as intersecting — so it could never un-hide itself. Watch an
    // unclipped ancestor instead and reveal the heading along with it.
    const watched = new Map<Element, HTMLElement[]>();
    nodes.forEach((node) => {
      const target = node.hasAttribute("data-heading-reveal")
        ? (node.parentElement ?? node)
        : node;
      const group = watched.get(target);
      if (group) group.push(node);
      else watched.set(target, [node]);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          watched.get(entry.target)?.forEach(show);
          observer.unobserve(entry.target);
        });
      },
      { threshold: REVEAL_THRESHOLD },
    );
    watched.forEach((_group, target) => observer.observe(target));

    // Anything already on screen at load animates in one beat later, rather
    // than sitting armed-but-hidden until the first scroll.
    const timer = window.setTimeout(() => {
      const h = window.innerHeight;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < h * 0.95 && rect.bottom > 0) show(node);
      });
    }, 120);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  // Hero parallax — off on small screens, and re-evaluated whenever the
  // viewport crosses that breakpoint.
  useEffect(() => {
    if (isSmall || prefersReducedMotion()) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (nodes.length === 0) return;

    const onScroll = () => {
      const h = window.innerHeight;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const off = (rect.top + rect.height / 2 - h / 2) / h;
        node.style.transform = `translate3d(0, ${(-off * PARALLAX_DEPTH).toFixed(2)}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      nodes.forEach((node) => {
        node.style.transform = "";
      });
    };
  }, [isSmall]);

  return active;
}
