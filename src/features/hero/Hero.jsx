import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

import Section from "../../shared/Section";
import Button from "../../shared/Button";

import x5MaxImage from "../../assets/x-5max.png";
import heroImage from "../../assets/bg-images/bg-hero.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.35,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scooterEntrance = {
  hidden: { opacity: 0, x: 120, scale: 0.92 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

function Hero() {
  function handleCTA() {
    const section = document.getElementById("join");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [-500, 500], [-5, 5]);
  const rotateX = useTransform(mouseY, [-500, 500], [5, -5]);

  const moveX = useTransform(mouseX, [-500, 500], [-18, 18]);
  const moveY = useTransform(mouseY, [-500, 500], [-10, 10]);

  useEffect(() => {
    function handleMove(e) {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      mouseX.set(x);
      mouseY.set(y);
    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <Section
      id="hero"
      bgIMG={heroImage}
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center pb-15 md:pt-20"
      contentClassName="group flex w-full flex-col items-center justify-center text-center md:flex-row"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col items-center perspective-[1200px] md:flex-row md:justify-center md:gap-16"
      >
        {/* CARD */}

        <motion.div
          variants={card}
          className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-black/20 p-8 shadow-[0_0_8px_rgba(0,234,255,0.12)] backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/30 md:-mt-50 md:max-w-100"
        >
          <h1 className="group-hover:text-primary m-0 transition-colors duration-300">
            Xiaomi 5 max
          </h1>

          <p>
            <span className="group-hover:text-primary font-bold transition-colors duration-300">
              Explora nuevos destinos con total libertad:
            </span>{" "}
            llega más lejos, con una suavidad incomparable y el respaldo de una
            tecnología pensada para acompañarte en cada kilómetro.
          </p>

          <Button onClick={handleCTA} id="cta">
            Comenzar mi viaje
          </Button>
        </motion.div>

        {/* SCOOTER AREA */}

        <motion.div
          variants={scooterEntrance}
          className="relative z-10 -mt-30 ml-40 flex items-center justify-center md:mt-0 md:-ml-40"
          style={{
            rotateX,
            rotateY,
            x: moveX,
            y: moveY,
          }}
        >
          {/* ELECTRIC GLOW */}

          <motion.div
            className="absolute bottom-2 h-16 w-[60%] rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(0,234,255,0.8) 0%, rgba(0,234,255,0.25) 40%, rgba(0,234,255,0) 70%)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* SCOOTER */}

          <motion.img
            src={x5MaxImage}
            alt="Imagen del monopatín eléctrico xiaomi 5 max"
            className="relative h-[40vh] transform-gpu opacity-95 md:h-[75vh]"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}

export default Hero;
