import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { TaskList } from "./TaskList";

describe("<TaskList />", () => {
  test("renders loading", () => {
    render(<TaskList />);
    expect(screen.getByText("Data is loading...")).toBeInTheDocument();
  });

  test("updates tasks list after a delay", async () => {
    render(<TaskList />);
    const delayedTasks = await screen.findByText("Task 1", "Task 2");
    expect(delayedTasks).toBeInTheDocument();
  });

  test("initially does not show tasks list", async () => {
    render(<TaskList />);
    const firstTaskElement = await screen.findByText("Task 1");
    const secondTaskElement = await screen.findByText("Task 2");

    expect(firstTaskElement).toBeInTheDocument();
    expect(secondTaskElement).toBeInTheDocument();
  });

  test("after loading the task list, the loading state is no longer present in the DOM", async () => {
    render(<TaskList />);

    // możemy po prostu tylko poczekać, aż element zostanie znaleziony bez przypisywania go
    await screen.findByText("Task 1");
    const loadingElement = screen.queryByText("Data is loading...");

    expect(loadingElement).not.toBeInTheDocument();

    // waitFor - jest ogólnym narzędziem do oczekiwania na spełnienie warunku
    // await waitFor(() =>
    //   expect(screen.queryByText("Data is loading...")).not.toBeInTheDocument()
    // );
  });
});
