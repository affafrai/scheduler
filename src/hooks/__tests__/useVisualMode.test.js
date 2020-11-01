import { renderHook, act } from "@testing-library/react-hooks";
// import {useState} from react;

import useVisualMode from "hooks/useVisualMode";


// When the Appointment component loads, we want it to be empty, 
// so we need to initialize the mode to EMPTY
const FIRST = "FIRST";

test("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  expect(result.current.mode).toBe(FIRST);
});


// assert that the hook can successfully transition from FIRST to SECOND
const SECOND = "SECOND";

test("useVisualMode should transition to another mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
});