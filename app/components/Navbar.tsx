"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Track which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "team" , "contact"];
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
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
    { id: "kevi", label: "Project" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Nav Links */}
      <nav className={`nav-links ${open ? "show" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
                <AnimatePresence>
                  {active === item.id && (
                    <motion.div
                      className="underline"
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
