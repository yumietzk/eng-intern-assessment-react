import { renderHook, act } from "@testing-library/react";
import { useTime } from "../../hooks/useTime";

// Mock timers
jest.useFakeTimers();

describe("useTime custom hook", () => {
  test("should start counting when handleStart is called", () => {
    const { result } = renderHook(() => useTime());

    act(() => {
      result.current.handleStart();
    });

    // Advacne time by 10 milliseconds
    act(() => {
      jest.advanceTimersByTime(10);
    });

    // Check if counting has started
    expect(result.current.isCounting).toBe(true);
    // Check if the time is updated
    expect(result.current.time).toBe(1);
  });

  test("should stop counting when handleStop is called", () => {
    const { result } = renderHook(() => useTime());

    act(() => {
      result.current.handleStart();
      result.current.handleStop();
    });

    // Check if counting has stopped
    expect(result.current.isCounting).toBe(false);
  });

  test("should record laps when handleRecordLaps is called", () => {
    const { result } = renderHook(() => useTime());

    // Trigger the handleRecordLaps function twice
    act(() => {
      result.current.handleStart();
      result.current.handleRecordLaps();
      result.current.handleRecordLaps();
    });

    // Check if laps are recorded
    expect(result.current.laps.length).toBe(2);
  });

  test("should reset to zero when handleReset is called", () => {
    const { result } = renderHook(() => useTime());

    act(() => {
      result.current.handleStart();
      result.current.handleReset();
    });

    // Check if counting has stopped
    expect(result.current.isCounting).toBe(false);
    // Check if the time is reset to 0
    expect(result.current.time).toBe(0);
    // Check if the laps time is also reset
    expect(result.current.laps.length).toBe(0);
  });
});
