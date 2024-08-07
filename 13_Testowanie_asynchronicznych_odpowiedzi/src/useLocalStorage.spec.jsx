import { useLocalStorage } from "./useLocalStorage";
import { renderHook } from "@testing-library/react";

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
});
