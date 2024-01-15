import { useRef, useState } from "react";

export function useTime() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [laps, setLaps] = useState<Array<number>>([]);

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

  // Reset to zero
  function handleReset() {
    setIsCounting(false);

    setTime(0);
    setLaps([]);
    clearInterval(intervalRef.current);
  }

  return {
    time,
    isCounting,
    laps,
    handleStart,
    handleStop,
    handleRecordLaps,
    handleReset,
  };
}
