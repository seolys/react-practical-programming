import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // 컴포넌트 렌더링 이후 호출이 된다.
  // 정확히하면, 렌더링 결과가 실제 돔에 반영되고 비동기로 useEffect가 호출된다.
  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  });

  return <button onClick={() => setCount(count + 1)}>increase</button>;
}
