import { describe, expect } from "vitest";
import { testFunction } from "./testFunction";

describe("testing testFunction", () => {
  it("should return data from msw", async () => {
    expect(await testFunction()).toEqual({ data: "Testing some data send" });
  });
});
