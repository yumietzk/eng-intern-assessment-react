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
  handleReset: () => void;
};

// A separate component that represents the stopwatch display
export default function StopWatch({
  time,
  isCounting,
  laps,
  handleStart,
  handleStop,
  handleRecordLaps,
  handleReset,
}: StopWatchProps) {
  const formattedTime = formatTime(time);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stopwatch</h1>
      <p className={styles.time}>{formattedTime}</p>

      {/* Render buttons */}
      <div className={styles.buttons}>
        <StopWatchButton
          label={isCounting || time === 0 ? "Lap" : "Reset"}
          disabled={time === 0}
          handleClick={
            isCounting ? handleRecordLaps : time !== 0 ? handleReset : null
          }
        />
        <StopWatchButton
          label={isCounting ? "Stop" : "Start"}
          handleClick={isCounting ? handleStop : handleStart}
        />
      </div>

      {/* Render laps */}
      <div className={styles["lap-table"]} data-testid="lap-list">
        {/* Render laps in an ascending order */}
        {laps
          .map((lap, i) => {
            const elapsedTime = i === 0 ? lap : lap - laps[i - 1];
            const formattedElapsedTime = formatTime(elapsedTime);

            return (
              <div key={i} className={styles["lap-row"]}>
                <p>Lap {i + 1}</p>
                <p>{formattedElapsedTime}</p>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}
