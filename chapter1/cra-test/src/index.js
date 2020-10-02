import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // css파일도 import하여 사용함.
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// polyfill
// 특정함수 import
import "core-js/features/string/pad-start"; // https://github.com/zloirock/core-js

// React.StrictMode : 문법잘못된것을 빠르게 잡아내기위해 사용.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // PWA기능 사용할때 사용. unregister이기때문에 사용을 안하는것으로 설정됨.

// 환경변수.
// process.env.{환경변수 이름}
// process.env.NODE_ENV; // [npm start: development, npm test: test, npm run build: production]
console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
console.log("REACT_APP_TEMP1:", process.env.REACT_APP_TEMP1);
console.log("REACT_APP_TEMP2:", process.env.REACT_APP_TEMP2);

// 환경변수 지정하는방법.
// REACT_APP_환경변수명
// MacOS일때: REACT_APP_API_URL=api.myapp.com npm start
// Window일때: set "REACT_APP_API_URL=api.myapp.com" && npm start

// 환경변수가 많아지면 .env파일로 관리하는것이 좋음.
