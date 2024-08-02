import { UserProfile } from "./UserProfile";
import { screen, render } from "@testing-library/react";

describe("<UserProfile /> test", () => {
  test("displays user information", () => {
    render(<UserProfile name="Mark" surname="Doe" email="example@gmail.com" />);

    expect(screen.getByText("Name: Mark")).toBeInTheDocument();
    expect(screen.getByText("Surname: Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: example@gmail.com")).toBeInTheDocument();
  });
});
