import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Team from "./components/Team"
import VisionMission from "./components/VisionMission";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VisionMission/>
      <Team />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
