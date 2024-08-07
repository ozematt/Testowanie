import { RegistrationForm } from "./RegistrationForm";
import { render, screen } from "@testing-library/react";

describe("<RegistrationForm />", () => {
  test("should render all form elements", () => {
    render(<RegistrationForm />);
    const email = screen.getByRole("textbox", { id: "email" });
    const password = screen.getByRole("textbox", { id: "password" });
    const registerButton = screen.getByRole("button", { name: "Register" });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
