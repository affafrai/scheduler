import {useState} from "react";

export default function useVisualMode(initial) {
  // transition in day 4 compass
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // initializing our history as an array with the first mode that gets passed to useVisualMode.
  
  function transition (mode, replace = false) {
      setMode(mode)        
      if (replace === false) {
      setHistory([...history,mode])
      } else {
        history.pop()
        setHistory([...history,mode])
      }
  }

  function back() {
    if(history.length <= 1) {
      console.log("error length >= 1", history.length)
    }
      else {
        history.pop()
        setMode(history[history.length-1])
      }
  }

  return { mode, transition, back };
}

