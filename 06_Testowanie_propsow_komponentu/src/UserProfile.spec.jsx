import { UserProfile } from "./UserProfile";
import { screen, render } from "@testing-library/react";

describe("<UserProfile /> test", () => {
  test("displays user information", () => {
    render(<UserProfile name="Mark" surname="Doe" email="example@gmail.com" />);

    expect(screen.getByText("Name: Mark")).toBeInTheDocument();
    expect(screen.getByText("Surname: Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: example@gmail.com")).toBeInTheDocument();
  });
  test("displays user avatar", () => {
    render(<UserProfile avatarUrl="www.example.com" />);

    expect(screen.getByAltText("User avatar")).toHaveAttribute(
      "src",
      "www.example.com"
    );
  });
  test("not displays user avatar", () => {
    render(<UserProfile />);

    expect(screen.queryByAltText("User avatar")).not.toBeInTheDocument();
  });
  test("displays default text when there is no data", () => {
    render(<UserProfile />);

    expect(
      screen.getByText("Name: Information not provided")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Surname: Information not provided")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Email: Information not provided")
    ).toBeInTheDocument();
  });
});
