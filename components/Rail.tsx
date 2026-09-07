import { sections } from "@/content/site";
import styles from "./deck.module.css";

export default function Rail({ active }: { active: number }) {
  return (
    <nav className={styles.rail} aria-label="Section progress">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={styles.railDot}
          aria-label={s.label}
          aria-current={i === active ? "true" : undefined}
        >
          <span
            className={`${styles.railBar} ${i === active ? styles.railBarActive : ""}`}
          />
        </a>
      ))}
    </nav>
  );
}
