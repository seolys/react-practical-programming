import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // css파일도 import하여 사용함.
import App from "./App";
import * as serviceWorker from "./serviceWorker";

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
