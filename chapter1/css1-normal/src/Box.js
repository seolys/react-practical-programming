import React from "react";
import "./Box.css"; 

export default function Box({ size }) {
  if (size === "big") {
    return <div className="box big">큰 박스</div>;
  }
  return <div className="box small">작은 박스</div>;
}
