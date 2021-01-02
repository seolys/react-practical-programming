import React, { createContext, useState, useContext } from "react";

const UserContext = createContext("unknown");

// Consumer가 Provider안에 존재하지 않는경우, 초기값이 출력되게 된다.
export default function App() {
  return (
    <div>
      <UserContext.Provider value="mike"></UserContext.Provider>
      <Profile />
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
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
}
