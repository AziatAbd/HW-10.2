import React, { useEffect, useRef } from "react";
import "./Square.css";

const Square = () => {
  const ref = useRef();

  const colors = ["red", "green", "yellow"];

  useEffect(() => {
    const time = setInterval(() => {
      ref.current.style.background =
        colors[Math.round(Math.random() * colors.length)];
    }, 1000);
    console.log(time);
  });
  return (
    <div className="square" ref={ref}>
      square
    </div>
  );
};

export default Square;
