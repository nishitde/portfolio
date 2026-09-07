import { statSync } from "node:fs";
import { join } from "node:path";
import { site } from "@/content/site";
import styles from "../deck.module.css";

/**
 * Size of the résumé PDF, read at build time so the footer can never
 * drift out of date when the file is replaced.
 */
function resumeSize() {
  try {
    const { size } = statSync(join(process.cwd(), "public", "resume.pdf"));
    return `PDF, ${Math.round(size / 1024)} KB`;
  } catch {
    return "PDF";
  }
}

export default function Resume() {
  return (
    <section id="resume" className={styles.slideCenter}>
      <div className={styles.slideHead}>
        <h2 className={styles.h2} data-heading-reveal="1">
          Five years, one page
        </h2>
      </div>

      <div className={styles.ctaCenter}>
        <p className={styles.lead}>Updated {site.resume.updated}.</p>
        <div className={styles.ctaRow}>
          <a href={site.resume.href} className={styles.btn} download data-magnetic="1">
            Download PDF <span className={styles.btnIcon}>↓</span>
          </a>
          <a
            href={site.resume.href}
            className={styles.btnSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            View in browser ↗
          </a>
        </div>
      </div>

      <div className={styles.slideFoot}>
        <div>03 / 04 — Résumé</div>
        <div>{resumeSize()}</div>
      </div>
    </section>
  );
}
