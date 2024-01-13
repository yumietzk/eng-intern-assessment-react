import React from "react";
import styles from "./StopWatch.module.css";

// A separate component that represents the stopwatch display
export default function StopWatch() {
  return <div className={styles.time}>00:00:00</div>;
}
