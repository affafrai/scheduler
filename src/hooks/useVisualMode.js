import {useState} from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]); // initializing our history as an array with the first mode that gets passed to useVisualMode.
  function transition (mode, replace = false) {
      if (replace === false) {
        setHistory(history => ([...history, mode]))    
        } else {
        setHistory(history => [...history.slice(0,-1),mode])
      }
  }
  function back() {
    if(history.length <= 1) {
      console.log("error length >= 1", history.length)
    }
      else {
        console.log("history in back before pop",history)
        console.log("history in back after pop",history)
        setHistory(history => history.slice(0,-1))
      }
  }
  return { mode: history[history.length-1], transition, back };
}

