import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
// import { DummyData } from "./components/DummyData";
const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const names = ["John", "Jane", "Alice", "Bob", "Carol"];
  const handleSearch = (results) => {
    setSearchResults(results);
    console.log(results);
  };
  return (
    <>
      <h2>Phone Book</h2>
      <SearchBar names={names} onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => {
          return <li key={index}>{result}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
