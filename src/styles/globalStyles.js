import { createGlobalStyle } from "styled-components"

import { reset } from "styled-reset"
//import { generateMedia } from "styled-media-query"

import "../fonts/fonts.css"
import { spaceScale } from "./utilsStyled"
export const GlobalStyle = createGlobalStyle`
  ${reset};

  *,*::before,*::after {
    box-sizing: border-box;
  }

  html,body {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body{
    width: 100%;
    font-size: 1rem;
    color:black;
    background-color: silver;
  }

  .spaceXl {
    padding: ${spaceScale.spaceXl};
  }
`
