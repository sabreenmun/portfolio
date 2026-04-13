const Sidebar = () => {
  return (
    <aside className="hidden md:block md:w-32 md:shrink-0 text-sm">
      <div className="sticky top-10 space-y-6">
        <div className="space-y-2">
          <p className="text-gray-400 uppercase tracking-wide text-xs">
            Projects
          </p>

          <ul className="space-y-1">
            <li className="text-gray-500 hover:text-black cursor-pointer">NYC 2025</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">LA 2025</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Riyadh 2025</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Coming Soon</li>
          </ul>
        </div>

        <div className="pt-6 text-xs text-gray-500">
          <p>Contact</p>
          <p className="mt-1 text-black">fotosbysab@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;