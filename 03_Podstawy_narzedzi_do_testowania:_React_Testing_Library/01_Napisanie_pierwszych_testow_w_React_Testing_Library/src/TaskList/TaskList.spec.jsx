import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { TaskList } from "./TaskList";

describe("<TaskList />", () => {
  test("renders loading", () => {
    render(<TaskList />);
    expect(screen.getByText("Data is loading...")).toBeInTheDocument();
  });

  test("updates tasks list after a delay", async () => {
    render(<TaskList />);
    const deleyedTasks = await screen.findByText("Task 1", "Task 2");
    expect(deleyedTasks).toBeInTheDocument();
  });

  test("initialiy does not show tasks list", () => {
    render(<TaskList />);
    const deleyedTaskList = screen.queryByText("Task 1", "Task 2");
    expect(deleyedTaskList).not.toBeInTheDocument();
  });
});
