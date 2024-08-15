import { useState } from "react";

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
    <div className="table-container">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>Sl No.</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td>{index + 1}</td>
              <td>
                <a href={row.links} target="_blank" rel="noopener noreferrer">
                  {row.links}
                </a>
              </td>
              <td>{row.prefix}</td>
              <td>
                <select
                  onChange={(e) => handleTagSelect(index, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="">Select a tag</option>
                  {row.selecttags &&
                    row.selecttags.split(",").map((tag, tagIndex) => (
                      <option key={tagIndex} value={tag.trim()}>
                        {tag.trim()}
                      </option>
                    ))}
                </select>
              </td>
              <td>
                <div className="flex flex-wrap">
                  {tags[index] &&
                    tags[index].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-600 text-white rounded-full px-3 py-1 m-1 cursor-pointer"
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
