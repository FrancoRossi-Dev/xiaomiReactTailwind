import NavLink from "./NavLink";
import Logo from "../../shared/Logo";
import Button from "../../shared/Button";
import { navLinks } from "@/data/copy";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const handleChange = () => setIsMobile(media.matches);
    handleChange();

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  function handleJoin() {
    document.getElementById("join")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const { scrollY } = useScroll();

  // Desaparece entre 0px y 120px
  const opacity = useTransform(scrollY, [0, 90], [1, 0]);
  const y = useTransform(scrollY, [0, 90], [0, -20]);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full flex-col items-center justify-around bg-black/10 backdrop-blur-sm transition-all duration-300 ${scrolled ? "py-2" : "py-4"} md:h-18 md:flex-row`}
    >
      <motion.a
        href="#"
        aria-label="Go back to the top"
        className="flex items-center justify-center overflow-hidden"
        animate={
          isMobile && scrolled
            ? { opacity: 0, y: -20, height: 0, marginBottom: 0 }
            : { opacity: 1, y: 0, height: 80, marginBottom: 0 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Logo cn="h-20 py-2 md:h-8" />
      </motion.a>

      <nav>
        <ul className="flex space-x-4 py-2 md:py-0">
          {navLinks.map((link) => {
            return (
              <li key={link.text} className="flex items-center">
                <NavLink href={link.href} text={link.text} />
              </li>
            );
          })}
          <li>
            <Button onClick={handleJoin}>Unirme</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
