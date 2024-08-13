import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { UserForm } from "./UserForm";
import { api } from "./api";

import { render } from "@testing-library/react";

describe("testing testFunction", () => {
  test("loads user data and fills the form", async () => {
    renderComponent(1);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("Jane")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Doe")).toBeInTheDocument();
    expect(screen.getByDisplayValue("jane@example.com")).toBeInTheDocument();
  });
  test("validates form data and displays error messages", async () => {
    const user = userEvent.setup();
    renderComponent(1);

    await user.clear(await screen.findByLabelText("First Name"));
    await user.clear(screen.getByLabelText("Email"));
    await user.type(screen.getByLabelText("Email"), "wrongemail");

    await user.click(screen.getByRole("button", { name: "Update User" }));

    expect(
      await screen.findByText("First name is required")
    ).toBeInTheDocument();
    expect(screen.getByText("Email is invalid")).toBeInTheDocument();
    expect(screen.queryByText("User has been updated")).not.toBeInTheDocument();
  });
  test("submits the form when data is valid", async () => {
    const user = userEvent.setup();
    renderComponent(1);

    await user.type(await screen.findByLabelText("First Name"), "Jane");
    await user.type(screen.getByLabelText("Last Name"), "Doe");
    await user.type(screen.getByLabelText("Email"), "jane.doe@example.com");

    await user.click(screen.getByRole("button", { name: "Update User" }));

    expect(
      await screen.findByText("User has been updated")
    ).toBeInTheDocument();
  });
});

function renderComponent(userId) {
  const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

  render(
    <Provider store={store}>
      <UserForm userId={userId} />
    </Provider>
  );
}
