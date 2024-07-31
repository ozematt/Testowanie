import { describe, it, expect, test } from "vitest";
import { multiply, isAdult, getUsername } from "./functions";

describe("test functions", () => {
  describe("test multiplay function", () => {
    test("2 * 2 should return 4", () => {
      expect(multiply(2, 2)).toBe(4);
    });
  });

  describe("test isAdult function", () => {
    test.each([
      [18, true],
      [20, true],
      [17, false],
      [16, false],
    ])("isAdult for %s returns %s", (number, expected) => {
      expect(isAdult(number)).toBe(expected);
    });
  });

  describe("test getUsername function", () => {
    test("should resolve with user data when userId is 1", async () => {
      const userId = 1;
      const expected = { id: 1, name: "John Doe" };

      await expect(getUsername(userId)).resolves.toEqual(expected);
    });

    test("should reject with error message when userId is not 1", async () => {
      const userId = 2;
      const expectedError = new Error("User not found");

      await expect(getUsername(userId)).rejects.toEqual(expectedError);
    });
  });
});
