import { useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import TableComponent from "./Shared/TableComponent";
import { LuUpload } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FileUpload = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const allowedExtensions = ["csv", "xlsx"];

  const notify = (info) => toast(info);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      setFileName(file.name);

      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        notify("Invalid File Format");
        setLoading(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        if (fileExtension === "csv") {
          const csv = Papa.parse(event.target.result, { header: true });
          setData(csv.data);
        } else if (fileExtension === "xlsx") {
          const workbook = XLSX.read(event.target.result, { type: "binary" });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setData(jsonData);
        }
        setLoading(false);
        notify("File Uploaded Successfully");
      };

      if (fileExtension === "csv") {
        reader.readAsText(file);
      } else if (fileExtension === "xlsx") {
        reader.readAsBinaryString(file);
      }
    }
  };

  const handleUploadClick = () => {
    if (data.length > 0) {
      setShowTable(true);
    }
  };

  const handleRemoveFile = () => {
    setData([]);
    setShowTable(false);
    setFileName("");
    notify("File Removed Successfully");
  };

  return (
    <div className=" flex flex-col items-center space-y-10 w-[16rem] lg:w-full">
      <div className="bg-white shadow-md dark:bg-[#0D0D0D] border dark:border-none rounded-lg text-center p-10 max-w-md lg:max-w-xl w-full">
        <div
          className="border-dashed border-2 border-gray-300 rounded-lg p-10 flex text-center flex-col items-center justify-center"
          onClick={() => document.getElementById("fileInput").click()}
          style={{ cursor: "pointer" }}
        >
          {!fileName && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypeExcel0"
                    x1="4.494"
                    x2="13.832"
                    y1="-2092.086"
                    y2="-2075.914"
                    gradientTransform="translate(0 2100)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#18884f" />
                    <stop offset=".5" stopColor="#117e43" />
                    <stop offset="1" stopColor="#0b6631" />
                  </linearGradient>
                </defs>
                <path
                  fill="#185c37"
                  d="M19.581 15.35L8.512 13.4v14.409A1.19 1.19 0 0 0 9.705 29h19.1A1.19 1.19 0 0 0 30 27.809V22.5Z"
                />
                <path
                  fill="#21a366"
                  d="M19.581 3H9.705a1.19 1.19 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z"
                />
                <path fill="#107c41" d="M8.512 9.5h11.069V16H8.512Z" />
                <path
                  d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2"
                  opacity=".1"
                />
                <path
                  d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
                  opacity=".2"
                />
                <path
                  d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
                  opacity=".2"
                />
                <path
                  d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
                  opacity=".2"
                />
                <path
                  fill="url(#vscodeIconsFileTypeExcel0)"
                  d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.19 1.19 0 0 1 2 21.959V10.041A1.19 1.19 0 0 1 3.194 8.85"
                />
                <path
                  fill="#fff"
                  d="m5.7 19.873l2.511-3.884l-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017q.123-.281.26-.546l1.342-2.447h1.7l-2.359 3.84l2.419 3.905h-1.809l-1.45-2.711A2.4 2.4 0 0 1 9.2 16.8h-.024a1.7 1.7 0 0 1-.168.351l-1.493 2.722Z"
                />
                <path
                  fill="#33c481"
                  d="M28.806 3h-9.225v6.5H30V4.191A1.19 1.19 0 0 0 28.806 3"
                />
                <path fill="#107c41" d="M19.581 16H30v6.5H19.581Z" />
              </svg>
              <input
                id="fileInput"
                type="file"
                accept=".csv,.xlsx"
                required
                className="hidden "
                onChange={handleFileChange}
              />
              <p className="text-gray-600 w-full text-center dark:text-white">
                Drop your file here or{" "}
                <span className="text-[#605BFF] underline">browse</span>
              </p>
              <p className="text-red-400">
                Only <span className="font-semibold text-red-500">.csv</span>{" "}
                and <span className="font-semibold text-red-500">.xlsx</span>{" "}
                files are accepted.
              </p>
              <p className="text-red-500">
                <span className="text-black">Please note : </span>
                The CSV file should use column names without spaces, e.g.,
                &quot;selecttags&quot;instead of &quot;select tags&quot;.
              </p>
            </>
          )}
          {fileName && (
            <div className="flex lg:w-full flex-col items-center space-x-3">
              {/* File uploaded SVG and name */}
              <p className="text-gray-600  dark:text-white">{fileName}</p>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={handleRemoveFile}
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <button
          className="mt-6 bg-[#605BFF] w-full text-white px-6 py-2 rounded-md flex items-center justify-center"
          onClick={handleUploadClick}
          disabled={loading}
        >
          {loading ? (
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"></div>
          ) : (
            <LuUpload className="mr-2" />
          )}
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
      <div className="w-full">
        <h1 className="font-figtree text-[24px]">Uploads</h1>
        {!showTable && data.length === 0 && (
          <p className="text-black dark:text-white text-center text-lg">
            Please Upload File
          </p>
        )}
        {showTable && <TableComponent data={data} />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default FileUpload;
