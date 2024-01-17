import React from "react";
import styles from "./StopWatchButton.module.css";

type StopWatchButtonProps = {
  label: string;
  disabled?: boolean;
  handleClick: () => void;
};

// A separate component that represents the start, stop, lap, and reset buttons
const StopWatchButton = React.memo(function StopWatchButton({
  label,
  disabled = false,
  handleClick,
}: StopWatchButtonProps) {
  const additionalClass =
    (label === "Start" || label === "Stop") && styles[label.toLowerCase()];

  return (
    <button
      className={`${styles.button} ${additionalClass}`}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
});

export default StopWatchButton;
