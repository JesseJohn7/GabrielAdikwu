"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Member {
  name: string;
  role: string;
  image: string;
}

const teamMembers: Member[] = [
  { name: "Gabriel Adikwu", role: "Lord Advocate", image: "/adikwu.jpg" },
  { name: "Oladiran Ridwan Mayokun", role: "Deputy Lord Advocate", image: "/team2.jpg" },
  { name: "Okandeji Nafisat Omodasola", role: "General Secretary", image: "/team3.jpg" },
  { name: "Oluwabukunmi Olanipekun", role: "Assistant General Secretary", image: "/team4.jpg" },
  { name: "Adebayo Femi", role: "Corporate Lawyer", image: "/team5.jpg" },
  { name: "Temitope Akin", role: "Litigation Lawyer", image: "/team6.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="team-section">
      <motion.h2
        className="team-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="team-grid">
        {teamMembers.map((m, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="team-img-wrapper"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={m.image}
                alt={m.name}
                width={300}
                height={300}
                className="team-img"
              />
            </motion.div>

            <motion.div
              className="team-info"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.25 + 0.3 }}
            >
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
