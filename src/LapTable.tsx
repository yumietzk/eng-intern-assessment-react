import React from "react";
import { formatTime } from "./utils/formatTime";
import LapRow from "./LapRow";
import styles from "./LapTable.module.css";

type LapTableProps = {
  laps: number[];
};

// A separate component that represents the table containing all laps
const LapTable = React.memo(function LapTable({ laps }: LapTableProps) {
  return (
    <ul className={styles["lap-table"]}>
      {/* Reverse the order to render laps in a descending order */}
      {laps
        .slice()
        .map((lap, i) => {
          const elapsedTime = i === 0 ? lap : lap - laps[i - 1];
          const formattedElapsedTime = formatTime(elapsedTime);

          return <LapRow key={i} lapTime={formattedElapsedTime} index={i} />;
        })
        .reverse()}
    </ul>
  );
});

export default LapTable;
