import { useState } from "react";
import { Link } from "react-router-dom";
const TableComponent = ({ data }) => {
  const [tags, setTags] = useState({});

  const handleTagSelect = (index, tag) => {
    setTags((prev) => {
      const newTags = { ...prev };
      if (!newTags[index]) newTags[index] = [];
      // Check if the tag is already selected
      if (!newTags[index].includes(tag)) {
        newTags[index].push(tag);
      }
      return newTags;
    });
  };

  const handleRemoveTag = (index, tag) => {
    setTags((prev) => {
      const newTags = { ...prev };
      newTags[index] = newTags[index].filter((t) => t !== tag);
      return newTags;
    });
  };

  return (
    <div className="table-container border-spacing-4 rounded-xl border-separate mt-4 h-[25rem]  overflow-x-auto overflow-y-auto ">
      <table className="w-full text-sm border-separate rounded-md border-spacing-y-2 p-5 text-left bg-gray-200 dark:bg-[#0D0D0D] text-black dark:text-white">
        <thead className="text-xs  text-black   bg-gray-100 sticky top-0 dark:bg-[#0D0D0D] dark:text-white">
          <tr className="text-center">
            <th className="font-figtree text-[14px] p-4">Sl No.</th>
            <th className="font-figtree text-[14px] p-4">Links</th>
            <th className="font-figtree text-[14px] p-4">Prefix</th>
            <th className="font-figtree text-[14px] p-4">Add Tags</th>
            <th className="font-figtree text-[14px] p-4">Selected Tags</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((row, index) => (
            <tr
              className="text-center h-14  bg-gray-50   dark:bg-[#161616] text-black dark:text-white"
              key={index}
            >
              <td className="w-[5rem]">{index + 1}</td>
              <td className="w-[15rem]">
                <Link
                  to={row.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5B93FF] underline"
                >
                  {row.links}
                </Link>
              </td>
              <td className="w-[10rem]">{row.prefix}</td>
              <td className="w-[15rem]">
                <select
                  onChange={(e) => handleTagSelect(index, e.target.value)}
                  className="border rounded p-1 dark:bg-[#0D0D0D] dark:text-white"
                >
                  <option value="">Select a tag</option>
                  {row.selecttags &&
                    row.selecttags.split(",").map((tag, tagIndex) => (
                      <option
                        key={tagIndex}
                        className="dark:bg-[#0D0D0D] dark:text-white p-2"
                        value={tag.trim()}
                      >
                        {tag.trim()}
                      </option>
                    ))}
                </select>
              </td>
              <td className="w-[20rem]">
                <div className="flex flex-wrap">
                  {tags[index] &&
                    tags[index].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#605BFF] text-white dark:text-black rounded-lg px-3 py-1 m-1 cursor-pointer"
                        onClick={() => handleRemoveTag(index, tag)}
                      >
                        {tag} &times;
                      </span>
                    ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
