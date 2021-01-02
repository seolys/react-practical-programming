import React, { useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <InputAndSave inputRef={inputRef} />
      <Button ref={buttonRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

function InputAndSave({ inputRef, buttonRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref={buttonRef}>저장</button>
    </div>
  );
}

const Button = React.forwardRef(function Button({ onClick }, ref) {
  return (
    <div>
      <button onClick={onClick} ref={ref}>
        저장
      </button>
    </div>
  );
});
