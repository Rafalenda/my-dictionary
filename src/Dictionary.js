import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function changeKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);

    setResult(response.data[0]);
  }

  function submit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <p>Search a Word</p>
      <form onSubmit={submit}>
        <input type="search" onChange={changeKeyword} />
        <input type="submit" value="Search" />
      </form>

      <Result myResult={result} />
    </div>
  );
}
