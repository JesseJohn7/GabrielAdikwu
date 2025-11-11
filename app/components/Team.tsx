"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: Member[] = [
  {
    name: "Barr Gabriel Adikwu",
    role: "Principal Attorney",
    image: "/adikwupict.jpg",
    bio: "Mr. Adikwu is a distinguished legal mind known for reshaping precedent and advancing Nigerian law through sound reasoning and integrity. Guided by the belief that law is philosophy in action, he approaches every case with fairness, depth, and purpose. A committed advocate for justice, he actively contributes to the Nigerian Bar Association and its committees on business law, consumer protection, and governance.",

  },
  {
    name: "Esq. Mercy Richard",
    role: "Head of Chamber",
    image: "/barrmercy.jpg",
    bio: "Ridwan specializes in legal research and case preparation. He supports the principal attorney in handling complex cases and delivering justice efficiently.",
  },
  {
    name: "Okandeji Nafisat Omodasola",
    role: "General Secretary",
    image: "/team3.jpg",
    bio: "Nafisat ensures the smooth administrative operations of the firm. She manages correspondence, meetings, and maintains professionalism at all times.",
  },
  {
    name: "Oluwabukunmi Olanipekun",
    role: "Assistant General Secretary",
    image: "/team4.jpg",
    bio: "Oluwabukunmi assists in firm documentation, handles client interactions, and ensures timely delivery of internal communications.",
  },
  {
    name: "Adebayo Femi",
    role: "Corporate Lawyer",
    image: "/team5.jpg",
    bio: "Adebayo is an expert in corporate governance, mergers, and compliance. He helps clients navigate business laws with confidence.",
  },
  {
    name: "Temitope Akin",
    role: "Litigation Lawyer",
    image: "/team6.jpg",
    bio: "Temitope represents clients in litigation matters and is known for her persuasive courtroom presence and dedication to justice.",
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

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
              <button
                className="see-more-btn"
                onClick={() => setSelectedMember(m)}
              >
                See More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{selectedMember.name}</h2>
            <p className="role">{selectedMember.role}</p>
            <p className="bio">{selectedMember.bio}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
