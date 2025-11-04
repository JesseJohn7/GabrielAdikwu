"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contact Us</h2>
          <p>We’d love to hear from you. Get in touch with our firm for consultations or legal inquiries.</p>

          <div className="contact-details">
            <div className="detail">
              <MapPin size={20} />
              <span>Jimeta, Yola, Nigeria</span>
            </div>
            <div className="detail">
              <Phone size={20} />
              <span>0806 652 2508</span>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://web.facebook.com/people/Gabriel-Adikwu-Company-Elo-Heem-Chambers/100054495847594/?_rdc=1&_rdr#" aria-label="Facebook"><Facebook /></a>
            {/* <a href="https://twitter.com/" aria-label="Twitter"><Twitter /></a> */}
            <a href="https://www.linkedin.com/in/Gabriel%20Christopher%20Adikwu?fbclid=IwY2xjawN2vMVleHRuA2FlbQIxMABicmlkETFiZWI4MUt3b2JxcWtZOFQ3AR4oKgJAd1lSX60uRsSdEccPX5ovyeWNQxqrCVlecD9NjlKyz7rks_630cxWaA_aem_ZPGGK9TstJWTl2fuUxY-Yw" aria-label="LinkedIn"><Linkedin /></a>
         {/*    <a href="https://www.instagram.com/" aria-label="Instagram"><Instagram /></a> */}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="map-container"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.721177619526!2d12.454732759046427!3d9.266009756070916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b7bed4cfe59%3A0xa5375e35d312d6b7!2sJOSKREL%20COMPANY!5e1!3m2!1sen!2sng!4v1762246819116!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
