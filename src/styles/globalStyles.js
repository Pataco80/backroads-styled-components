import { createGlobalStyle } from "styled-components"

import { reset } from "styled-reset"
//import { generateMedia } from "styled-media-query"

import "../fonts/fonts.css"
import { spaceScale } from "./utilsStyled"
import { typeScale, globalTypography } from "./typography"
export const GlobalStyle = createGlobalStyle`
  ${reset};
${globalTypography};
  *,*::before,*::after {
    box-sizing: border-box;
  }

  html,body {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body{
    width: 100%;
    font-size: ${typeScale.stepXs};
    line-height: ${spaceScale.spaceXs};
    color:black;
    background-color: silver;
  }

  .spaceXl {
    padding: ${spaceScale.spaceXl};
  }
`
