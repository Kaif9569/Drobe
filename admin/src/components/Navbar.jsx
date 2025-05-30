import React from "react";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2  px-[4%]">
      <p className="text-[32px] font-Orbitron">Drobe</p>
      <button
        onClick={() => {
          setToken("");
        }}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7  rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
