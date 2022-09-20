import Movies from "./components/Movies";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

function Home() {
  return <h2>홈 컴포넌트</h2>;
}

function About() {
  return (
    <>
      <h2>개발자 소개</h2>
      <div>안녕 나는 이슬비야 지금 공부 중이야!😊</div>
    </>
  );
}

function App(props) {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Movies apiPath="popular" />} />
        <Route path="/now_playing" element={<Movies apiPath="now_playing" />} />
        <Route path="/upcoming" element={<Movies apiPath="upcoming" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
