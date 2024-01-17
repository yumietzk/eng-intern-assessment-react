import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StopWatchButton from "../StopWatchButton";

const mockProps = {
  label: "Start",
  disabled: false,
  handleClick: jest.fn(),
};

// Clear all data and implementations of mock functions after each test
afterEach(() => {
  jest.clearAllMocks();
});

describe("StopWatchButton component", () => {
  test("should render the button with the correct label", () => {
    render(<StopWatchButton {...mockProps} />);

    // Check if the button with the label "Start" is rendered
    const label = screen.getByText("Start");
    expect(label).toBeInTheDocument();
  });

  test("should apply the correct styles based on the label", () => {
    const { rerender } = render(<StopWatchButton {...mockProps} />);

    // Check if the button with the label "Start" has the "start" class
    const startButton = screen.getByRole("button", { name: "Start" });
    expect(startButton).toHaveClass("start");

    rerender(<StopWatchButton {...mockProps} label="Stop" />);

    // Check if the button with the label "Stop" has the "stop" class
    const stopButton = screen.getByRole("button", { name: "Stop" });
    expect(stopButton).toHaveClass("stop");
  });

  test("should handle click event", () => {
    render(<StopWatchButton {...mockProps} />);

    // Check if the click event is handled when the Start button is clicked
    const startButton = screen.getByRole("button", { name: "Start" });
    fireEvent.click(startButton);

    expect(mockProps.handleClick).toHaveBeenCalled();
  });

  test("should disable the button when disabled prop is true", () => {
    render(<StopWatchButton {...mockProps} label="Lap" disabled={true} />);

    const lapButton = screen.getByRole("button", { name: "Lap" });
    expect(lapButton).toBeDisabled();
  });
});
