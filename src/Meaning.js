import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.myMeaning.partOfSpeech} </h3>

      {props.myMeaning.definitions.map(function (item, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {item.definition}
            </p>
            <p>
              {item.example ? "Example: " : ""} <em>{item.example} </em>
            </p>

            {item.synonyms ? "Synonym: " : ""}
            {item.synonyms?.map(function (item, index) {
              return (
                <button className="btn btn-outline-secondary" key={index}>
                  {item}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
