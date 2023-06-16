import styled from "styled-components"
import { Section, SectionCenter } from "../SectionStyled"
import {
  media,
  setBorder,
  setShadow,
  spaceScale,
} from "../../styles/utilsStyled"
import { setColor } from "../../styles/colors"

export const AboutWrapper = styled(SectionCenter)`
  display: grid;
  justify-items: center;
  padding: ${spaceScale.spaceMup2xl};

  h3 {
    margin-bottom: ${spaceScale.spaceXl};
  }
`

export const Article = styled.article`
  display: grid;
  grid-column-gap: ${spaceScale.spaceL};
  justify-items: start;

  ${media.greaterThan("tablet")`
    grid-template-columns:1fr 1fr;
  `}

  a {
    margin-top: ${spaceScale.spaceXs};
  }
`
export const ImageContainer = styled.i`
  ${media.greaterThan("tablet")`
    grid-row: 1/5;
    display: grid;
    border: ${setBorder({ size: 3, color: `${setColor.mainBlue}` })};
    transform: translate(-15px, -15px);
  `}

  .gatsby-image-wrapper {
    margin-bottom: ${spaceScale.spaceL};
    box-shadow: ${setShadow("light")};

    ${media.greaterThan("tablet")`
      transform: translate(15px, 15px);
      margin-bottom:0;
    `}
  }
`
