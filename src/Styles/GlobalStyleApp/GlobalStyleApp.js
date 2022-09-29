import { createGlobalStyle } from "styled-components";

export const GlobalStyleApp = createGlobalStyle`
  * {
    /*COLORS*/

    --grey-outlet-bg: rgba(233, 236, 239, 1);
    --grey-navbar-bg: rgba(52, 58, 64, 1);
    
    --grey-navbar-items: rgba(222, 226, 230, 1);
    --darkgrey-navbar-hover: rgba(108, 117, 125, 1);

    --lightgrey-outlet-font: rgba(248,249,250,1);
    --darkgrey-outlet-bg: rgba(33,37,41,1);
    --darkgrey-outletinner-bg: rgba(28,33,38,1);

    --grey-outlet-maintitle: rgba(222, 226, 230, 1);
    --grey-outlet-sectitle: rgba(233, 236, 239, 1);
    --darkgrey-outlet-maintitle-container: rgba(52, 58, 64, 1);
    --darkgrey-outlet-sectitle-container: rgba(73, 80, 87, 1);

    --darkgrey-summary-avatarframe: rgba(33,37,41,1);
    --darkgrey-summary-avatarinner: rgba(28,33,38,1);
    --lightgrey-summary-font-color: rgba(206,212,218,1);

    --darkgrey-skills-skilliconframe-bg: rgba(33,37,41,1);
    --darkgrey-skills-skilldescframe-bg: rgba(52,58,64,1);
    --lightgrey-skills-font-color: rgba(206,212,218,1);
    --lightgrey-skills-icon-color: rgba(206,212,218,1);

    --grey-outlet-submenuitem-title: rgba(233, 236, 239, 1);
    --grey-outlet-submenuitem-bg: rgba(73,80,87,1);
    --grey-outlet-submenu-bg: rgba(52, 58, 64, 1);

    /*FONT-FAMILY*/
    --default-Bebas-fontstyle: "Bebas Neue", cursive;

    /*SHADOWS*/
    --default-font-text-shadow: 0 0.3rem 0.2rem rgba(0, 0, 0, 0.8);

    --black-shadow-inset: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.8) inset;
    --black-shadow-outset: 0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.5);
    --darkgrey-shadow-text-menuitems: 0 0.5rem 0.2rem rgba(33, 37, 41, 1);
    
    --black-shadow-outletmain-outset: 0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.8);
    --black-shadow-outletmain-inset: 0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.8) inset;
    --black-shadow-outletmaintitle-outset: 0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.5);

    --black-shadow-skillsframe-inset: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.8) inset;
    --black-shadow-skillsframe-outset: 0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.5);

    --darkgrey-shadow-submenu-menuitems: 0 0.3rem 0.2rem rgba(0, 0, 0, 1); 
    --darkgrey-shadow-submenu-menu-outset: 0 0 0.7rem 0.3rem rgba(0, 0, 0, 0.5);
    --darkgrey-shadow-submenu-menu-inset: 0 0 0.1rem 0.1rem rgba(33, 37, 41, 1) inset;


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
