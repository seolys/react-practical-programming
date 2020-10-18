import React from "react";
import useWindowWidth from "./hook/useWindowWidth";

export default function WidthPrinter() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>;
}
