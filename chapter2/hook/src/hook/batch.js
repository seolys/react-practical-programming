import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    // 1.
    // count가 2번 증가되는것을 기대했지만, 그렇게 값이 증가되지 않는다.
    // 비동기이면서 배치이기 때문이다.
    // 효율적으로 렌더링하기위해 여러개의 상태값 변경 요청을 배치로 처리한다.
    // setCount(count + 1);
    // setCount(count + 1);
    // 2.
    // 2번증가시키는 방법:
    // 함수를 입력하면 처리되기 직전의 상태값을 매개변수로 받기 때문에, 원하는 대로 동작한다.
    // setCount(v => v + 1);
    // setCount(v => v + 1);

    // 3.
    // unstable_batchedUpdates을 활용하면, 함수를 입력하거나 addEventListener에 매핑해도 배치로 실행된다.
    ReactDOM.unstable_batchedUpdates(() => {
      setCount((v) => v + 1);
      setCount((v) => v + 1);
    });
  }

  // 3.
  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  });

  console.log("render called"); // 이 로그는 count가 계속변경되면서 재렌더링 되더라도, 1번만 출력됨.
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
