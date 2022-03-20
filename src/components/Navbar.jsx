import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { MdClose } from "react-icons/md";
import { navLinks } from "../data";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const { sidebar, setSidebar } = useGlobalContext();

  return (
    <nav className="h-auto bg-primary sticky top-0 overflow-hidden py-2 z-100">
      <div className="flex justify-between items-center">
        {/* nav log is same for both mobile and desktop */}
        <Link
          to={navLinks[0].page}
          spy={true}
          smooth={true}
          offset={-64}
          duration={600}
          className="text-3xl p-2 cursor-pointer font-Lato font-semibold text-darkPurple"
        >
          AM
        </Link>

        {/* nav links md, lg, xl */}
        <div className="hidden sm:flex justify-center items-center text-sm space-x-2">
          {navLinks.map((navLink) => {
            const { id, page } = navLink;
            return (
              <Link
                to={page}
                spy={true}
                smooth={true}
                offset={-64}
                duration={600}
                key={id}
                className="cursor-pointer p-3 rounded-lg hover:bg-black/25 font-Poppins sm:hover:text-darkPurple sm:hover:bg-secondary sm:hover:border-2 sm:hover:border-darkPurple"
              >
                {page}
              </Link>
            );
          })}
        </div>

        {/* nav links icon for mobile version */}
        <div
          className="p-2 text-3xl cursor-pointer sm:hidden"
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <MdClose className="text-darkPurple"/> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
