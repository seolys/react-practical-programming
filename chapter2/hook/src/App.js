import React, { useState } from "react";
// import Batch from "./hook/batch";
// import Multi from "./hook/multi";
// import UseEffect from "./hook/useEffect";
// import Profile from "./hook/useEffect-api";
import WidthPrinter from "./hook/useEffect-event";

function App() {
  // const [userId, setUserId] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Batch /> */}
      {/* <Multi /> */}
      {/* <UseEffect /> */}

      {/* <Profile userId={userId} />
      <button onClick={() => setUserId(userId + 1)}>userId 변경</button> */}

      {count === 0 && <WidthPrinter />}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default App;
