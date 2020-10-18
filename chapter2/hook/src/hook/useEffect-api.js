import React, { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);

  // 두번째 매개변수 : 의존성 배열. 값이 변경되었을때만 실행된다.(userId가 변경될때만 실행.)
  useEffect(() => {
    console.log("value", value);
    getUserApi(userId).then((date) => setUser(date));
  }, [userId]);

  // 의존성 배열이 없는경우 한번만 호출된다.
  // useEffect(() => {
  //   getUserApi(userId).then((date) => setUser(date));
  // }, []);

  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

const USER1 = { name: "mike", age: 23 };
const USER2 = { name: "jane", age: 31 };
function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
