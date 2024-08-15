import { UserContext } from "./hooks/userContext";
import { useContext, useEffect } from "react";
// import { googleLogout } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import FileUpload from "./FileUpload";
const Upload = () => {
  //   const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    // Check if userData is in local storage
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      // Parse and update the context with the stored userData
      setUserData(JSON.parse(storedUserData));
    }
  }, [setUserData]);

  //   const handleLogout = () => {
  //     // Clear local storage and context on logout
  //     googleLogout();
  //     localStorage.removeItem("userData");
  //     setUserData(null);
  //     navigate("/");
  //   };

  return (
    <div className="mt-10 text-black dark:text-white lg:mt-0">
      <div className="hidden lg:flex justify-between">
        <h1 className="font-figtree text-2xl font-semibold">Upload CSV</h1>
        <div className="flex  items-baseline gap-x-7">
          <IoMdNotifications className="lg:text-2xl text-xl text-black dark:text-white" />
          <img
            src={userData?.picture}
            className="rounded-full lg:w-10 lg:h-10 w-7 h-7 cursor-pointer"
            alt={userData?.name}
          />
        </div>
      </div>
      {/* Csv upload component render here | */}
      <div className="flex justify-center items-center w-full h-full">
        <FileUpload />
      </div>
    </div>
  );
};

export default Upload;
