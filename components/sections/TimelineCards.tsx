"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/content/timeline";
import { prefersReducedMotion } from "@/lib/useDeckMotion";
import styles from "../deck.module.css";

/**
 * Phone-only view of the timeline: the five cards become a horizontal,
 * snap-scrolling carousel so the section still occupies exactly one
 * screen. Hidden by CSS at 760px and up, where the table takes over.
 */
export default function TimelineCards() {
  const scroller = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    // The card list is static, so it is built once rather than per event.
    const cards = Array.from(el.children) as HTMLElement[];

    const onScroll = () => {
      const left = el.scrollLeft;
      let nearest = 0;
      let best = Infinity;
      cards.forEach((card, i) => {
        const distance = Math.abs(card.offsetLeft - left);
        if (distance < best) {
          best = distance;
          nearest = i;
        }
      });
      setActive(nearest);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = scroller.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    // scrollTo rather than scrollIntoView, which would also scroll the page
    // vertically and fight the section snap.
    el.scrollTo({
      left: card.offsetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <div className={styles.tlCarousel} data-carousel="1">
      {/* Labelled as a region so it is reachable by landmark navigation.
          Keyboard users move it with the dot controls below rather than by
          focusing the scroller itself. */}
      <ul
        className={styles.tlCards}
        ref={scroller}
        role="region"
        aria-label="Work and education history"
      >
        {timeline.map((entry, i) => {
          const current = i === timeline.length - 1;
          return (
            <li key={entry.place} className={styles.tlCard}>
              <div className={current ? styles.tlPeriodCurrent : styles.tlPeriod}>
                {entry.period.toUpperCase()}
              </div>
              <div className={current ? styles.tlCardYearsCurrent : styles.tlCardYears}>
                {entry.years}
              </div>
              <div className={styles.tlCardTitle}>{entry.place}</div>
              <div className={styles.tlCity}>{entry.city}</div>
              <div className={styles.tlCardBody}>{entry.note}</div>
              <div className={styles.tlCardFoot}>
                {entry.length.toUpperCase()}
                {current ? " · CURRENT" : ""}
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.tlDots}>
        {timeline.map((entry, i) => (
          <button
            key={entry.place}
            type="button"
            className={styles.tlDot}
            aria-label={`Show ${entry.place}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => goTo(i)}
          >
            <span
              className={`${styles.tlDotBar} ${i === active ? styles.tlDotBarActive : ""}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
