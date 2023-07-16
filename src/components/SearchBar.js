import React, { useState } from "react";
const SearchBar = ({ names, onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const searchHandler = (e) => {
    //perform the search logic based on the searchQuery
    const searchResults = names.filter((name) =>
      name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(searchResults);
    onSearch(searchResults);
  };
  const changeValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={changeValue} />
      <button onClick={searchHandler}>Search</button>
    </>
  );
};

export default SearchBar;
