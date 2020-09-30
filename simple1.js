function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  console.log("liked: ", liked, "setLiked: ", setLiked);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}
const domContainer = document.getElementById("root");
ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer
);

/*
<div>
    <p>hello</p>
    <p>world</p>
</div>
*/
/*
React.createElement(
  'div', 
  null, 
  React.createElement('p', null, 'hello'),
  React.createElement('p', null, 'world')
  )
*/
