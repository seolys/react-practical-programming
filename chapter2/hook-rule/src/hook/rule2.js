function Profile() {
  // hook을 사용시 초기값만 리액트에게 알려주기 때문에, 순서를 확실하게 보장해야함.

  // 리액트의 입장에서는 useState가 사용되는 순서로 판단한다.
  const [name, setName] = useState("mike");
  const [country, setCountry] = useState("korea");

  // 아래와 같이 조건에 따라 useState을 선언하면 리액트는 판단하기 힘듬.
  if (true) {
    const [age, setAge] = useState(32);
  }
  const [height, setHeight] = useState(173);
}
