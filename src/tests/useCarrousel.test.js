import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useCarrousel } from "../hooks/useCarrousel.js";

describe("useCarrousel hook", () => {
  it("should star with activeElement = 0", () => {
    const { result } = renderHook(() => useCarrousel());
    expect(result.current.activeElement).toBe(0);
  });

  it("should change activeElement over time", () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useCarrousel());
    expect(result.current.activeElement).toBe(0);

    // simulates the passage of 4 seconds
    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(result.current.activeElement).toBe(1);

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(result.current.activeElement).toBe(2);

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(result.current.activeElement).toBe(0);

    vi.useRealTimers();
  });

  it("should clear interval on unmount", () => {
    vi.useFakeTimers();

    // Create a spy on the global clearInterval function
    const clearSpy = vi.spyOn(globalThis, "clearInterval");
    
    const { unmount } = renderHook(() => useCarrousel());
    unmount();

    expect(clearSpy).toHaveBeenCalled();

    vi.useRealTimers();
  });
});
