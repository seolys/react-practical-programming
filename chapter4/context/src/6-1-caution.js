import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({ username: "unknown", age: 0 });

// 문제점.
// export default function App() {
//   const [username, setUsername] = useState("");
//   const [age, setAge] = useState(0);
//   const [count, setCount] = useState(0);
//   console.log("App render");
//   return (
//     <div>
//       {/* Provider value에 {username, age}처럼 입력을 하게되면, 이 컴포넌트가 렌더링될 때마다 매번 새로운 객체가 만들어진다. 따라서 내부 값이 변경되지 않아도 Consumer는 불필요하게 렌더링이 될 수 있다. */}
//       <UserContext.Provider value={{ username, age }}>
//         <Profile />
//         <button onClick={() => setCount(count + 1)}>증가</button>
//       </UserContext.Provider>
//     </div>
//   );
// }

export default function App() {
  const [user, setUser] = useState({ username: 'mike', age: 23 });
  const [count, setCount] = useState(0);
  console.log("App render");
  return (
    <div>
      <UserContext.Provider value={user}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserContext.Provider>
    </div>
  );
}


const Profile = React.memo(function Profile() {
  console.log("Profile render");
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  console.log("Greeting render");
  const { username } = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
}
