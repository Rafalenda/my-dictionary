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
    setResult(response.data[0]);
  }

  function submit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <div className="hint">Type a word...</div>

      <form onSubmit={submit}>
        <input type="search" onChange={changeKeyword} />
      </form>
      <div className="hint">Suggested words: beach, castle, horse...</div>

      {result ? <Result myResult={result} /> : null}
    </div>
  );
}
