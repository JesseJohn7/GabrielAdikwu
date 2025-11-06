"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Gabriel Adikwu & Co Annual Lecture 2025",
    date: "17 May, 2025",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy.",
    image: "/event1.jpg",
  },
  {
    title: "Gabriel Adikwu & Co Annual Lecture 2024",
    date: "27 April, 2024",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/event2.jpg",
  },
  {
    title: "Gabriel Adikwu & Co Annual Lecture 2023",
    date: "June 8, 2023",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/event3.jpg",
  },
];

export default function Events() {
  return (
    <section id="events" className="events-section">
      <motion.h2
        className="events-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Events
      </motion.h2>

      <div className="events-grid">
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="event-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="event-img"
              style={{ backgroundImage: `url(${event.image})` }}
            ></div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
