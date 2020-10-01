function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  console.log("liked: ", liked, "setLiked: ", setLiked);
  const text = liked ? "좋아요 취소" : "좋아요";
  // return React.createElement(
  //   "button",
  //   { onClick: () => setLiked(!liked) },
  //   text
  // );
  return <button onClick={() => setLiked(!liked)}>{text}</button>;
}

function Container() {
  const [count, setCount] = React.useState(0);
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement(LikeButton),
  //   React.createElement(
  //     "div",
  //     { style: { marginTop: 20 } },
  //     React.createElement("span", null, "현재 카운트: "),
  //     React.createElement("span", { stype: { marginRight: 10 } }, count),
  //     React.createElement(
  //       "button",
  //       { onClick: () => setCount(count + 1) },
  //       "증가"
  //     ),
  //     React.createElement(
  //       "button",
  //       { onClick: () => setCount(count - 1) },
  //       "감소"
  //     )
  //   )
  // );
  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}>
        <span>현재 카운트: </span>
        <span style={{ marginRight: 10, color: "red" }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(
  React.createElement("div", null, React.createElement(Container)),
  domContainer
);
