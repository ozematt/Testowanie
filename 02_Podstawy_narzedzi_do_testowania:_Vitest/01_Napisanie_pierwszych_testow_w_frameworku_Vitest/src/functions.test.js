import { describe, it, expect, test } from "vitest";
import { multiply, isAdult, getUsername } from "./functions";

describe("test multiplay function", () => {
  test("2 * 2 should return 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});

// describe("test isAdult function", () => {
//   test.each([
//     [18, true],
//     [20, true],
//     [17, false],
//     [16, false],
//   ])("isAdult for %s returns %s", (number, expected) => {
//     expect(isAdult(number)).toBe(expected);
//   });
// });
