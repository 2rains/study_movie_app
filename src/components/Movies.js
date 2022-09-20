import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./Movies.css";
// import App from "./components/App";

function Movies(props) {
  console.log(props.apiPath);
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    console.log("getMovieAPI() 함수가 호출되었습니다");
    if (!props.apiPath) return;
    // if (0 < movies.length) return;

    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=c99cf9dfdf0f8550359235f424bae23b&language=ko&region=KR`
    );
    console.log(result.data.results);
    setMovies(result.data.results);
    setloading(false);
  }

  useEffect(
    function () {
      getMovieAPI();
    },
    [props.apiPath]
  );

  //   로딩화면;
  //   setTimeout(function () {
  //     setloading(false);
  //   }, 5000);

  return (
    <>
      <div>
        {loading ? (
          <div>로딩중...</div>
        ) : (
          <>
            {movies.map(function (ele, idx) {
              return (
                <Movie
                  key={ele.id}
                  id={ele.id}
                  title={ele.title}
                  poster_path={ele.poster_path}
                  overview={ele.overview}
                  vote_average={ele.vote_average}
                  adult={ele.adult}
                  original_language={ele.original_language}
                  release_date={ele.release_date}
                />
              );
            })}
            {/* <Movie
              title={movies[0].title}
              poster_path={movies[0].poster_path}
              overview={movies[0].overview}
              vote_average={movies[0].vote_average}
              adult={movies[0].adult}
              original_language={movies[0].original_language}
              release_date={movies[0].release_date}
            />
            <Movie
              title={movies[1].title}
              poster_path={movies[1].poster_path}
              overview={movies[1].overview}
              vote_average={movies[1].vote_average}
              adult={movies[1].adult}
              original_language={movies[1].original_language}
              release_date={movies[1].release_date}
            />
            <Movie
              title={movies[2].title}
              poster_path={movies[2].poster_path}
              overview={movies[2].overview}
              vote_average={movies[2].vote_average}
              adult={movies[2].adult}
              original_language={movies[2].original_language}
              release_date={movies[2].release_date}
            /> */}

            {/* <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/original/${movies[0].poster_path}`}
                width={200}
              ></img>
              <div>포스터이미지: {movies[0].poster_path}</div>
              <div>제 목 : {movies[0].title}</div>
              <div>줄거리 : {movies[0].overview}</div>
              <div>평점 : {movies[0].vote_average}</div>
              <div>성인영화 : {movies[0].adult}</div>
              <div>영화언어 : {movies[0].original_language}</div>
              <div>개봉일 : {movies[0].release_date}</div>
              <hr />
            </div>

            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/original/${movies[1].poster_path}`}
                width={200}
              ></img>
              <div>포스터이미지: {movies[1].poster_path}</div>
              <div>제 목: {movies[1].title}</div>
              <div>줄거리 : {movies[1].overview}</div>
              <div>평점 : {movies[1].vote_average}</div>
              <div>성인영화 : {movies[1].adult}</div>
              <div>영화언어 : {movies[1].original_language}</div>
              <div>개봉일 : {movies[1].release_date}</div>
              <hr />
            </div>
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/original/${movies[2].poster_path}`}
                width={200}
              ></img>
              <div>포스터이미지: {movies[2].poster_path}</div>
              <div>제 목 : {movies[2].title}</div>
              <div>줄거리 : {movies[2].overview}</div>
              <div>평점 : {movies[2].vote_average}</div>
              <div>성인영화 : {movies[2].adult}</div>
              <div>영화언어 : {movies[2].original_language}</div>
              <div>개봉일 : {movies[2].release_date}</div>
              <hr />
            </div> */}
          </>
        )}
      </div>
    </>
  );
}

export default Movies;
