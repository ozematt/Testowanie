import { RegistrationForm } from "./RegistrationForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<RegistrationForm />", () => {
  test("should render all form elements", () => {
    render(<RegistrationForm />);
    const email = screen.getByLabelText("Email:");
    const password = screen.getByLabelText("Password:");
    const registerButton = screen.getByRole("button", { name: "Register" });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
  test("should display error when input email is empty", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    const password = screen.getByLabelText("Password:");
    const registerButton = screen.getByRole("button", { name: "Register" });

    await user.type(password, "123456");
    await user.click(registerButton);

    expect(await screen.findByText("Email is required.")).toBeInTheDocument();
  });
  test("should display error when input email is fill incorrectly", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    const email = screen.getByLabelText("Email:");
    const password = screen.getByLabelText("Password:");
    const registerButton = screen.getByRole("button", { name: "Register" });

    await user.type(email, "example.gmail.com");
    await user.type(password, "123456");
    await user.click(registerButton);

    expect(
      await screen.findByText("Provided email address is invalid.")
    ).toBeInTheDocument();
  });
  test("should display error when input password is empty", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    const email = screen.getByLabelText("Email:");
    const password = screen.getByLabelText("Password:");
    const registerButton = screen.getByRole("button", { name: "Register" });

    await user.type(email, "example@gmail.com");
    await user.click(registerButton);

    expect(
      await screen.findByText("Password is required.")
    ).toBeInTheDocument();
  });
  test("should display error when password is to short", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    const email = screen.getByLabelText("Email:");
    const password = screen.getByLabelText("Password:");
    const registerButton = screen.getByRole("button", { name: "Register" });

    await user.type(email, "example@gmail.com");
    await user.type(password, "1234567");
    await user.click(registerButton);

    expect(
      await screen.findByText("Password must be at least 8 characters long.")
    ).toBeInTheDocument();
  });
  test("should display no error when form is fill correctly", async () => {
    const user = userEvent.setup();
    render(<RegistrationForm />);

    const email = screen.getByLabelText("Email:");
    const password = screen.getByLabelText("Password:");
    const registerButton = screen.getByRole("button", { name: "Register" });

    await user.type(email, "example@gmail.com");
    await user.type(password, "123456789");
    await user.click(registerButton);

    await waitFor(() => {
      expect(screen.queryByText("Email is required.")).not.toBeInTheDocument();
      expect(
        screen.queryByText("Password is required.")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Password must be at least 8 characters long.")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Provided email address is invalid.")
      ).not.toBeInTheDocument();
    });
  });
});
