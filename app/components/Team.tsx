"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Member {
  name: string;
  role: string;
  image: string;
}

const teamMembers: Member[] = [
  {
    name: "Abiona Omotolani Aramide",
    role: "Lord Advocate",
    image: "/adikwu.jpg",
  },
  {
    name: "Oladiran Ridwan Mayokun",
    role: "Deputy Lord Advocate",
    image: "/team2.jpg",
  },
  {
    name: "Okandeji Nafisat Omodasola",
    role: "General Secretary",
    image: "/team3.jpg",
  },
  {
    name: "Oluwabukunmi Olanipekun",
    role: "Assistant General Secretary",
    image: "/team4.jpg",
  },
  {
    name: "Adebayo Femi",
    role: "Corporate Lawyer",
    image: "/team5.jpg",
  },
  {
    name: "Temitope Akin",
    role: "Litigation Lawyer",
    image: "/team6.jpg",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((m, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="team-img-wrapper">
              <Image
                src={m.image}
                alt={m.name}
                width={300}
                height={300}
                className="team-img"
              />
            </div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <p>{m.role}</p>
              <a href="#" className="team-more">More</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
