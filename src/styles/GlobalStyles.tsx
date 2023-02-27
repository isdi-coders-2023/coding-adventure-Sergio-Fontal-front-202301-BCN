import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one";

const GlobalStyles = createGlobalStyle`
*, 
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }
`;

export default GlobalStyles;
