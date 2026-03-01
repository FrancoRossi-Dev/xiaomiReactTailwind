import NavBar from "@/features/navigation/NavBar";
import Hero from "@/features/hero/Hero";
import Characteristics from "@/features/characteristics/Characteristics";
import Locations from "@/features/locations/Locations";
import Testimonials from "./features/testimonials/Testimonials";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Characteristics />
      <Locations />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
