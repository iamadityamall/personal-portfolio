import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { GrClose } from "react-icons/gr";



const Navbar = () => {
  const { sidebar, setSidebar } = useGlobalContext();

  return (
    <nav className="h-auto bg-primary sticky top-0 overflow-hidden py-4 px-2">
      <div className="flex justify-between items-center">
        {/* nav log is same for both mobile and desktop */}
        <div className="font-Poppins text-2xl p-2">Aditya Mall</div>

        {/* nav links icon for mobile version */}
        <div
          className="p-2 text-3xl cursor-pointer"
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <GrClose className="text-darkPurple" /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
