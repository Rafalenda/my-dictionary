import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  return (
    <div>
      <h2>{props.myResult?.word.toUpperCase()}</h2>

      {props.myResult?.meanings.map(function (myMeaning, index) {
        return <Meaning key={index} myMeaning={myMeaning} />;
      })}
    </div>
  );
}
