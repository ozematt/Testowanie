import { describe, it, expect, test } from "vitest";
import { multiply, isAdult, getUsername } from "./functions";

discribe("multiplay two numbers", () => {
  test("2 * 2 shoul return 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
