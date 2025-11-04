"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      {/* Text side animation */}
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Gabriel Adikwu & Co
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Gabriel Adikwu & Co is a trusted law firm with over 2 years of experience
          providing top-notch legal services. Our team specializes in corporate,
          civil, and criminal law, ensuring our clients receive expert guidance
          and representation.
        </motion.p>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        Contact Us
      </motion.button>

      </motion.div>

      {/* Image side animation */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
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
