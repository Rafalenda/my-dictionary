import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h3> {props.myMeaning.partOfSpeech} </h3>

      {props.myMeaning.definitions.map(function (item, index) {
        return (
          <div key={index}>
            <p>{item.definition}</p>
            <p>
              {item.example ? "Example: " : ""} <em>{item.example} </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
