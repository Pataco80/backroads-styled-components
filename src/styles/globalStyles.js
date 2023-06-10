import { createGlobalStyle } from "styled-components"

import { reset } from "styled-reset"
//import { generateMedia } from "styled-media-query"

import { fontFamilly, typeScale } from "./typography"
import { globalTypography } from "./typography"
import { setColor } from "./colors"
import "../fonts/fonts.css"
export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${globalTypography};

  *,*::before,*::after {
    box-sizing: border-box;
  }

  html,body {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${fontFamilly.bodyFont};
		font-size: ${typeScale.stepS};
		line-height: ${typeScale.lineS};
    color: ${setColor.mainBlack};
  }
  



  .red{
    background-color:red;
    padding:3rem;

  }
  section div {
    margin-bottom: 2rem;
  }
  .mainBlue {
    background-color:${setColor.mainBlue};
  }
  .mainWhite {
    background-color:${setColor.mainWhite};
  }
  .darkWhite {
    background-color:${setColor.darkWhite};
  }
  .mainGrey {
    background-color:${setColor.mainGrey};
  }
  .darkGrey {
    background-color:${setColor.darkGrey};
  }
  
`
