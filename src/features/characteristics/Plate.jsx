import { motion, useAnimationControls } from "motion/react";
import { useEffect, useState } from "react";

function Plate({ title, description, svg, mobileVer = false }) {
  const [isOpen, setIsOpen] = useState(mobileVer ? false : true);

  const controls = useAnimationControls();

  function handleClick() {
    console.log(isOpen);
    if (!mobileVer) return;
    setIsOpen(!isOpen);
  }

  const handleHoverStart = () => {
    controls.start({ opacity: 1, transition: { duration: 0.2 } });
  };

  const handleHoverEnd = () => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <motion.article
      className="styled-container w-[80dvw] md:min-h-40 md:w-auto"
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <img src={svg} />
      <div>
        <h3>{title}</h3>
        {isOpen && <p>{description}</p>}
      </div>
    </motion.article>
  );
}

export default Plate;
