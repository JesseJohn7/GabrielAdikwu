"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "vision", "team", "events", "gallery", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "vision", label: "Vision" },
    { id: "team", label: "Team" },
    { id: "events", label: "Events" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Gabriel Adikwu & Co. Logo"
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-gray-800 leading-tight">Gabriel Adikwu & Co.</p>
            <p className="text-xs text-gray-500">Elo-Heem Chambers</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
              <AnimatePresence>
                {active === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-black rounded-full"
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>

        {/* Book Consultation CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block text-sm font-semibold bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Book Consultation
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 text-sm font-medium border-b border-gray-50 transition-colors ${
                  active === item.id ? "text-black font-semibold" : "text-gray-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-3 w-full bg-black text-white text-sm font-semibold py-2.5 rounded-full"
            >
              Book Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;