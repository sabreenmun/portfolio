const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
      
      {/* LOGO */}
      <div className="text-center text-lg font-medium tracking-wide md:text-left">
        <Link to="/">Sabreen Munassar</Link>
      </div>

      {/* LINKS */}
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <Link to="/photography">Photography</Link>
        <Link to="/other">Other Work</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/about">About</Link>
      </div>

      {/* ICONS */}
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