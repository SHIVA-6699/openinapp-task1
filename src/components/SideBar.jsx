import { GoSidebarCollapse } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineUploadFile } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { TbTicket } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import Upload from "./Upload";
import ToggleButton from "./Shared/ToggleButton";
import { UserContext } from "./hooks/userContext";
import { useContext, useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
const SideBar = () => {
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [setUserData]);
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard"); // State to track selected menu item

  const Menus = [
    {
      title: "Dashboard",
      src: "Chart_fill",
      icon: <RxDashboard className="text-xl" />,
    },
    {
      title: "Upload",
      src: "Chat",
      icon: <MdOutlineUploadFile className="text-xl" />,
    },
    { title: "Invoice", src: "User", icon: <TbTicket className="text-xl" /> },
    {
      title: "Schedule",
      src: "Calendar",
      icon: <CgFileDocument className="text-xl" />,
    },
    {
      title: "Calendar",
      src: "Search",
      icon: <CiCalendarDate className="text-xl" />,
    },
    {
      title: "Notification",
      src: "Chart",
      icon: <IoMdNotificationsOutline className="text-xl" />,
    },
    {
      title: "Setting",
      src: "Setting",
      icon: <CiSettings className="text-xl" />,
    },
  ];

  // Function to render content based on the selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case "Dashboard":
        return (
          <h1 className="text-2xl  mt-10 lg:mt-0  font-semibold">Dashboard Content</h1>
        );
      case "Upload":
        return <Upload />;

      case "Invoice":
        return (
          <h1 className="text-2xl mt-10 lg:mt-0  font-semibold">Invoice Content</h1>
        );
      case "Schedule":
        return (
          <h1 className="text-2xl mt-10 lg:mt-0  font-semibold">Schedule Content</h1>
        );
      case "Calendar":
        return (
          <h1 className="text-2xl mt-10 lg:mt-0  font-semibold">Calendar Content</h1>
        );
      case "Notification":
        return (
          <h1 className="text-2xl mt-10 lg:mt-0  font-semibold">Notification Content</h1>
        );
      case "Setting":
        return (
          <h1 className="text-2xl mt-10 lg:mt-0  font-semibold">Setting Content</h1>
        );
      default:
        return <h1 className="text-2xl mt-10 lg:mt-0  font-semibold">Home</h1>;
    }
  };

  return (
    <div className="flex transition-all duration-700">
      {/* Mobile View Toggle Icon */}
      <div className="lg:hidden w-full fixed z-50 min-h-fit transition-all duration-700">
        {mobileOpen ? (
          <FaTimes
            className="text-2xl text-gray-800 dark:text-white ms-auto me-4 cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        ) : (
          <div className="flex justify-between  w-full h-full bg-white dark:bg-[#0D0D0D] shadow-md ">
            <div className="flex items-center gap-x-2  px-2 ">
              <FaBars
                className="text-2xl text-gray-800 dark:text-white cursor-pointer"
                onClick={() => setMobileOpen(true)}
              />
              <div className="flex items-center gap-x-2 px-1 dark:bg-white w-fit h-fit rounded-full ">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="14.678"
                    cy="14.5"
                    rx="13.3048"
                    ry="13.7483"
                    fill="#605BFF"
                  />
                  <path
                    d="M0.707886 13.3543L10.6865 18.3954L19.5564 10.8338L28.2045 15.4166"
                    stroke="#F5F5F5"
                    strokeWidth="1.6958"
                  />
                </svg>
                <span className="text-[26.5px] font-montserrat">Base</span>
              </div>
            </div>
            <div className="flex p-3 items-baseline gap-x-6">
              <IoMdNotifications className="lg:text-2xl text-xl dark:text-white" />
              <img
                src={userData?.picture}
                className="rounded-full lg:w-10 lg:h-10 w-7 h-7"
                alt={userData?.name}
              />
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-28"
        } bg-white dark:bg-[#0D0D0D] dark:text-white shadow-xl min-h-screen  p-5 pt-8 fixed top-0 left-0 z-40 duration-700 lg:block ${
          mobileOpen ? "block" : "hidden"
        } lg:relative lg:z-auto lg:top-0 lg:left-0`}
      >
        {/* Collapse Icon */}

        {/* Logo */}
        <div className="flex justify-between">
          <div className="flex gap-x-4 items-center">
            <img
              src="Sidebar/logo.png"
              className={`cursor-pointer duration-700 w-8 h-8`}
            />
            <h1
              className={` origin-left font-medium text-xl text-gray-900 dark:text-white duration-700 ${
                !open && "scale-0"
              }`}
            >
              Base
            </h1>
          </div>
          <GoSidebarCollapse
            className={`text-2xl cursor-pointer lg:block hidden  text-gray-800 dark:text-white border-gray-300
                      duration-700  ${mobileOpen ? "hidden" : "block"}`}
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Menu Items */}
        <ul className="pt-6 space-y-3">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer  text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                selectedMenu === Menu.title && "bg-gray-200 dark:bg-[#1F1F1F] "
              }`}
              onClick={() => {
                setSelectedMenu(Menu.title);
                setMobileOpen(false); // Close the sidebar in mobile view after selection
              }}
            >
              {Menu.icon}
              <span
                className={`${
                  !open && "hidden"
                } origin-top transition-all duration-700 text-gray-800 dark:text-white`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 py-5">
          <ToggleButton />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="min-h-screen bottom-0 dark:bg-[#161616] dark:text-white flex-1 p-7 ">
        {renderContent()}
      </div>

      {/* Overlay for Mobile Sidebar */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50  z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default SideBar;
