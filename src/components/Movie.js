import PropTypes from "prop-types";
import "./Movie.css";
import Movies from "./Movies";

function Movie(props) {
  return (
    <>
      <div className="movie_data">
        <div className="movie_poster">
          <img
            className="movie_poster_img"
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
            width={100}
          ></img>
          <div className="movie_adult">{!props.adult ? "19" : null}</div>
        </div>
        <h3 className="movie_title">{props.title}</h3>
        <div className="movie_overview">{`<줄거리> ${props.overview.slice(
          0,
          100
        )}...`}</div>
        <div className="movie_vote">
          ({props.vote_average}/10){" "}
          {Array(Number(props.vote_average.toFixed(0)))
            .fill(0)
            .map((ele, idx) => (
              <span key={idx}>⭐</span>
            ))}
        </div>
        <div className="movie_lang">{`<원어> ${props.original_language}`}</div>
        <div className="movie_date movie_info">{`<개봉일> ${props.release_date}`}</div>
        <div className="movie_id movie_info">{`영화ID ${props.id}`}</div>
      </div>
    </>
  );
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number,
  adult: PropTypes.bool.isRequired,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default Movie;
