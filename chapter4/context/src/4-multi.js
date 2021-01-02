import React, { createContext, useState, useContext } from "react";

// context를 분리하면, 변경된 데이터만 렌더링이 되기때문에 성능상 이점을 가질 수 있다.
const UserContext = createContext("unknown");
const ThemeContext = createContext("dark");

export default function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value="mike">
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </ThemeContext.Provider>
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
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  return (
    <p
      style={{ color: theme === "dark" ? "gray" : "green" }}
    >{`${username}님 안녕하세요`}</p>
  );
}
