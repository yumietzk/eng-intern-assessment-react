import { useCallback, useRef, useState } from "react";

export function useTime() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [laps, setLaps] = useState<Array<number>>([]);

  const intervalRef = useRef(null);

  // Start counting
  const handleStart = useCallback(() => {
    setIsCounting(true);

    clearInterval(intervalRef.current);
    // Update every 10ms
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 10);
  }, []);

  // Stop counting
  const handleStop = useCallback(() => {
    setIsCounting(false);

    clearInterval(intervalRef.current);
  }, []);

  // Record laps
  const handleRecordLaps = useCallback(() => {
    setLaps((l) => [...l, time]);
  }, [time]);

  // Reset to zero
  const handleReset = useCallback(() => {
    setIsCounting(false);

    setTime(0);
    setLaps([]);
    clearInterval(intervalRef.current);
  }, []);

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
