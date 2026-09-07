import { site } from "@/content/site";
import { socials } from "@/content/socials";
import styles from "../deck.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.slide}>
      <div className={styles.slideHead}>
        <h2 className={styles.h2} data-heading-reveal="1">
          Say hello
        </h2>
        <p className={styles.headNote}>Fastest answer: email</p>
      </div>

      <div className={styles.contactWrap}>
        <div className={styles.contactLeft}>
          <p className={styles.contactLead} data-parallax="1">
            Happy to talk distributed systems, on-call war stories, or your hiring
            pipeline.
          </p>
          <p className={styles.meta}>
            {site.name} · {site.location} · {site.timezone}
          </p>
        </div>

        <div className={styles.contactList} data-reveal="1">
          {socials.map((s) => {
            const external = !s.href.startsWith("mailto:");
            return (
              <a
                key={s.name}
                href={s.href}
                className={styles.contactRow}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <span className={styles.meta}>{s.name}</span>
                <span className={styles.contactHandle}>{s.handle}</span>
                <span className={styles.contactIcon} aria-hidden="true">
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <div className={styles.slideFoot}>
        <div>04 / 04 — End of deck</div>
        <div>Thanks for reading ↑</div>
      </div>
    </section>
  );
}
