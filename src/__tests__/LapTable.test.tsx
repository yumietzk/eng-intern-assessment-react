import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LapTable from "../LapTable";
import * as formatTime from "../utils/formatTime";

// Mock function
const mockFormatTime = jest.spyOn(formatTime, "formatTime");

describe("LapTable component", () => {
  test("should render each lap with correct lap times", () => {
    // 500, 2000, 5500 milliseconds
    const mockProps = { laps: [50, 200, 550] };
    render(<LapTable {...mockProps} />);

    // Configure the mockFormatTime to return the correct value
    // Elapsed 500, 1500, 3500 milliseconds
    mockFormatTime.mockReturnValue("00:00:00.50");
    mockFormatTime.mockReturnValue("00:00:01.50");
    mockFormatTime.mockReturnValue("00:00:03.50");

    // Check if lap rows are rendered with correct lap times
    const lapTime1 = screen.getByText("00:00:00.50");
    const lapTime2 = screen.getByText("00:00:01.50");
    const lapTime3 = screen.getByText("00:00:03.50");

    expect(lapTime1).toBeInTheDocument();
    expect(lapTime2).toBeInTheDocument();
    expect(lapTime3).toBeInTheDocument();
  });
});
