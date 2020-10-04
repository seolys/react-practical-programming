import React, { useState } from "react";

export default function App() {
  /******************************************************************************
   * 비즈니스 로직(데이터CURD) 코드만 존재
   */
  // useState : 컴포넌트의 상태값을 추가한다. useState는 배열을 반환하는데, 첫번째는 상태값이고 두번째 아이템은 상태값 변경 함수이다.(배열 비구조화 문법)
  const [todoList, setTodoList] = useState([]); // 상태값으로 todoList를 관리한다.
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState("");
  const [showOdd, setShowOdd] = useState(false);
  function onAdd() {
    const todo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]); // 전개연산자
  }
  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServer() {}

  /*******************************************************************************
   * UI 출력하는 코드만 존재함.
   * jsx 한번만 작성하면 됨.
   * 화면에 무엇을 그리는지 표현하고 있음.
   * 선언형 프로그래밍.
   */
  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todoList
          .filter((_, index) => (showOdd ? index % 2 === 0 : true))
          .map((todo) => (
            <li key={todo.id}>
              <span>{todo.desc}</span>
              <button data-id={todo.id} onClick={onDelete}>
                삭제
              </button>
            </li>
          ))}
      </ul>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={onAdd}>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}>
        홀수 아이템만 보기 on/off : {showOdd.toString()}
      </button>
      <button onClick={onSaveToServer}>서버에 저장</button>
    </div>
  );
}
