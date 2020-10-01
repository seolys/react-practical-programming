function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  console.log("liked: ", liked, "setLiked: ", setLiked);
  const text = liked ? "좋아요 취소" : "좋아요"; // return React.createElement(
  //   "button",
  //   { onClick: () => setLiked(!liked) },
  //   text
  // );

  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}

function Container() {
  const [count, setCount] = React.useState(0); // return React.createElement(
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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: "red"
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement("div", null, React.createElement(Container)), domContainer);