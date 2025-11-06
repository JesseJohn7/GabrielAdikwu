"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/pic1.jpg", alt: "Gallery Image 1" },
  { src: "/pic2.jpg", alt: "Gallery Image 2" },
  { src: "/pic3.jpg", alt: "Gallery Image 3" },
  { src: "/pic9.jpg", alt: "Gallery Image 4" },
  { src: "/pic5.jpg", alt: "Gallery Image 5" },
  { src: "/pic6.jpg", alt: "Gallery Image 6" },
  { src: "/pic7.jpg", alt: "Gallery Image 7" },
  { src: "/pic8.jpg", alt: "Gallery Image 8" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <motion.h2
        className="gallery-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Gallery
      </motion.h2>

      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={200}
              className="gallery-img"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="gallery-more"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="https://web.facebook.com/profile.php?id=100054495847594&sk=photos"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-link"
        >
          View More Photos
        </Link>
      </motion.div>
    </section>
  );
}
