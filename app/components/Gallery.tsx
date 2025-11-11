"use client";

import { motion } from "framer-motion";
import { s } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/pic1.jpg", alt: "Gallery Image 1" },
  { src: "/pic2.jpg", alt: "Gallery Image 2" },
  { src: "/pic3.jpg", alt: "Gallery Image 3" },
  { src: "/pic9.jpg", alt: "Gallery Image 4" },
  { src: "/pic5.jpg", alt: "Gallery Image 5" },
  { src: "/pic11.jpg", alt: "Gallery Image 6" },
  { src: "/pic7.jpg", alt: "Gallery Image 7" },
  { src: "/pic10.jpg", alt: "Gallery Image 8" },
  { src: "/pic13.jpg", alt: "Gallery Image 9" },
  { src: "/pic12.jpg", alt: "Gallery Image 10" },
  { src: "/pic14.jpg", alt: "Gallery Image 11" },
  { src: "/pic15.jpg", alt: "Gallery Image 12" },
  { src: "/pic20.jpg", alt: "Gallery Image 14" },
  { src: "/pic21.jpg", alt: "Gallery Image 15" },
  { src: "/pic23.jpg", alt: "Gallery Image 17" },
  { src: "/pic24.jpg", alt: "Gallery Image 18" },   
  { src: "/pic25.jpg", alt: "Gallery Image 19" },
  { src: "/pic26.jpg", alt: "Gallery Image 20" },
  { src: "/pic27.jpg", alt: "Gallery Image 21" },
  { src: "/pic28.jpg", alt: "Gallery Image 22" },
  { src: "/pic30.jpg", alt: "Gallery Image 24" },
  { src: "/pic31.jpg", alt: "Gallery Image 25" },
  { src: "/pic32.jpg", alt: "Gallery Image 26" },
  { src: "/pic33.jpg", alt: "Gallery Image 27" },
  { src: "/pic34.jpg", alt: "Gallery Image 28" },
  { src: "/pic35.jpg", alt: "Gallery Image 29" },
  { src: "/pic36.jpg", alt: "Gallery Image 30" },
  { src: "/pic37.jpg", alt: "Gallery Image 31" },
  { src: "/pic39.jpg", alt: "Gallery Image 33" },
  { src: "/pic40.jpg", alt: "Gallery Image 34" },
  { src: "/pic42.jpg", alt: "Gallery Image 36" },
  { src: "/pic43.jpg", alt: "Gallery Image 37" },
  { src: "/pic44.jpg", alt: "Gallery Image 38" },
  { src: "/pic45.jpg", alt: "Gallery Image 39" },
  { src: "/pic46.jpg", alt: "Gallery Image 40" },
  {src: "/pic47.jpg", alt: "Gallery Image 41" },
  {src: "/pic48.jpg", alt: "Gallery Image 42" },
  {src: "/pic49.jpg", alt: "Gallery Image 43" },
  {src: "/pic50.jpg", alt: "Gallery Image 44" },
  {src: "/pic51.jpg", alt: "Gallery Image 45" },
  {src: "/pic52.jpg", alt: "Gallery Image 46" },
  {src: "/pic53.jpg", alt: "Gallery Image 47" },
  {src: "/pic55.jpg", alt: "Gallery Image 49" },
  {src: "/pic56.jpg", alt: "Gallery Image 50" },
  {src: "/pic57.jpg", alt: "Gallery Image 51" },
  {src: "/pic58.jpg", alt: "Gallery Image 52" },
  {src: "/pic59.jpg", alt: "Gallery Image 53" },
  {src: "/pic60.jpg", alt: "Gallery Image 54" },
  {src: "/pic61.jpg", alt: "Gallery Image 55" },
  {src: "/pic62.jpg", alt: "Gallery Image 56" },
  {src: "/pic63.jpg", alt: "Gallery Image 57" },
  {src: "/pic64.jpg", alt: "Gallery Image 58" },
  {src: "/pic65.jpg", alt: "Gallery Image 59" },
  {src: "/pic66.jpg", alt: "Gallery Image 60" },
  {src: "/pic67.jpg", alt: "Gallery Image 61" },
  {src: "/pic68.jpg", alt: "Gallery Image 62" },
  {src: "/pic69.jpg", alt: "Gallery Image 63" },
  {src: "/pic70.jpg", alt: "Gallery Image 64" },
  {src: "/pic71.jpg", alt: "Gallery Image 65" },
  {src: "/pic72.jpg", alt: "Gallery Image 66" },
  {src: "/pic73.jpg", alt: "Gallery Image 67" },
  
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
