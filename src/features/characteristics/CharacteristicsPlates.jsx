import { motion } from "motion/react";

import Plate from "./Plate";

import characteristics_img from "@/assets/man-in-scooter.jpg";
import { delay } from "motion";
import { CHAR_COPY } from "@/data/copy";
import { useEffect, useState } from "react";

const container = {
  visible: {
    transition: { staggerChildren: 0.5, duration: 0.8, ease: "easeIn" },
  },
};

const containerMob = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: "easeIn" },
  },
};

function CharacteristicsPlates() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const handleChange = () => setIsMobile(media.matches);
    handleChange();

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const platesR = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
    transition: { ease: "easeOut" },
  };

  const platesL = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    transition: { ease: "easeOut" },
  };

  const allPlates = [...CHAR_COPY.left, ...CHAR_COPY.right];

  return (
    <>
      <div className="flex flex-col items-center gap-6 md:hidden md:flex-row [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
        <motion.div
          variants={containerMob}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {allPlates.map((item, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div variants={isEven ? platesL : platesR} key={i}>
                <Plate
                  title={item.title}
                  description={item.description}
                  svg={item.svg}
                  mobileVer
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="hidden flex-col items-center gap-6 md:flex md:flex-row [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {CHAR_COPY.left.map((item, i) => (
            <motion.div variants={platesL} key={i + "l"}>
              <Plate
                svgPosition="left"
                title={item.title}
                description={item.description}
                svg={item.svg}
              />
            </motion.div>
          ))}
        </motion.div>
        <figure className="hidden max-w-80 lg:block">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
            src={characteristics_img}
            className=""
            alt=""
          />
        </figure>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {CHAR_COPY.right.map((item, i) => (
            <motion.div variants={platesR} key={i + "r"}>
              <Plate
                svgPosition="right"
                title={item.title}
                svg={item.svg}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default CharacteristicsPlates;
