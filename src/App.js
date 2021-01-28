import React, { useState } from "react";
import { binarySearch, linearSearch } from "./utils/searchAlgorithms";

function App() {
  const [textInput, setTextInput] = useState("");
  const [number, setNumber] = useState(0);
  const [display, setDisplay] = useState(<h1>Results</h1>);
  function handleLinearSearch() {
    const array = textInput
      .replace(/\s/g, "")
      .split(",")
      .map((value) => parseInt(value));
    const results = linearSearch(array, parseInt(number));
    displayResults(results, "Linear");
  }
  function handleBinarySearch() {
    const array = textInput
      .replace(/\s/g, "")
      .split(",")
      .map((value) => parseInt(value)).sort((a,b)=>a-b);
      console.log(array)
    const results = binarySearch(array, parseInt(number));
    displayResults(results, "Binary");
  }
  function displayResults(results, searchType) {
    setDisplay(
      <>
        {" "}
        <h1>{searchType} Search Results</h1>
        <p>Index: {results.index}</p>
        <p>Number of Seaches: {results.searches}</p>
      </>
    );
  }
  return (
    <main>
      <label htmlFor="searchValues">Search Values: </label>
      <br />
      <textarea
        id="searchValues"
        name="searchValues"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <br />
      <label htmlFor="search">Find:</label>
      <br />
      <input
        type="number"
        name="search"
        id="search"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLinearSearch}>Linear Search</button>
      <button onClick={handleBinarySearch}>Binary Search</button>
      <div>{display}</div>
    </main>
  );
}

export default App;
