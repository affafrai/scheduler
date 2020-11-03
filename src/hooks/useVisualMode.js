import {useState} from "react";

export default function useVisualMode(initial) {
  // transition in day 4 compass
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // initializing our history as an array with the first mode that gets passed to useVisualMode.
  
  function transition (mode, replace = false) {
      // setMode(mode)        
      if (replace === false) {
        setHistory(history => ([...history, mode]))    
        } else {
        // console.log("history in transition before pop",history)
        // history.pop()
        // console.log("history in transition after pop",history)
        setHistory(history => [...history.slice(0,-1),mode])
        // console.log("history in transition after set history",history)

      }
  }

  function back() {
    if(history.length <= 1) {
      console.log("error length >= 1", history.length)
    }
      else {
        console.log("history in back before pop",history)

        // history.pop()
        console.log("history in back after pop",history)
        setHistory(history => history.slice(0,-1))
      }
  }

  return { mode: history[history.length-1], transition, back };
}

