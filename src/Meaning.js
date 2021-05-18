import React from "react";
import "./Meaning.css";
import { Link } from "react-router-dom";

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
                <Link
                  to={`/definitions/${item}`}
                  className="btn btn-secondary synonym"
                  key={index}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
