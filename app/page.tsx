import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Team from "./components/Team"
import VisionMission from "./components/VisionMission";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Adikwu & Co. - Principal Attorneys & Legal Services in Nigeria",
  description:
    "Expert law firm in Nigeria offering corporate law, legal advocacy, and consultation services. Led by Gabriel Adikwu with proven track record in legal representation across Nigeria.",
  keywords: [
    "Gabriel Adikwu",
    "Gabriel Adikwu & Co.",
    "Law firm Nigeria",
    "Legal services Nigeria",
    "Attorneys Nigeria",
    "Corporate law Nigeria",
    "Legal advocacy",
    "Nigerian lawyers",
    "Professional legal representation",
  ],
  openGraph: {
    title: "Gabriel Adikwu & Co. - Expert Legal Solutions in Nigeria",
    description:
      "Professional legal representation, corporate law, and advocacy services across Nigeria.",
    type: "website",
    url: "https://gabriel-adikwu.vercel.app",
    siteName: "Gabriel Adikwu & Co.",
  },
};

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
