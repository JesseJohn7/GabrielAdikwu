"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="about">
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Lex & Partners</h2>
        <p>
          Lex & Partners is a trusted law firm with over 2 years of experience
          providing top-notch legal services. Our team specializes in corporate,
          civil, and criminal law, ensuring our clients receive expert guidance
          and representation.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/chamber.jpg"
          alt="Law Firm Office"
          width={550}
          height={400}
          className="rounded-image"
        />
      </motion.div>
    </section>
  );
}
