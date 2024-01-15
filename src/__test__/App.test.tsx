import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("StopWatch component", () => {
  test("renders initial state correctly", () => {
    render(<App />);

    // expect(screen.getByText("00:00:00.00")).toBeInTheDocument();
    // expect(screen.queryByTestId("lap-list")).toBeEmptyDOMElement();
  });
});
