import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/*
1. useEffect(effect) ==> 컴포넌트가 렌더링될 때마다 호출됩니다.
2. useEffect(effect, []) ==> 첫 번째 렌더링 후에만 호출됩니다.
*/
function App() {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    // 뒤로가기 시 호출되어 console.log가 찍힘.
    window.onpopstate = function (event) {
      console.log(`location: ${document.location}, state: ${event.state}`);
      setPageName(event.state);
    };
  }, []);

  function onClickPage1() {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    setPageName(pageName);
  }
  function onClickPage2() {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    setPageName(pageName);
  }

  return (
    <div>
      <button onClick={onClickPage1}>page1</button>
      <button onClick={onClickPage2}>page2</button>
      {!pageName && <Home />}
      {pageName === "page1" && <Page1 />}
      {pageName === "page2" && <Page2 />}
    </div>
  );
}

function Home() {
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}

function Page1() {
  return <h2>여기는 Page1입니다.</h2>;
}

function Page2() {
  return <h2>여기는 Page2입니다.</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
