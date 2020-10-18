import React, { useState, useEffect } from "react";

export default function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    console.log("useEffect 1");

    // 다음 부수 효과 함수가 호출되기 직전에 호출된다.
    // 또는 컴포넌트가 사라지기 직전, 즉 unmount되기 직전에 마지막으로 호출된다.
    // 부수 효과 함수가 반환한 함수는 unmount되기 전에 적어도 한번은 호출 된다는것이 보장된다.
    // 의존성배열에 빈 배열을 입력한 상태라면, 컴포넌트가 생성될 때만 부수효과 함수가 호출 되고 컴포넌트가 사라질 때만 반환한 함수가 호출된다.
    // 그래서 이런식으로 이벤트 핸들러를 등록하고 해제하는 이러한 패턴의 코드를 작성할 수 있다.(이벤트 중첩 방지.)
    // 의존성배열을 주지않았다면, 매번 컴포넌트가 렌더링될것이며, useEffect함수와 반환함수가 계속 실행이 된다.
    return () => {
      window.removeEventListener("resize", onResize);
      console.log("useEffect 2");
    };
  });
  return <div>{`width is ${width}`}</div>;
}
