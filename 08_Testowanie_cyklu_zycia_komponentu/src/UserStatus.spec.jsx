import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { UserStatus } from "./UserStatus";

describe(" <UserStatus /> ", () => {
  test("Testing loading and displaying user data", () => {
    const data = { name: "John" };
    localStorage.setItem("user-1", JSON.stringify(data));
    render(<UserStatus userId="1" />);

    const title = screen.getByText("User Status");
    const userData = screen.getByText("John");

    expect(title).toBeInTheDocument();
    expect(userData).toBeInTheDocument();
  });
  test("Testing user data updates", async () => {
    const data = { name: "John" };
    localStorage.setItem("user-1", JSON.stringify(data));
    render(<UserStatus userId="1" />);

    const setActiveButton = screen.getByRole("button", { name: "Set Active" });

    await userEvent.click(setActiveButton);
    const localData = JSON.parse(localStorage.getItem("user-1"));
    expect(localData.active).toBeTruthy();
  });
  test("Testing user data cleaning", () => {
    const data = { name: "John" };
    localStorage.setItem("user-1", JSON.stringify(data));
    const { unmount } = render(<UserStatus userId="1" />);

    const userData = screen.getByText("John");
    expect(userData).toBeInTheDocument();

    unmount();

    render(<UserStatus />);
    expect(userData).not.toBeInTheDocument();
  });
});
