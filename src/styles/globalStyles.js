import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"
//import { generateMedia } from "styled-media-query"

import { fontFamilly } from "./typography"
import "../fonts/fonts.css"
//import "./basetype.css"
import { globalTypography } from "./typography"
import { setFlex, spaceScale } from "./utilsStyled"
import { setColor } from "./colors"
const GlobalStyles = createGlobalStyle`
 ${reset}
${globalTypography}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html{
    overflow-wrap: normal;
  }

  body {
    font-family: ${fontFamilly.bodyFont || fontFamilly.defaultFonts};
    font-size: 100%;
    line-height: 1.5;
    width:100vw;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }

  .red {
    background-color: red;
    padding:${spaceScale.spaceSupL};

    p{
      background-color: ${setColor.mainGrey};
    }

    & .space4xs{
      padding: ${spaceScale.space4xs};
    }
    
    & .space3xs{
      padding: ${spaceScale.space3xs};
    }
    
    & .space2xs{
      padding: ${spaceScale.space2xs};
    }
    
    & .spaceXs{
      padding: ${spaceScale.spaceXs};
    }
    
    & .spaceS{
      padding: ${spaceScale.spaceS};
    }
    
    & .spaceM{
      padding: ${spaceScale.spaceM};
    }
    
    & .spaceL{
      padding: ${spaceScale.spaceL};
    }
    
    & .spaceXl{
      padding: ${spaceScale.spaceXl};
    }
    
    & .space2xl{
      padding: ${spaceScale.space2xl};
    }
    
    & .space3xl{
      padding: ${spaceScale.space3xl};
    }    
    
    & .spaceSupM{
      padding: ${spaceScale.spaceSupM};
    }
    & .spaceSupL{
      padding: ${spaceScale.spaceSupL};
    }

    & .spaceSup2xl{
      padding: ${spaceScale.spaceSup2xl};
    }

    & .spaceMup2xl{
      padding: ${spaceScale.spaceMup2xl};
    }
  }
`

export default GlobalStyles
