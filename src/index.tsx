import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import EventForm from "./components/EventForm/EventForm";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
      <EventForm />
    </ThemeProvider>
  </React.StrictMode>
);
