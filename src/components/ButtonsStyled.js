import styled, { css } from "styled-components"

// Import Components for App
import { Link } from "gatsby"

// Import helpers
import {
  setLetterSpacing,
  setBorder,
  setTransition,
  spaceScale,
  setRadius,
  setPxToRem,
} from "../styles/utilsStyled"
import { setColor } from "../styles/colors"
// Styled CSS
const ButtonStyles = css`
  text-transform: uppercase;
  text-decoration: none;
  ${setLetterSpacing()};
  padding: ${spaceScale.spaceXs} ${spaceScale.spaceS};
  display: inline-block;
  ${setTransition()};
  ${setRadius({ allPx: 4 })};
  cursor: pointer;
  background: none;
  font-weight: 900;

  &.btnIconBar {
    padding: ${setPxToRem(8)} ${setPxToRem(4)};
    border: none;
    height: auto;
    color: ${setColor.mainWhite};
    border-radius: inherit;

    &:focus,
    &:active,
    &:focus {
      outline: none;
    }
  }

  ${({ small }) =>
    small &&
    `
      padding: ${setPxToRem(8)} ${setPxToRem(12)};
  `}

  ${({ notRadius }) =>
    notRadius &&
    `
      border-radius:0;
  `}

  ${({ blue }) =>
    blue &&
    `
    color: ${setColor.mainWhite};
    border: ${setBorder({ color: `${setColor.mainBlue}` })};
    background: ${setColor.mainBlue};
  `}

  ${({ white }) =>
    white &&
    `
    color: ${setColor.mainBlue};
    border: ${setBorder({ color: setColor.mainBlue })};
    background: ${setColor.mainWhite};
  `}

  ${({ blueOutline }) =>
    blueOutline &&
    `
    color: ${setColor.mainblue};
    border: ${setBorder({ color: `${setColor.mainBlue}` })};
  `}

  ${({ whiteOutline }) =>
    whiteOutline &&
    `
    color: ${setColor.mainWhite};
    border: ${setBorder({ size: 2, color: setColor.mainWhite })};
  `}

  &:hover {
    ${({ blue, white, blueOutline }) =>
      (blue || white || blueOutline) &&
      `
      color: ${setColor.mainWhite};
      border: ${setBorder({ color: `${setColor.darkBlue}` })};
      background: ${setColor.darkBlue};
    `}

    ${({ whiteOutline }) =>
      whiteOutline &&
      `
      background: ${setColor.mainWhite};
      color: ${setColor.mainBlue};
    `}
  }
`

// Export Styles for the component
export const Button = styled.button`
  ${ButtonStyles};
`

export const ButtonLink = styled.a`
  ${ButtonStyles};
  &:visited {
    ${ButtonStyles};
  }
`

export const ButtonForm = styled.input`
  ${ButtonStyles};
  &:visited {
    ${ButtonStyles};
  }
`

export const GatsbyButtonLink = styled(Link)`
  ${ButtonStyles};

  &:visited {
    ${ButtonStyles};
  }
`
