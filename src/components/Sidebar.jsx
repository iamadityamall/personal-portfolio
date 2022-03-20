import React from "react";
import { navLinks } from "../data";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const Sidebar = () => {
  const { sidebar, setSidebar } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      if (sidebar) {
        setSidebar(false);
      }
    }, 5000);
  }, [setSidebar, sidebar]);

const handleClick = (e) => {
  e.preventDefault();
  setSidebar(!sidebar);
  const target = e.target.getAttribute('href');
  const location = document.querySelector(target).offsetTop;
  
  window.scrollTo({
    left:0,
    top: location - 80,
  })
  
}

  return (
    <>
      {/* nav links for mobile version */}
      <div
        className={
          sidebar
            ? "rounded-xl bg-primary fixed right-0 mr-[5vw] shadow-md border-2 border-black"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center p-2 place-items-center">
          {navLinks.map((navLink) => {
            const { id, page, path } = navLink;
            return (
              <a
                key={id}
                href={path}
                className=" p-3 text-lg rounded-lg font-Poppins hover:text-black/70"
                onClick={handleClick}
              >
                {page}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
