import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Button from "./Button";

describe("Given a Button componet", () => {
  describe("When it receives 'Sign up' text and its rendered", () => {
    test("The it should show a button with 'Sign up' on it", () => {
      const text = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <Button text={text} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
