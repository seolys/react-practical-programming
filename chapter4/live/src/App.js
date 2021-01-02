import React, { useRef, useEffect, useState, useCallback } from "react";

export default function App() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {/* 조건부 렌더링을 하는경우, ref.current가 비어있을 수 있음. 주의필요. */}
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>
      {/* input이 렌더링 되지않았다면 inputRef.current가 없기때문에 버튼이 클릭되면 오류가 발생할 것이다. 값이 존재하는지 검사 필요. */}
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        텍스트로 이동
      </button>
    </div>
  );
}
