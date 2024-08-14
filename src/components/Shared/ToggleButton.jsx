import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import  useDarkMode  from "../hooks/DarkMode";
const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div
      className={`flex items-center justify-around  w-16 h-8 rounded-full cursor-pointer
        ${enabled ? "bg-gray-700 text-white" : "bg-white text-black"}
        `}
      onClick={() => {
        setEnabled(!enabled);
        setDarkMode(!darkMode);
      }}
    >
      <IoSunnyOutline
        className={`${
          !enabled
            ? "shadow-xl bg-gray-200 transition-all duration-700 rounded-full text-2xl p-1"
            : ""
        }`}
      />
      <IoMoonOutline
        className={`${
          enabled
            ? "shadow-xl bg-[#1F1F1F] transition-all duration-700 rounded-full text-2xl p-1"
            : ""
        }`}
      />
    </div>
  );
};

export default ToggleButton;
