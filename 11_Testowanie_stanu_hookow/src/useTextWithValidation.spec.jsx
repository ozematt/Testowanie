import { renderHook } from "@testing-library/react";
import { useTextWithValidation } from "./useTextWithValidation";

describe("< useTextWithValidation />", () => {
  it("should have initialization values", () => {
    const { result } = renderHook(useTextWithValidation);

    expect(result.current.text).toBe("");
    expect(result.current.isValid).toBe(false);
  });
});
