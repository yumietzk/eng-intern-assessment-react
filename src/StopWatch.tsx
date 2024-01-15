import React from "react";
import { formatTime } from "./utils/formatTime";
import StopWatchButton from "./StopWatchButton";
import styles from "./StopWatch.module.css";

type StopWatchProps = {
  time: number;
  isCounting: boolean;
  laps: number[];
  handleStart: () => void;
  handleStop: () => void;
  handleRecordLaps: () => void;
};

// A separate component that represents the stopwatch display
export default function StopWatch({
  time,
  isCounting,
  laps,
  handleStart,
  handleStop,
  handleRecordLaps,
}: StopWatchProps) {
  const formattedTime = formatTime(time);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stopwatch</h1>
      <p className={styles.time}>{formattedTime}</p>

      {/* Render buttons */}
      <div className={styles.buttons}>
        <StopWatchButton
          label="Start"
          disabled={isCounting}
          handleClick={handleStart}
        />
        <StopWatchButton
          label="Lap"
          disabled={!isCounting}
          handleClick={handleRecordLaps}
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
        {laps.map((lap, i) => {
          const elapsedTime = i === 0 ? lap : lap - laps[i - 1];
          const formattedElapsedTime = formatTime(elapsedTime);

          return (
            <div key={i} className={styles["lap-row"]}>
              <p>Lap {i + 1}</p>
              <p>{formattedElapsedTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
