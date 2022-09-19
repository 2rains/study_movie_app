import React from "react";
import PropTypes from "prop-types"; // ES6

function Movie(props) {
  // console.log(props); //props 자체가 movie의 속성을 담고 있음!!
  return (
    <>
      <hr></hr>
      <div>영화이름 : {props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장 르 : {props.genre}</div>
      <div>
        상영시간 :{" "}
        {props.time
          ? props.time
              .filter(function (ele) {
                return typeof ele === "string" ? true : false;
              })
              .join(" | ")
          : "상영정보 없지롱😜"}
      </div>
      <div>
        티켓가격 :{" "}
        {props.price ? `${props.price + 500}원` : `상영정보 없지롱😜`}
      </div>
    </>
  );
}

Movie.propTypes = {
  // 타입 지정!!
  movieName: PropTypes.string.isRequired, // isRequired는 moviename을 꼭 써야한다는 말(안 쓰면 오류)
  actor: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  time: PropTypes.array,
  price: PropTypes.number,
};

export default Movie;
// Movie는 컴포넌트명(함수)임!!
