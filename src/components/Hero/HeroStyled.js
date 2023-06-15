import styled from "styled-components"
import { Section, SectionContentCenter } from "../SectionStyled"
import {
  setLetterSpacing,
  setLinearBcg,
  spaceScale,
} from "../../styles/utilsStyled"
import { setColor } from "../../styles/colors"

export const HeroWrapper = styled(Section)`
  height: ${props =>
    props.home ? `calc(100vh - ${spaceScale.spaceLupXl})` : `50vh`};
  position: relative;
  margin-top: ${spaceScale.spaceLupXl};
  .container-image {
    position: absolute;
    height: 100%;

    &::before {
      content: "";
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(63, 208, 212, 0.7),
        rgba(34, 34, 34, 0.2)
      );
      z-index: 1;
    }
  }
`
export const HeroBanner = styled(SectionContentCenter)`
  display: grid;
  position: relative;
  padding: ${spaceScale.spaceMup2xl};
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  z-index: 20;
  ${setLetterSpacing()};

  h1 {
    color: ${setColor.mainWhite};
    text-transform: uppercase;
  }

  p {
    color: ${setColor.mainWhite};
    margin-bottom: ${spaceScale.spaceL};
  }
`
