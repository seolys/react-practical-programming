// Consumer에서 데이터를 수정하는 방법.

import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({ username: "unknown", helloCount: 0 });
const SetUserContext = createContext(() => {}); // 데이터를 수정하는 함수를 별도의 context로 분리한다.

export default function App() {
  const [user, setUser] = useState({ username: "mike", helloCount: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
    const setUser = useContext(SetUserContext);
    const {username, helloCount} = useContext(UserContext);
    return (
        <React.Fragment>
            <p>{`${username}님 안녕하세요`}</p>
            <p>{`인사 횟수: ${helloCount}`}</p>
            <button onClick={() => setUser({username, helloCount: helloCount + 1})}>
                인사하기
            </button>
        </React.Fragment>
    );
  }
  