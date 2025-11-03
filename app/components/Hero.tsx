"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Justice. Integrity. Excellence.</h1>
          <p>
            At Lex & Partners, we provide trusted legal guidance and
            representation tailored to your needs.
          </p>
          <button>
            Book Consultation <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
