import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  box-sizing: border-box;

  main {
    min-height: 100vh;
    position: relative;
    width: 100%;
  }

`;

export default GlobalStyle;
