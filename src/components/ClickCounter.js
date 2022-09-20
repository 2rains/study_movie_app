import { func } from "prop-types";
import React, { useState } from "react";

function ClickCounter(props) {
  let [카운터, set카운터] = useState(0);
  let [timerID, setTimerID] = useState(0);
  //   console.log(props);

  function 증가타이머() {
    const timerID = setInterval(function () {
      카운터++;
    }, 1000);
    set카운터(function (현재값) {
      return 현재값 + 1;
    });
  }

  function 정지타이머() {
    set카운터(clearInterval(카운터));
  }

  function 초기화() {
    set카운터(0);
    setTimerID(0);
  }

  return (
    <>
      <div className="container">
        <h2>{props.title ? props.title : "undefined 타이틀"}</h2>
        <div>count:{카운터}</div>
        <div>타이머 ID: {timerID}</div>
        <button onClick={증가타이머}>시작</button>
        <button onClick={정지타이머}>종료</button>
        <button onClick={초기화}>초기화</button>
      </div>
    </>
  );
}

export default ClickCounter;
