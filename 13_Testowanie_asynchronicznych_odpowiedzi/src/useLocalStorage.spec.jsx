import { useLocalStorage } from "./useLocalStorage";
import { renderHook } from "@testing-library/react";

describe("useLocalStorage hook", () => {
  test("should initialize with the initial value when localStorage does not have the key", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );

    expect(result.current[0]).toBe("defaultValue");
  });
});
