import { useDocumentTitle } from "./useDocumentTitle";
import { renderHook } from "@testing-library/react";

describe("useDocumentTitle hook", () => {
  test("should display document title", () => {
    renderHook(() => useDocumentTitle("Test title"));
    expect(document.title).toBe("Test title");
  });
  test("should display updated document title", () => {
    const { rerender } = renderHook(({ args }) => useDocumentTitle(args), {
      initialProps: { args: "Test title" },
    });

    rerender({ args: "New title" });
    expect(document.title).toBe("New title");
  });
  test("should display basic title after unmount", () => {
    const { unmount } = renderHook(useDocumentTitle);
    unmount();
    expect(document.title).toBe("Cleanup title");
  });
});
