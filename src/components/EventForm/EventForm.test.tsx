import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import EventForm from "./EventForm";
import theme from "../../styles/theme";

describe("Given EnventForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input labeled 'Email'", () => {
      const label = "Email";

      render(
        <ThemeProvider theme={theme}>
          <EventForm />
        </ThemeProvider>
      );

      const expectedEmailInput = screen.getByLabelText(label);

      expect(expectedEmailInput).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Password'", () => {
      const label = "Password";

      render(
        <ThemeProvider theme={theme}>
          <EventForm />
        </ThemeProvider>
      );

      const expectedPasswordInput = screen.getByLabelText(label);

      expect(expectedPasswordInput).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Image'", () => {
      const label = "Image";

      render(
        <ThemeProvider theme={theme}>
          <EventForm />
        </ThemeProvider>
      );

      const expectedImageInput = screen.getByLabelText(label);

      expect(expectedImageInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up' on it", () => {
      const textButton = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <EventForm />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: textButton });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
