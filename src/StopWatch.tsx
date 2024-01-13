import React from "react";
import StopWatchButton from "./StopWatchButton";
import styles from "./StopWatch.module.css";

// A separate component that represents the stopwatch display
export default function StopWatch() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stopwatch</h1>
      <p className={styles.time}>00:00:00</p>

      {/* Render buttons */}
      <div className={styles.buttons}>
        <StopWatchButton label="Start" />
        <StopWatchButton label="Stop" />
        <StopWatchButton label="Lap" />
        <StopWatchButton label="Reset" />
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
