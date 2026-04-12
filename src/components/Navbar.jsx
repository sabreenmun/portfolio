import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between px-10 py-6">
      {/* LEFT */}
      <div className="flex gap-6 text-sm">
        <Link to="/photography">Photography</Link>
        <Link to="/other">Other Work</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/about">About</Link>
      </div>

      {/* CENTER */}
      <div className="absolute left-1/2 -translate-x-1/2 text-lg font-medium tracking-wide">
        <Link to="/">Sabreen Munassar</Link>
      </div>

      {/* RIGHT */}
      <div className="flex gap-6 text-sm">
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
