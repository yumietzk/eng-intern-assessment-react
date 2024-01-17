import { formatTime } from "../../utils/formatTime";

describe("formatTime function", () => {
  test("should format time correctly", () => {
    // 0 seconds
    expect(formatTime(0)).toBe("00:00:00.00");

    // 0.55 seconds = 550 milliseconds
    expect(formatTime(55)).toBe("00:00:00.55");

    // 1 second = 1000 milliseconds
    expect(formatTime(100)).toBe("00:00:01.00");

    // 3.55 seconds = 3550 milliseconds
    expect(formatTime(355)).toBe("00:00:03.55");
  });
});
