import { func } from "prop-types";
import React, { useState } from "react";
import { findDOMNode } from "react-dom";
// import Movies from "./components/Movies";

// state는 동적데이터를 다룰 때 사용하는 리액트 요소

// function App() {
//   return <div>함수 컴포넌트</div>;
// }

// class App extends React.Component {
//   // 클래스 컴포넌트(react.component상속)
//   render() {
//     return <div>클래스 컴포넌트</div>;
//   }
// }

// function App(props) {
//   // 함수컴포넌트에서 state변수 쓰는 법2
//   const [count] = useState(0);
// }

class App extends React.Component {
  test = 1; // 멤버변수
  // App 클래스 생성자
  constructor(props) {
    super(props); //부모 생성자 호출
    this.state = {
      count: 0,
    };
  }

  증가함수 = () => {
    console.log("증가함수");
    // 방법1
    // this.setState({ count: this.state.count + 1 }); //reder를 바뀌는 부분만 다시 호출해줌 // 값 설정하는 방법
    // 방법2
    this.setState(function (현재state) {
      return { count: 현재state.count + 1 };
    });
  };
  감소함수 = () => {
    console.log("감소함수");
    // 방법1;
    // this.setState({ count: this.state.count - 1 });
    // 방법2
    this.setState(function (현재state) {
      return { count: 현재state.count - 1 };
    });
  };

  render() {
    console.log("랜더함수 호출됨");
    console.log(this.state);
    return (
      <div>
        <h1>카운터 : {this.state.count}</h1>
        <button onClick={this.증가함수}>+1</button>{" "}
        <button onClick={this.감소함수}>-1</button>
      </div>
    );
  }
}

export default App;
