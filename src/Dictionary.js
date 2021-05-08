import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function changeKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
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
