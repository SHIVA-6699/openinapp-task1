import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Papa from "papaparse";
import TableComponent from "./Shared/TableComponent";

const FileUpload = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csv = Papa.parse(event.target.result, { header: true });
        setData(csv.data);
      };
      reader.readAsText(file);
    }
  };

  const handleUploadClick = () => {
    if (data.length > 0) {
      setShowTable(true);
    }
  };

  return (
    <div className="bg-white shadow-md dark:bg-[#0D0D0D] border dark:border-none rounded-lg p-16 max-w-md  lg:max-w-xl w-full">
      <div
        className="border-dashed border-2 border-gray-300 rounded-lg p-16 flex flex-col items-center justify-center"
        onClick={() => document.getElementById("fileInput").click()}
        style={{ cursor: "pointer" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          {/* SVG content here */}
        </svg>
        <input
          id="fileInput"
          type="file"
          accept=".xls,.xlsx"
          className="hidden"
          onChange={handleFileChange}
        />
        <p className="text-gray-600 w-full text-center dark:text-white">
          Drop your excel sheet here or{" "}
          <span className="text-[#605BFF] underline">browse</span>
        </p>
      </div>
      <button
        className="mt-6 bg-[#605BFF] w-full text-white px-6 py-2 rounded-md flex items-center justify-center"
        onClick={handleUploadClick}
      >
        <FaCloudUploadAlt className="mr-2" />
        Upload
      </button>

      {showTable && <TableComponent data={data} />}
    </div>
  );
};

export default FileUpload;
