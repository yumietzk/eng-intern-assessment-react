import React from "react";
import styles from "./LapRow.module.css";

type LapRowProps = {
  lapTime: string;
  index: number;
};

export default function LapRow({ lapTime, index }: LapRowProps) {
  return (
    <li className={styles["lap-row"]}>
      <span>Lap {index + 1}</span>
      <span>{lapTime}</span>
    </li>
  );
}
