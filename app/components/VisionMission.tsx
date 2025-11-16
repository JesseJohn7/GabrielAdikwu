"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Scale, Globe, Target } from "lucide-react";

interface ValueItem {
  title: string;
  icon: JSX.Element;
  text: string;
}

export default function VisionMission() {
  const values: ValueItem[] = [
    {
      title: "Our Core Mission",
      icon: <Scale size={36} className="text-[#b28a3a]" />,
      text: "To build and uphold a legal practice geared towards the promotion of justice and the rule of law, entrenched in excellence, integrity, and outstanding service delivery. We aim to provide a strong voice for the downtrodden and ensure that every individual, regardless of status, has access to quality legal representation.",
    },
    {
      title: "Our Vision",
      icon: <Globe size={36} className="text-[#b28a3a]" />,
      text: "To be a leading law firm recognized locally and internationally for promoting justice, integrity, and social equity—empowering individuals, businesses, and communities through sound legal counsel and unwavering commitment to the rule of law.",
    },
  ];

  return (
    <section id="vision" className="vision-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Core Values
      </motion.h2>

      <motion.div
        className="vision-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {values.map((item, index) => (
          <motion.div
            key={index}
            className="vision-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
