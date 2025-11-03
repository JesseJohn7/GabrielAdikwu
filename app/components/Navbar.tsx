"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Projects</Link></li>
          <li><Link href="#">Contact</Link></li>
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
