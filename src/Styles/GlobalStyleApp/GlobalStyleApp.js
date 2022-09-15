import { createGlobalStyle } from "styled-components";

export const GlobalStyleApp = createGlobalStyle`
  * {
    /*COLORS*/
    --grey-outlet-bg: rgba(233, 236, 239, 1);
    --grey-navbar-bg: rgba(52, 58, 64, 1);
    
    --grey-navbar-items: rgba(222, 226, 230, 1);
    
    /*SHADOWS*/
    --black-shadow-inset: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.8) inset;
    --darkgrey-shadow-text-menuitems: 0 0.5rem 0.2rem rgba(33, 37, 41, 1);  


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
