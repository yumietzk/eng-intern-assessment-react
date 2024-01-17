import React from "react";
import styles from "./LapRow.module.css";

type LapRowProps = {
  lapTime: string;
  index: number;
};

// A separate component that represents each lap
const LapRow = React.memo(function LapRow({ lapTime, index }: LapRowProps) {
  return (
    <li className={styles["lap-row"]}>
      <span>Lap {index + 1}</span>
      <span>{lapTime}</span>
    </li>
  );
});

export default LapRow;
