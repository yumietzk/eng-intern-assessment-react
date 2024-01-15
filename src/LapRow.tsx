import React from "react";
import styles from "./LapRow.module.css";

type LapRowProps = {
  lapTime: string;
  index: number;
};

export default function LapRow({ lapTime, index }: LapRowProps) {
  return (
    <div className={styles["lap-row"]}>
      <p>Lap {index + 1}</p>
      <p>{lapTime}</p>
    </div>
  );
}
