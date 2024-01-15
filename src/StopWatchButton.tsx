import React from "react";
import styles from "./StopWatchButton.module.css";

type StopWatchButtonProps = {
  label: string;
  disabled?: boolean;
  handleClick: () => void;
};

// A separate component that represents the start, stop, lap, and reset buttons
export default function StopWatchButton({
  label,
  disabled = false,
  handleClick,
}: StopWatchButtonProps) {
  return (
    <button
      className={`${styles.button} ${label === "Start" ? styles.start : ""} ${
        label === "Stop" ? styles.stop : ""
      }`}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
