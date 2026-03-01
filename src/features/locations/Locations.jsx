import { motion } from "motion/react";

import Section from "@/shared/Section";
import storeImg from "@/assets/xiomi-store.jpg";
import LocationTable from "./LocationTable";
import AnimatedHeader from "@/shared/animations/AnimatedHeader";

const figure = {
  hidden: { opacity: 0, y: -40 },
  revael: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeIn" } },
};

function locations() {
  return (
    <Section
      id="locations"
      className="bg-neutral-900"
      contentClassName="max-w-full"
    >
      <AnimatedHeader
        title="TIENDA"
        text="Puede encontrar este y otros productos en cualquiera de nuestros locales:"
      />
      <div className="grid grid-cols-6 gap-6">
        <motion.figure
          className="col-span-2 hidden lg:block"
          variants={figure}
          initial="hidden"
          whileInView="revael"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            className="h-full object-cover object-center"
            src={storeImg}
            alt="Imagen de una tienda de xiaomi"
          />
        </motion.figure>
        <LocationTable />
      </div>
    </Section>
  );
}

export default locations;
