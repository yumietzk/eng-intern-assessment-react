import React from "react";
import StopWatchButton from "./StopWatchButton";
import styles from "./StopWatch.module.css";

type StopWatchProps = {
  time: string;
  isCounting: boolean;
  handleStart: () => void;
  handleStop: () => void;
};

// A separate component that represents the stopwatch display
export default function StopWatch({
  time,
  isCounting,
  handleStart,
  handleStop,
}: StopWatchProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stopwatch</h1>
      <p className={styles.time}>{time}</p>

      {/* Render buttons */}
      <div className={styles.buttons}>
        <StopWatchButton
          label="Start"
          disabled={isCounting}
          handleClick={handleStart}
        />
        <StopWatchButton
          label="Stop"
          disabled={!isCounting}
          handleClick={handleStop}
        />
        {/* 
        <StopWatchButton label="Lap" />
        <StopWatchButton label="Reset" /> */}
      </div>

      {/* Render laps */}
      <div className={styles["lap-table"]} data-testid="lap-list">
        <div className={styles["lap-row"]}>
          <p>Lap 1</p>
          <p>00:00:40</p>
        </div>
        <div className={styles["lap-row"]}>
          <p>Lap 2</p>
          <p>00:01:10</p>
        </div>
      </div>
    </div>
  );
}
