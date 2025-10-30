import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useModal } from "../hooks/useModal";
import { act } from "react";

describe("useModal hook", () => {
  it("should star with showModal= false", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.showModal).toBeFalsy();
  });
  
  it("it should allow changing the value of showModal manually", () => {
    const { result } = renderHook(() => useModal());
    
    act(() => {
      result.current.setShowModal(true);
    });

    expect(result.current.showModal).toBeTruthy();
  });

  it("it should automatically hide the modal after 3 seconds", () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useModal());
    
    act(() => {
      result.current.setShowModal(true);
    });

    expect(result.current.showModal).toBeTruthy();

    // simulates the passage of 3 seconds
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(result.current.showModal).toBeFalsy();
  });

  it("should clear timeout on unmount", () => {
    vi.useFakeTimers();

    // Create a spy on the global clearTimeout function
    const clearSpy = vi.spyOn(globalThis, "clearTimeout");

    const { unmount } = renderHook(() => useModal());
    unmount();

    expect(clearSpy).toHaveBeenCalled();

    vi.useRealTimers();
  });
});