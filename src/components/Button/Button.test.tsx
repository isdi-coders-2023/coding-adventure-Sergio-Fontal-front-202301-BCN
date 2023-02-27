import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button componet", () => {
  describe("When it receives 'Sign up' text and its rendered", () => {
    test("The it should show a button with 'Sign up' on it", () => {
      const text = "Sign up";
      render(<Button text={text}></Button>);

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
