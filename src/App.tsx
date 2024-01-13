import React from "react";
import StopWatch from "./StopWatch";
import "./App.css";

// The main component that renders the stopwatch and handles its functionality
export default function App() {
  return (
    <div className="container">
      Stopwatch
      <StopWatch />
    </div>
  );
}
