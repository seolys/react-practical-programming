function MyComponent() {
  const [value, setValue] = useState(0);

  // if문 안에서 hook을 사용하면 안되는 경우

  // 어쩔때는 한 번 사용했다가, 어쩔때는 두번사용했다가 함..
  if (value === 0) {
    const [v1, setV1] = useState(0);
  } else {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
  }

  // for문에서도 사용하면 안됨. useState를 사용하는 횟수가 달라진다.
  for (let i = 0; i < value; i++) {
    const [num, setNum] = useState(0);
  }

  // 함수안에서 훅을 호출해도 안됨.
  // 함수가 호출된다는 보장이 없음. 어쩔때는 호출됐다가 어쩔때는 안될 수 있음
  function func1() {
    const [num, setNum] = useState(0);
  }
  // ...
}

// 잘못된 예
function logic1(userId) {
  if (!userId) {
    return null;
  }
  // return과 return사이에서 hook을 사용하면 안됨.
  const [user, setUser] = useState(null);
  return { user };
}

// 올바른 예
function logic1(userId) {
    const [user, setUser] = useState(null);
    if (!userId) {
      return null;
    }
    return { user };
  }
  
  
