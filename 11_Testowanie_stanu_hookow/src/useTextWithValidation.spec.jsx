import { renderHook, act } from "@testing-library/react";
import { useTextWithValidation } from "./useTextWithValidation";

describe("< useTextWithValidation />", () => {
  it("should have initialization values", () => {
    const { result } = renderHook(useTextWithValidation);

    expect(result.current.text).toBe("");
    expect(result.current.isValid).toBe(false);
  });
  it("should set isValid on true when text is correct", () => {
    const { result } = renderHook(useTextWithValidation);

    act(() => {
      result.current.handleChange("John");
    });
    expect(result.current.isValid).toBe(true);
  });
});
