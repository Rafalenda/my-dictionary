import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  //console.log(props.myResult.phonetics[0]);

  return (
    <div className="Result">
      <section>
        <h2>{props.myResult?.word}</h2>{" "}
        {props.myResult?.phonetics.map(function (item, index) {
          return (
            <div key={index}>
              {item.text}{" "}
              <a href={item.audio} target="_blank" rel="noreferrer">
                Listen
              </a>
            </div>
          );
        })}{" "}
      </section>

      <section className="img">
        {props.myImg.map(function (item, index) {
          return <img key={index} src={item} alt="_" />;
        })}
      </section>

      {props.myResult?.meanings.map(function (myMeaning, index) {
        return (
          <section key={index}>
            <Meaning myMeaning={myMeaning} />{" "}
          </section>
        );
      })}
    </div>
  );
}
