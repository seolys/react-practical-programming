import React, { useState, useEffect } from "react";
import Counter from "./Counter";

function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSeconds((v) => v + 1);
    }, 1000);
  });
  return (
    <div key={seconds}>
      <p>카운트를 증가시켜도 1초마다 카운트가 0으로 초기화된다.</p>
      <Counter />
      {seconds % 2 === 0 && <p>조건부 렌더링</p>}
      <h1 style={{ color: seconds % 2 ? "red" : "blue" }}>안녕하세요</h1>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </div>
  );
}

export default App;
