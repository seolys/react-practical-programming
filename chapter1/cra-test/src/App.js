import React from "react";
import logo from "./logo.svg"; // 이미지파일도 import. 이미지해시값을 파일명으로 사용하여 캐시에 활용됨.
import "./App.css";
// import data from "./data.json"; // 데이터 import.

function App() {
  function onClick() {
    // console.log(data);
    import("./data.json").then(({ default: data }) => {
      console.log(data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터를 보여주세요.</button>
        <p>Hello!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
