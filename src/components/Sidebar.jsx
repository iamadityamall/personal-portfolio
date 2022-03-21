import React from "react";
import { navLinks } from "../data";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
  const { sidebar, setSidebar } = useGlobalContext();

  useEffect(() => {
    if (sidebar) {
      setTimeout(() => {
        setSidebar(false);
      }, 5000)
    }
  }, [setSidebar, sidebar]);


  return (
    <>
      {/* nav links for mobile version */}
      <div
        className={
          sidebar
            ? "rounded-xl bg-primary fixed right-0 mr-[5vw] shadow-md border-2 border-darkPurple"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center p-2 place-items-center sm:hidden">
          {navLinks.map((navLink) => {
            const { id, page } = navLink;
            return (
              <Link
                to={page}
                spy={true}
                smooth={true}
                offset={-62}
                duration={600}
                key={id}
                className=" p-3 text-lg rounded-lg font-Poppins cursor-pointer hover:text-darkPurple"
                onClick={() => setSidebar(!sidebar)}
              >
                {page}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
