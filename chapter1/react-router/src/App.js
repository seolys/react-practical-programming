import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";

export default function App() {
  return (
    <BrowserRouter>
      {/* BrouserRouter에서 현재 페이지의 상태값을 관리해준다. */}
      <div style={{ padding: 20, border: "5px solid gray" }}>
        {/* Link컴포넌트는 이것을 클릭했을 때, to에 해당하는 경로로 이동시켜준다.*/}
        <Link to="/">홈</Link>
        <br />
        <Link to="photo">사진</Link>
        <br />
        <Link to="rooms">방 소개</Link>
        <br />
        {/* Route컴포넌트는 path정보에 따라서 어떤 컴포넌트를 렌더링할지 결정을 해준다. exact를 넣지않으면, /photo나 /rooms일때도 /가 포함되어있기때문에 Home컴포넌트가 같이 렌더링되는데 그런부분을 방지한다. */}
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>이곳은 홈페이지 입니다.</h2>;
}
function Photo() {
  return <h2>여기서 사진을 감상하세요.</h2>;
}
