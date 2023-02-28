import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one";

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100vh;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ol, ul, li {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

button {
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyles;
