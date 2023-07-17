"use client"
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";


export default function Animate() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setHeight(document.body.scrollHeight);
    setWidth(window.screen.width);
  }, []);
  return (
    <div >
      <Confetti width={width} height={height} />
    </div>
  )
}
