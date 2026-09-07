import { timeline } from "@/content/timeline";
import styles from "../deck.module.css";

const columns = ["Period", "Length", "Place", "Role"];

export default function Timeline() {
  return (
    <section id="timeline" className={styles.slide}>
      <div className={styles.slideHead}>
        <h2 className={styles.h2} data-heading-reveal="1">
          From campus to cloud
        </h2>
      </div>

      {/* Wide screens: the five-column table. Narrow screens: the card
          stack below. Both are rendered and swapped with `display`, so no
          JavaScript is needed to pick one and the hidden layout stays out
          of the accessibility tree. */}
      <div className={styles.tlTable} data-reveal="1">
        <div className={styles.tlHeadRow} aria-hidden="true">
          {columns.map((c) => (
            <div key={c}>{c}</div>
          ))}
          <div className={styles.tlStackHead}>Stack</div>
        </div>

        <ul className={styles.tlList}>
          {timeline.map((entry, i) => {
            const current = i === timeline.length - 1;
            return (
              <li key={entry.place} className={styles.tlRow}>
                <div className={current ? styles.tlPeriodCurrent : styles.tlPeriod}>
                  {entry.period}
                </div>
                <div className={styles.tlMuted}>{entry.length}</div>
                <div>
                  <div className={styles.tlPlace}>{entry.place}</div>
                  <div className={styles.tlCity}>{entry.city}</div>
                </div>
                <div>{entry.role}</div>
                <div className={styles.tlStack}>{entry.stack}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className={styles.tlCards}>
        {timeline.map((entry, i) => {
          const current = i === timeline.length - 1;
          return (
            <li key={entry.place} className={styles.tlCard} data-reveal="1">
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

      <div className={styles.slideFoot}>
        <div>02 / 04 — Timeline</div>
        <div>Full detail lives in the résumé</div>
      </div>
    </section>
  );
}
