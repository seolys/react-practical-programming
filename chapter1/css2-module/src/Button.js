import React from "react";
import Style from "./Button.module.css";
import cn from "classnames";

/*
export default function Button({ size }) {
  if (size === "big") {
    // return <button className={`${Style.button} ${Style.big}`}>큰 버튼</button>;
    return <button className={cn(Style.button, Style.big)}>큰 버튼</button>;
  }
  return (
    // <button className={`${Style.button} ${Style.small}`}>작은 버튼</button>
    <button className={cn(Style.button, Style.small)}>작은 버튼</button>
    );
}
*/

// classnames 활용.
export default function Button({ size }) {
  const isBig = size === "big";
  return (
    <button
      className={cn(Style.button, {
        [Style.big]: isBig,
        [Style.small]: !isBig,
      })}
    >
      {isBig ? "큰 버튼" : "작은 버튼"}
    </button>
  );
}
