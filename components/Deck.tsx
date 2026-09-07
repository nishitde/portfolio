"use client";

import { sections } from "@/content/site";
import { useDeckMotion } from "@/lib/useDeckMotion";
import Nav from "./Nav";
import Rail from "./Rail";

const ids = sections.map((s) => s.id);

/**
 * Client shell for the deck. Owns the active-section state that the nav
 * counter and the rail both read; the sections themselves stay static.
 */
export default function Deck({ children }: { children: React.ReactNode }) {
  const active = useDeckMotion(ids);

  return (
    <>
      <Nav active={active} />
      <Rail active={active} />
      <main>{children}</main>
    </>
  );
}
