import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Team from "./components/Team"
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
