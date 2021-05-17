import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import { useParams } from "react-router-dom";

export default function Dictionary() {
  const { word } = useParams(); // const params = useParams(); const word = params.word;

  let [keyword, setKeyword] = useState(word || "beach");
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [imagesUrl, setImagesUrl] = useState([]);

  function handleResponse(response) {
    setResult(response.data[0]); // muda estado e atualiza o render(ver return da funcao)
  }
  function handleResponseImages(response) {
    let listOfImages = [];
    for (let i = 0; i < response.data.photos.length; i++) {
      listOfImages.push(response.data.photos[i]?.src);
    }
    setImagesUrl(listOfImages);
  }

  function search() {
    setResult(null);
    setImagesUrl([]);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let apikeyPexels = process.env.REACT_APP_API_KEY_PEXELS;
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}`;
    axios
      .get(apiUrlPexels, {
        headers: {
          Authorization: apikeyPexels,
        },
      })
      .then(handleResponseImages);
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

        {result ? <Result myResult={result} myImg={imagesUrl} /> : null}
      </div>
    );
  } else {
    search();
    setLoaded(true);
    return null;
  }
}
