import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineClose,
  AiOutlineBars,
} from "react-icons/ai";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent flex justify-between lg:justify-around md:justify-around items-center z-20 text-white py-5 px-3 font-nunito font-bold">
      <div className="">logo</div>
      <ul className="flex justify-around gap-0 md:gap-20">
        <li className="hidden md:block lg:block text-lg text-white font-semi">
          Home
        </li>
        <li className="hidden md:block lg:block text-lg text-white font-semi">
          Movies
        </li>
        <li className="hidden md:block lg:block text-lg text-white font-semi">
          Series
        </li>
      </ul>

      <div className="flex items-center justify-center gap-5" id="sidebar">
        {sidebarOpen ? (
          <AiOutlineClose
            className="block md:hidden lg:hidden text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <AiOutlineBars
            className="block md:hidden lg:hidden text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        )}

        <AiFillLinkedin className="text-2xl cursor-pointer hidden md:block lg:block" />
        <AiFillGithub className="text-2xl cursor-pointer hidden md:block lg:block " />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-tl from-white/10 to-[#102c53] backdrop-blur-lg  w-64 p-4 transition-transform duration-300  ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="background"
      >
        {sidebarOpen && (
          <div
            className="absolute top-4 right-4 text-white cursor-pointer"
            onClick={toggleSidebar}
          >
            <AiOutlineClose className="text-2xl" />
          </div>
        )}

        <ul className="text-white">
          <li className="py-2">Sidebar Link 1</li>
          <li className="py-2">Sidebar Link 2</li>
          <li className="py-2">Sidebar Link 3</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
