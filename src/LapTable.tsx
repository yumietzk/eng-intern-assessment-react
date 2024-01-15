import React from "react";
import { formatTime } from "./utils/formatTime";
import LapRow from "./LapRow";
import styles from "./LapTable.module.css";

type LapTableProps = {
  laps: number[];
};

export default function LapTable({ laps }: LapTableProps) {
  return (
    <div className={styles["lap-table"]} data-testid="lap-list">
      {laps
        .map((lap, i) => {
          const elapsedTime = i === 0 ? lap : lap - laps[i - 1];
          const formattedElapsedTime = formatTime(elapsedTime);

          return <LapRow key={i} lapTime={formattedElapsedTime} index={i} />;
        })
        .reverse()}
    </div>
  );
}
