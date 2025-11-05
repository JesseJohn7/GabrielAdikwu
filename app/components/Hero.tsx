"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Gabriel Adikwu & Co. (Elo-Heem Chambers) </h1>
          <p>
            At Gabriel Adikwu & Co. We uphold a legacy of integrity, excellence, and trusted legal representation for individuals and businesses alike.
          </p>
          <a href="#contact">
          <button>
              Book Consultation
            <ArrowRight size={18} />
          </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
