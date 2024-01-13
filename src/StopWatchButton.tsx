import React from "react";
import styles from "./StopWatchButton.module.css";

type StopWatchButtonProps = {
  label: string;
};

// A separate component that represents the start, stop, lap, and reset buttons
export default function StopWatchButton({ label }: StopWatchButtonProps) {
  return (
    <button className={styles.button} type="button">
      {label}
    </button>
  );
}
