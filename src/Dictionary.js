import React, { useCallback, useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import { useParams, useHistory } from "react-router-dom";

export default function Dictionary() {
  const { word } = useParams(); // const params = useParams(); const word = params.word;
  let history = useHistory();

  let [keyword, setKeyword] = useState(word);
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

  const search = useCallback((searchWord) => {
    setResult(null);
    setImagesUrl([]);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);

    let apikeyPexels = process.env.REACT_APP_API_KEY_PEXELS;
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${searchWord}`;
    axios
      .get(apiUrlPexels, {
        headers: {
          Authorization: apikeyPexels,
        },
      })
      .then(handleResponseImages);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    //search(keyword);
    history.push(`/definitions/${keyword}`);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  //every time 'word' changes, it runs the arrow function to change keyword to word and call the api's to update the results
  React.useEffect(() => {
    setKeyword(word);
    search(word);
  }, [word, search]);

  //the function starts to run here, only declarations above
  if (loaded) {
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
    search(keyword);
    setLoaded(true);
    return null;
  }
}
