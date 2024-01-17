import React from "react";
import { formatTime } from "./utils/formatTime";
import StopWatchButton from "./StopWatchButton";
import LapTable from "./LapTable";
import styles from "./StopWatch.module.css";

type StopWatchProps = {
  time: number;
  isCounting: boolean;
  laps: number[];
  handleStartStop: () => void;
  handleLapsReset: () => void;
};

// A separate component that represents the stopwatch display
export default function StopWatch({
  time,
  isCounting,
  laps,
  handleStartStop,
  handleLapsReset,
}: StopWatchProps) {
  const formattedTime = formatTime(time);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stopwatch</h1>

      {/* Reander time */}
      <p className={styles.time}>{formattedTime}</p>

      {/* Render buttons */}
      <div className={styles.buttons}>
        <StopWatchButton
          label={isCounting || time === 0 ? "Lap" : "Reset"}
          disabled={time === 0}
          handleClick={handleLapsReset}
        />
        <StopWatchButton
          label={isCounting ? "Stop" : "Start"}
          handleClick={handleStartStop}
        />
      </div>

      {/* Render laps */}
      <LapTable laps={laps} />
    </div>
  );
}
