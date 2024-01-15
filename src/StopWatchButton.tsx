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
  disabled,
  handleClick,
}: StopWatchButtonProps) {
  return (
    <button
      className={styles.button}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
