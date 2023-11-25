import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "./App";
import { Provider } from "react-redux";
import store from "../../store/configure-store";

it("upon clicking adds product to order section", async () => {
  setup();
  const asparagusComp = screen.getByText("Asparagus");
  userEvent.click(asparagusComp);
  expect(screen.getAllByText("Asparagus").length).toEqual(2);
});

function setup() {
  return {
    ...render(
      <Provider store={store}>
        <App />
      </Provider>
    ),
  };
}
