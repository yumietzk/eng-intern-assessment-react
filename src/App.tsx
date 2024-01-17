import React, { lazy } from "react";
import { useTime } from "./hooks/useTime";
import "./App.css";

const StopWatch = lazy(() => import("./StopWatch"));

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
      handleStartStop={isCounting ? handleStop : handleStart}
      handleLapsReset={isCounting ? handleRecordLaps : handleReset}
    />
  );
}
