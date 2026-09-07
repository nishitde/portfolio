import { sections, site } from "@/content/site";
import styles from "./deck.module.css";

const links = sections.filter((s) => s.id !== "top");

export default function Nav({ active }: { active: number }) {
  const counter = `${String(active + 1).padStart(2, "0")} / ${String(
    sections.length,
  ).padStart(2, "0")}`;

  return (
    <header className={styles.chrome}>
      <nav className={styles.navRow} aria-label="Sections">
        <a href="#top" className={styles.brand}>
          {site.name}
        </a>
        <div className={styles.navLinks}>
          {links.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={styles.navLink}>
              {s.label}
            </a>
          ))}
        </div>
        <div className={styles.navCounter} aria-live="polite">
          {counter}
        </div>
      </nav>
      <div className={styles.chromeRule} />
    </header>
  );
}
