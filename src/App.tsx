import React, { useRef, useState } from "react";
import StopWatch from "./StopWatch";
import "./App.css";

// The main component that renders the stopwatch and handles its functionality
export default function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const intervalRef = useRef(null);

  // Convert the time state to an ISO string, and extract the time portion(xx:xx:xx) from the ISO string
  const formattedTime = new Date(time * 1000).toISOString().slice(11, -5);

  // Start counting
  function handleStart() {
    setIsCounting(true);

    clearInterval(intervalRef.current);
    // Update every second
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  }

  // Stop counting
  function handleStop() {
    setIsCounting(false);

    clearInterval(intervalRef.current);
  }

  return (
    <StopWatch
      time={formattedTime}
      isCounting={isCounting}
      handleStart={handleStart}
      handleStop={handleStop}
    />
  );
}
