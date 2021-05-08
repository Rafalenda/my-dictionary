import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function changeKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response);
  }

  function submit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    alert(`Searching ...  ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <p>Search a Word</p>
      <form onSubmit={submit}>
        <input type="search" onChange={changeKeyword} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
