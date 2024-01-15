import React from "react";
import { useTime } from "./hooks/useTime";
import StopWatch from "./StopWatch";
import "./App.css";

// The main component that renders the stopwatch and handles its functionality
export default function App() {
  const {
    time,
    isCounting,
    laps,
    handleStart,
    handleStop,
    handleRecordLaps,
    handleReset,
  } = useTime();

  return (
    <StopWatch
      time={time}
      isCounting={isCounting}
      laps={laps}
      handleStart={handleStart}
      handleStop={handleStop}
      handleRecordLaps={handleRecordLaps}
      handleReset={handleReset}
    />
  );
}
