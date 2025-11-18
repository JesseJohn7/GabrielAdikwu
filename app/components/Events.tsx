"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Gabriel Adikwu & Co Annual Lecture 2025",
    date: "17th May, 2025",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy.",
    image: "/event1.jpg",
  },
  {
    title: "Gabriel Adikwu & Co Annual Lecture 2024",
    date: "27th April, 2024",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/event2.jpg",
  },
  {
    title: "Gabriel Adikwu & Co Annual Lecture 2023",
    date: "8th July, 2023",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/event3.jpg",
  },
    {
    title: "Gabriel Adikwu & Co Annual Lecture 2022",
    date: "26th March, 2022",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/2022.jpg",
  },
    {
    title: "Gabriel Adikwu & Co Annual Lecture 2021",
    date: "10th April, 2021",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/2021.jpg",
  },
    {
    title: "Gabriel Adikwu & Co Annual Lecture 2020",
    date: "13 June, 2020",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/2020.jpg",
  },
    {
    title: "Gabriel Adikwu & Co Annual Lecture 2019",
    date: "2nd July, 2019",
    description:
      "A gathering of top legal minds discussing justice reform, technology, and policy",
    image: "/2019.jpg",
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
