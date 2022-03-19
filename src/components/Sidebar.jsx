import React from "react";
import { navLinks } from "../data";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { sidebar, setSidebar} = useGlobalContext();
  const hideSidebar = () => {
      setSidebar(!sidebar)
  }

  return (
    <>
      {/* nav links for mobile version */}
      <div
        className={
          sidebar
            ? "rounded-xl bg-secondary fixed right-0 mr-[5vw]"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center p-4 place-items-end">
          {navLinks.map((navLink) => {
            const { id, page } = navLink;
            return (
              <a key={id} href={`#${page}`} className="text-darkPurple p-5 text-2xl rounded-lg hover:bg-lightPurple/40 font-Poppinsd" onClick={() => hideSidebar()}>
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
