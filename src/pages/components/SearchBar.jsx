import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState(''); // State to hold input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update state on input change
  };

  const handleButtonClick = () => {
    onSearch(inputValue); // Pass the current input value to the search handler
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <input
        type="text"
        placeholder="Insira um nome"
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-l-md"
      />
      <button
        onClick={handleButtonClick}
        className="bg-green-500 p-2 rounded-r-md text-white"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
