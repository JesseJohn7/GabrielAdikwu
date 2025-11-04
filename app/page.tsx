import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Team from "./components/Team"
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Contact />
    </main>
  );
}
