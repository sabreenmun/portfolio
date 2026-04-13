import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-6">
      {/* LEFT (desktop links) */}
      <div className="hidden md:flex gap-6 text-sm">
        <Link to="/photography">Photography</Link>
        <Link to="/design">Design</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/about">About</Link>
      </div>

      {/* CENTER (desktop) / LEFT (mobile) */}
      <div className="text-lg font-medium tracking-wide md:absolute md:left-1/2 md:-translate-x-1/2">
        <Link to="/">Sabreen Munassar</Link>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* Desktop socials */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://instagram.com/sabreennnnnn"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="transition hover:opacity-60" size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sabreen-munassar/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="transition hover:opacity-60" size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t mt-4 flex flex-col gap-4 text-sm px-6 py-4 md:hidden">
          <Link to="/photography" onClick={() => setMenuOpen(false)}>
            Photography
          </Link>
          <Link to="/design" onClick={() => setMenuOpen(false)}>
            Design
          </Link>
          <Link to="/guide" onClick={() => setMenuOpen(false)}>
            Guide
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <div className="flex gap-4 pt-2">
            <a
              href="https://instagram.com/sabreennnnnn"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="transition hover:opacity-60" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabreen-munassar/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="transition hover:opacity-60" size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;