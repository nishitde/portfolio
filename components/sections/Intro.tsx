import { Fragment } from "react";
import { site } from "@/content/site";
import { socials } from "@/content/socials";
import styles from "../deck.module.css";

export default function Intro() {
  return (
    <section id="top" className={styles.slideCenter}>
      <div className={styles.heroBlock}>
        <p className={styles.meta}>01 / 04 — Intro</p>
        <p className={styles.lead} data-parallax="1">
          {site.tagline}
        </p>
        <h1 className={styles.display} data-heading-reveal="1">
          {site.name}
        </h1>
        <p className={styles.heroSub} data-reveal="1">
          {site.heroSub.map((part, i) => (
            <Fragment key={part}>
              {i > 0 ? " · " : null}
              <span className={styles.heroSubPart}>{part}</span>
            </Fragment>
          ))}
        </p>
        <div className={styles.ctaRow}>
          <a href={site.resume.href} className={styles.btn} data-magnetic="1">
            Download résumé <span className={styles.btnIcon}>↓</span>
          </a>
        </div>
      </div>

      <div className={styles.slideFoot}>
        <div>
          {site.location} — {site.timezone}
        </div>
        <div className={styles.footLinks}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              {s.name}
            </a>
          ))}
        </div>
        <div>Scroll, or press ↓</div>
      </div>
    </section>
  );
}
