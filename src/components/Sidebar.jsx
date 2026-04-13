const Sidebar = () => {
  return (
    <aside className="hidden text-sm md:block md:w-32 md:shrink-0">
      <div className="sticky top-10 space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Projects
          </p>

          <ul className="space-y-1">
            <li className="cursor-pointer text-gray-500 hover:text-black">
              NYC 2025
            </li>
            <li className="cursor-pointer text-gray-500 hover:text-black">
              LA 2025
            </li>
            <li className="cursor-pointer text-gray-500 hover:text-black">
              Riyadh 2025
            </li>
            <li className="cursor-pointer text-gray-500 hover:text-black">
              Coming Soon
            </li>
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
