import React, { useState } from "react";

const SearchImage = ({ setSearch }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <div className="mx-auto my-10 w-6/12">
      <form action="/" className="w-full mx-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2 ">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchImage;
