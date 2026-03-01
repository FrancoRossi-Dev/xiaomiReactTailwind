import { motion } from "framer-motion";

import Section from "../../shared/Section";
import Button from "../../shared/Button";

import x5MaxImage from "../../assets/x-5max.png";
import heroImage from "../../assets/bg-images/bg-hero.jpg";

function Hero() {
  function handleCTA() {
    alert("cta clicked");
  }

  return (
    <Section
      id="hero"
      bgIMG={heroImage}
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center pb-15 md:pt-20"
      contentClassName="group flex w-full flex-col items-center justify-center text-center md:flex-row"
    >
      <motion.div
        className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-black/10 p-8 shadow-[0_0_5px_5px_rgba(0,234,255,0.086)] backdrop-blur-sm transition-all duration-300 **:transition-all **:duration-300 group-hover:bg-black/20 group-hover:shadow-[0_0_10px_6px_rgba(0,234,255,0.18)] md:mt-0 md:max-w-100"
        initial={{ opacity: 0, filter: "brightness(0.3)" }}
        animate={{ opacity: 1, filter: "brightness(1)" }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.5,
        }}
      >
        <h1 className="group-hover:text-primary m-0">Xiaomi 5 max</h1>

        <p>
          <span className="group-hover:text-primary font-bold">
            Explora nuevos destinos con total libertad:
          </span>{" "}
          llega más lejos, con una suavidad incomparable y el respaldo de una
          tecnología pensada para acompañarte en cada kilómetro.
        </p>

        <Button onClick={handleCTA} id="cta">
          Comenzar mi viaje
        </Button>
      </motion.div>

      <motion.img
        src={x5MaxImage}
        alt="Imagen del monopatín eléctrico xiaomi 5 max"
        className="z-10 -mt-30 ml-40 h-[40vh] opacity-85 transition-opacity duration-300 group-hover:opacity-100 md:mt-0 md:h-[75vh]"
        initial={{ opacity: 0, x: 100, scale: 0.7 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </Section>
  );
}

export default Hero;
