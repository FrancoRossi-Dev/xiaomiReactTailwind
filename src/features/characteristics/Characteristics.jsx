import Section from "@/shared/Section";

import AnimatedHeader from "@/shared/animations/AnimatedHeader";
import CharacteristicsPlates from "./CharacteristicsPlates";

function Characteristics() {
  return (
    <Section id="characteristics">
      <AnimatedHeader
        title="Características"
        text="Conduce con mayor seguridad y autonomia"
      />
      <CharacteristicsPlates />
    </Section>
  );
}

export default Characteristics;
