import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StopWatch from "../StopWatch";
import * as formatTime from "../utils/formatTime";

// Mock function
const mockFormatTime = jest.spyOn(formatTime, "formatTime");

const mockProps = {
  time: 0,
  isCounting: false,
  laps: [] as number[],
  handleStartStop: jest.fn(),
  handleLapsReset: jest.fn(),
};

// Clear all data and implementations of mock functions after each test
afterEach(() => {
  jest.clearAllMocks();

  // Reset the return value for this specific mock
  mockFormatTime.mockReturnValue("00:00:00.00");
});

describe("StopWatch component", () => {
  test("should render the stopwatch with initial values", () => {
    render(<StopWatch {...mockProps} />);

    // Check if the component renders with the correct title
    const title = screen.getByText("Stopwatch");
    expect(title).toBeInTheDocument();

    // Check if the time is rendered correctly
    // Configure the mockFormatTime to return the correct value
    mockFormatTime.mockReturnValue("00:00:00.00");

    const time = screen.getByText("00:00:00.00");
    expect(time).toBeInTheDocument();

    // Check if there are 2 buttons
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(2);

    // Check if the lap button is rendered correctly
    const lap = screen.getByText("Lap");
    expect(lap).toBeInTheDocument();

    // Check if the start button is rendered correctly
    const start = screen.getByText("Start");
    expect(start).toBeInTheDocument();

    // Check if the lap button is disabled
    const lapButton = screen.getByRole("button", { name: "Lap" });
    expect(lapButton).toBeDisabled();

    // Check if the start button is enabled
    const startButton = screen.getByRole("button", { name: "Start" });
    expect(startButton).toBeEnabled();

    // Check if there's no laps time yet
    const ulElements = screen.getByRole("list");
    expect(ulElements).toBeEmptyDOMElement();
  });

  describe("when the Start button is clicked", () => {
    // Run the code below before each test in this suite
    beforeEach(() => {
      const { rerender } = render(<StopWatch {...mockProps} />);

      const startButton = screen.getByRole("button", { name: "Start" });
      fireEvent.click(startButton);

      rerender(<StopWatch {...mockProps} time={100} isCounting={true} />);
    });

    test("should handle click event", () => {
      // Check if the click event is handled correctly
      expect(mockProps.handleStartStop).toHaveBeenCalled();
      expect(mockProps.handleLapsReset).not.toHaveBeenCalled();
    });

    test("should render time correctly", () => {
      // Configure the mockFormatTime to return the correct value
      mockFormatTime.mockReturnValue("00:00:01.00");

      const time = screen.getByText(/(\d{2}\:){2}\d{2}\.\d{2}/);
      expect(time).toBeInTheDocument();
    });

    test("should render buttons correctly", () => {
      // Check if the lap button is rendered correctly
      const lap = screen.getByText("Lap");
      expect(lap).toBeInTheDocument();

      // Check if the stop button is rendered correctly
      const stop = screen.getByText("Stop");
      expect(stop).toBeInTheDocument();
    });
  });

  describe("when the Stop button is clicked", () => {
    // Run the code below before each test in this suite
    beforeEach(() => {
      const { rerender } = render(
        <StopWatch {...mockProps} time={100} isCounting={true} />
      );

      const stopButton = screen.getByRole("button", { name: "Stop" });
      fireEvent.click(stopButton);

      rerender(<StopWatch {...mockProps} time={150} />);
    });

    test("should handle click event", () => {
      // Check if the click event is handled correctly
      expect(mockProps.handleStartStop).toHaveBeenCalled();
      expect(mockProps.handleLapsReset).not.toHaveBeenCalled();
    });

    test("should render time correctly", () => {
      // Configure the mockFormatTime to return the correct value
      mockFormatTime.mockReturnValue("00:00:01.50");

      const time = screen.getByText(/(\d{2}\:){2}\d{2}\.\d{2}/);
      expect(time).toBeInTheDocument();
    });

    test("should render buttons correctly", () => {
      // Check if the reset button is rendered correctly
      const reset = screen.getByText("Reset");
      expect(reset).toBeInTheDocument();

      // Check if the start button is rendered correctly
      const start = screen.getByText("Start");
      expect(start).toBeInTheDocument();
    });
  });

  describe("when the Lap button is clicked", () => {
    // Run the code below before each test in this suite
    beforeEach(() => {
      const { rerender } = render(
        <StopWatch {...mockProps} time={50} isCounting={true} />
      );

      // Assuming click the lap button twice
      const lapButton = screen.getByRole("button", { name: "Lap" });
      fireEvent.click(lapButton);
      fireEvent.click(lapButton);

      rerender(
        <StopWatch
          {...mockProps}
          time={150}
          isCounting={true}
          laps={[50, 120]}
        />
      );
    });

    test("should handle click event", () => {
      // Check if the click event is handled correctly
      expect(mockProps.handleStartStop).not.toHaveBeenCalled();
      expect(mockProps.handleLapsReset).toHaveBeenCalled();
    });

    test("should record laps correctly", () => {
      // Check if there's no laps time yet
      const listElements = screen.getAllByRole("listitem");
      expect(listElements).toHaveLength(2);
    });
  });

  describe("when the Reset button is clicked", () => {
    // Run the code below before each test in this suite
    beforeEach(() => {
      const { rerender } = render(<StopWatch {...mockProps} time={100} />);

      // Assuming click the lap button twice
      const resetButton = screen.getByRole("button", { name: "Reset" });
      fireEvent.click(resetButton);

      rerender(<StopWatch {...mockProps} />);
    });

    test("should handle click event", () => {
      // Check if the click event is handled correctly
      expect(mockProps.handleStartStop).not.toHaveBeenCalled();
      expect(mockProps.handleLapsReset).toHaveBeenCalled();
    });

    test("should render time with the initial value", () => {
      // Configure the mockFormatTime to return the correct value
      mockFormatTime.mockReturnValue("00:00:00.00");

      const time = screen.getByText("00:00:00.00");
      expect(time).toBeInTheDocument();
    });

    test("should render buttons correctly", () => {
      // Check if the lap button is rendered correctly
      const lap = screen.getByText("Lap");
      expect(lap).toBeInTheDocument();

      // Check if the start button is rendered correctly
      const start = screen.getByText("Start");
      expect(start).toBeInTheDocument();

      // Check if the lap button is disabled
      const lapButton = screen.getByRole("button", { name: "Lap" });
      expect(lapButton).toBeDisabled();
    });

    test("should there is no laps yet", () => {
      const ulElements = screen.getByRole("list");
      expect(ulElements).toBeEmptyDOMElement();
    });
  });
});
