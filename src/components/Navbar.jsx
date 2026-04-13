import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="relative flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
      
      {/* LEFT */}
      <div className="flex flex-wrap justify-center gap-4 text-sm md:justify-start">
        <Link to="/photography">Photography</Link>
        <Link to="/other">Other Work</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/about">About</Link>
      </div>

      {/* CENTER */}
      <div className="text-center text-lg font-medium tracking-wide md:absolute md:left-1/2 md:-translate-x-1/2">
        <Link to="/">Sabreen Munassar</Link>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center gap-4 md:justify-end">
        <a
          href="https://instagram.com/sabreennnnnn"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="hover:opacity-60 transition" size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sabreen-munassar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:opacity-60 transition" size={20} />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;