import {useState} from "react";

export default function useVisualMode(initial) {
  // transition in day 4 compass
  console.log("entering first mode")
  const [mode, setMode] = useState(initial);
  console.log("mode=", mode)
  function transition (mode) {
  setMode(mode)
  console.log("entering second mode")
  return undefined;
  }
  return { mode, transition };
}

