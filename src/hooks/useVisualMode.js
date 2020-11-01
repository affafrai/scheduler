import {useState} from "react";

export default function useVisualMode(initial) {
  // transition in day 4 compass
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // initializing our history as an array with the first mode that gets passed to useVisualMode.
  console.log("initial =", initial)

  console.log("mode now =", mode)
  console.log("history now =", history)

  function transition (mode) {
    setMode(mode)
    console.log("mode after transition", mode)
    setHistory([...history,mode])
  }

  function back() {
    if(history.length <= 1) {
      console.log("error length >= 1", history.length)
      
    }
      else {
        console.log("length before pop",history.length)
        console.log("history before pop",history)
        history.pop()
        console.log("history after pop",history)
        // transition(history[history.length-1])
        setMode(history[history.length-1])
      }

     
    
    
    // else {
    //   transition(history[history.length-1])
    // console.log("mode after back out if", mode)
    // }
  }
  return { mode, transition, back };
}

