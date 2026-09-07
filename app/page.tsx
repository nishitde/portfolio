import Deck from "@/components/Deck";
import Intro from "@/components/sections/Intro";
import Timeline from "@/components/sections/Timeline";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Deck>
      <Intro />
      <Timeline />
      <Resume />
      <Contact />
    </Deck>
  );
}
