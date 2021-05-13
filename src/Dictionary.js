import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]); // muda estado e atualiza o render(ver return da funcao)
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    //aqui comeca a rodar a funcao, acima apenas declaracoes
    return (
      <div className="Dictionary">
        <div className="hint">Type a word...</div>

        <form onSubmit={handleSubmit}>
          <input type="search" onChange={changeKeyword} value={keyword} />
        </form>
        <div className="hint">Suggested words: beach, castle, horse...</div>

        {result ? <Result myResult={result} /> : null}
      </div>
    );
  } else {
    search();
    setLoaded(true);
    return null;
  }
}
