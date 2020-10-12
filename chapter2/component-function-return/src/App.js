import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Counter from "./Counter";

export default function App() {
  // return (<div>안녕하세요.</div>);

  // return <Counter />;

  // return "안녕하세요.";

  // return 890831;

  // return ["안녕", "하세요!!"];

  // 배열을 반환할때는 key를 할당해야함. key는 렌더링을 효율적으로 하기 위해서 필요한 값. react는 viritual dom(가상돔)에서 연산을 효율적으로 할 수 있다.
  // return [<p key={1}>안녕</p>, <p key={2}>하세용!!</p>];

  // React.Fragment에서는 요소의 순서가 일종의 key역할을 한다. 여러개의 요소를 반환할때 유용하게 사용할수있다.(div로 묶지않아도 된다.)
  // return (
  //   <React.Fragment>
  //     <p>안녕</p>
  //     <p>하십니까~~</p>
  //   </React.Fragment>
  // );

  // React.Fragment 축약형 <></>
  // return (
  //   <>
  //     <p>안녕</p>
  //     <p>하십니까~~</p>
  //     {/* null, true, false도 리턴할수있지만 렌더링될때는 무시된다. boolean은 조건부 렌더링시 유용하게 사용된다. */}
  //     {null}
  //     {true}
  //     {false}
  //   </>
  // );

  // null, true, false도 리턴할수있지만 렌더링될때는 무시된다. boolean은 조건부 렌더링시 유용하게 사용된다.
  return (
    <>
      {null}
      {true}
      {false}
      <Counter />
      {
        // 모달을 위해 자주 사용됨.
        ReactDOM.createPortal(
          <div>
            <p>안녕하세요.</p>
            <p>실전 리액트 프로그래밍</p>
          </div>,
          document.getElementById('something')
        )
      }
    </>
  );
}
