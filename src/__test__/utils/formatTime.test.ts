import { formatTime } from "../../utils/formatTime";

describe("formatTime", () => {
  test("should format time correctly", () => {
    expect(formatTime(0)).toBe("00:00:00.00");
  });
});
