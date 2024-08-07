import { useLocalStorage } from "./useLocalStorage";
import { renderHook, act } from "@testing-library/react";

describe("useLocalStorage hook", () => {
  test("should initialize with the initial value when localStorage does not have the key", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );

    expect(result.current[0]).toBe("defaultValue");
  });
  test("should initialize with the value from localStorage if it exists", () => {
    localStorage.setItem("key", JSON.stringify("storedValue"));
    const { result } = renderHook(() => useLocalStorage("key", "initialValue"));

    expect(result.current[0]).toBe("storedValue");
  });
  test("should be able to update the value", () => {
    const { result } = renderHook(() => useLocalStorage("key", "initialValue"));
    const [, setValue] = result.current;

    act(() => {
      result.current[1]("newValue");
    });

    expect(result.current[0]).toBe("newValue");
    expect(localStorage.getItem("key")).toBe(JSON.stringify("newValue"));
  });
  test("should update the value when localStorage changes", () => {
    const { result } = renderHook(() => useLocalStorage("key", "initialValue"));

    act(() => {
      localStorage.setItem("key", JSON.stringify("externalValue"));
      window.dispatchEvent(new Event("storage"));
    });

    expect(result.current[0]).toBe("externalValue");
  });
});
