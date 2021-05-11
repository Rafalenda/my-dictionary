import React from "react";

export default function Result(props) {
  return (
    <div>
      <h2>{props.result?.word}</h2>
      <p>{props.result?.meanings[0].definitions[0].definition}</p>
    </div>
  );
}
