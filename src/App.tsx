import React, { useRef, useState } from "react";
import StopWatch from "./StopWatch";
import "./App.css";

// The main component that renders the stopwatch and handles its functionality
export default function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  // Start counting
  function handleStart() {
    setIsCounting(true);

    clearInterval(intervalRef.current);
    // Update every 10ms
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 10);
  }

  // Stop counting
  function handleStop() {
    setIsCounting(false);

    clearInterval(intervalRef.current);
  }

  // Record laps
  function handleRecordLaps() {
    setLaps((l) => [...l, time]);
  }

  return (
    <StopWatch
      time={time}
      isCounting={isCounting}
      laps={laps}
      handleStart={handleStart}
      handleStop={handleStop}
      handleRecordLaps={handleRecordLaps}
    />
  );
}
