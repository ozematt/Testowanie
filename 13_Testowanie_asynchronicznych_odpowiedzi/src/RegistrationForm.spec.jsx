import { RegistrationForm } from "./RegistrationForm";
import { render, screen } from "@testing-library/react";
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
});
