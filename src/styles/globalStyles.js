import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"
//import { generateMedia } from "styled-media-query"

import { fontFamilly } from "./typography"
import { spaceScale, setLetterSpacing } from "./utilsStyled"
import { setColor } from "./colors"
import "../fonts/fonts.css"
//import "./basetype.css"
const GlobalStyles = createGlobalStyle`
 ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${fontFamilly.bodyFont};
    font-size: 1rem;
    color: ${setColor.mainBlack};
  }

  body {
    font-family: ${fontFamilly.bodyFont};
    font-size: calc(1rem + 0.35vw); /* Responsive base font size */
    line-height: calc(1rem + 1.333vw); /* Responsive Vertical Rhythm */
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    font-family: ${fontFamilly.headingsFont};
    padding: calc(1.5rem + 1vw) 0; /* Responsive paddings */
    color: ${setColor.mainBlue};
    font-weight: 900;
    ${setLetterSpacing()};
  }

  h1, .h1 {
    font-size: clamp(2.8rem, calc(2.31rem + 2.43vw), 4.2rem);
    line-height: calc(3.713rem + 2.5vw); /* Responsive Vertical Rhythm */
  }

  h2, .h2 {
    font-size: clamp(2.33rem, calc(1.98rem + 1.78vw), 3.36rem);
    line-height: calc(2.856rem + 2.25vw); /* Responsive Vertical Rhythm */
  }

  h3, .h3 {
    font-size: clamp(1.94rem, calc(1.69rem + 1.29vw), 2.69rem);
    line-height: calc(2.197rem + 1.5vw); /* Responsive Vertical Rhythm */
  }

  h4, .h4 {
    font-size: clamp(1.62rem, calc(1.44rem + 0.92vw), 2.15rem);
    line-height: calc(1.9rem + 1vw); /* Responsive Vertical Rhythm */
  }

  h5, .h5 {
    font-size: clamp(1.35rem, calc(1.22rem + 0.64vw), 1.72rem);
    line-height: calc(1.7rem + 1vw); /* Responsive Vertical Rhythm */
  }

  h6, .h6 {
    font-size: clamp(1.13rem, calc(1.04rem + 0.43vw), 1.38rem);
    line-height: calc(1.4rem + .2vw); /* Responsive Vertical Rhythm */
  }

    h4, .h4, h5, .h5, h6, .h6 {
    padding: calc(1rem + .2vw) 0;
  }

  p {
    font-size: clamp(1.13rem, calc(1.04rem + 0.43vw), 1.38rem);
    margin: 0 0 calc(1rem + .3vw) 0;
  }

  small, .small {
    font-size: 80%;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`

export default GlobalStyles
