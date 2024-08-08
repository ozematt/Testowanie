import { ContactForm } from "./ContactForm";
import { userEvent } from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { expect } from "vitest";

describe("<ContactForm />", () => {
  test("testing component rendering", () => {
    render(<ContactForm onSubmit={() => void 0} />);

    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Message:")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("testing form send with data", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn().mockName("handleSubmit");

    render(<ContactForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText("Name:"), "John");
    await user.type(screen.getByLabelText("Message:"), "Hello!");
    await user.click(screen.getByRole("button"));

    expect(handleSubmit).toBeCalled();
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "John",
      message: "Hello!",
    });
  });
  test("testing incomplete sended data", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn().mockName("handleSubmit");

    render(<ContactForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText("Name:"), "John");
    await user.click(screen.getByRole("button"));

    expect(handleSubmit).not.toBeCalled();
  });
});
