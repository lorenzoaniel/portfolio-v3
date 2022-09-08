import { createGlobalStyle } from "styled-components";

export const GlobalStyleApp = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: black;
  }

  html {
    height: 100vh;
    width: 100vw;

    body {
      height: 100%;
      width: 100%;

      #root {
        height: inherit;
        width: inherit;
      }
    }
  }
`;
