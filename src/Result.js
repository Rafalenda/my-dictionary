import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  //console.log(props.myResult.phonetics[0]);

  return (
    <div>
      <h2>{props.myResult?.word.toUpperCase()}</h2>

      {props.myResult?.phonetics.map(function (item, index) {
        return (
          <div key={index}>
            {item.text}{" "}
            <a href={item.audio} target="_blank" rel="noreferrer">
              Listen here
            </a>
          </div>
        );
      })}

      {props.myResult?.meanings.map(function (myMeaning, index) {
        return <Meaning key={index} myMeaning={myMeaning} />;
      })}
    </div>
  );
}
