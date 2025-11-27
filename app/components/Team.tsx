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
    name: "Gabriel Christopher Adikwu ESQ",
    role: "Principal Counsel",
    image: "/adikwupict.jpg",
    bio: "Gabriel Adikwu is a lawyer whose career has evolved like a finely woven mosaic,stitched together by rigorous intellect,relentless advocacy and a vision that law,when rightly applied is a profession and a form of civic advocacy.For close to two decades from his call to the Nigerian Bar in 2008 and notarary public in 10 December in 2024 ,Adikwu has journeyed through a series of litigation , commercial arbitration and constitutional disputes. From courtrooms across various states of the federation and the Federal Capital Territory (FCT) to the august halls of the Court of Appeal and the Supreme Court of Nigeria his story is not simply that of a lawyer winnning cases but the story of a man steadily proven that the law is a technical instrument of society and an eternal dialogue between power and justice ",

  },
  {
    name: "Mercy Richard ESQ",
    role: "Head of Chambers",
    image: "/barrmercy.jpg",
    bio: "Mercy Richard is a distinguished graduate with honours from the prestigious University of Jos (LLB, Honours). She obtained her BL from the Nigerian Law School and was called to the Nigerian Bar in 2022. She is a practicing lawyer with extensive expertise in estate and property law, family law, corporate and commercial law, with a particular focus on litigation. Beyond her legal practice, Mercy is a passionate human rights activist and child rights advocate, committed to promoting justice and protecting the vulnerable. She is also an accomplished public speaker, arbitrator, and mediator, bringing professionalism and insight to every engagement. Mercy is an active member of the Nigerian Bar Association (NBA) and FIDA, Yola Branch, contributing significantly to the advancement of legal practice and the promotion of ethical standards within the profession.",
  },
  {
    name: "M.M Fattim ESQ",
    role: "Counsel",
    image: "/fattim.jpg",
    bio: "Barr Miri Mercy Fattim is a young enthusiatic and resourceful legal practicioner called to the Nigerian Bar in 2025. She holds a Bachelor of Laws (LL.B) degree from Near East University (Cyprus), a Master of Laws (LLM) in international Law , a member of the international Law  , a member of international Law Association (ILA) an associate of the institute of chartered mediators and concilators (AICMC) amd completed her professional training at the Nigerian Law School. Her professional interests span across Litigation,Property Law ,International Commercial Law,International disputes settlement ,Arbitration and Maritime Law,with sound theoritical and field proficency .she exbits immense ability to perform Emperical Research and give practical suggestions reflecting a deep curiosity and progressive outlook towards emerging areas of law.",
  },
  /* {
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
    name: "M.M Fattim",
    role: "Litigation Lawyer",
    image: "/team6.jpg",
    bio: "Temitope represents clients in litigation matters and is known for her persuasive courtroom presence and dedication to justice.",
  }, */
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
