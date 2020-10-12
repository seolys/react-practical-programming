import React from "react";

function Title(props) {
  console.log(props.title);
  return <p>{props.title}</p>;
}

export default React.memo(Title);
