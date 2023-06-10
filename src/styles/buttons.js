import styled, { css } from "styled-components"

// Import Components for App
import { Link } from "gatsby"

// Import utils and colors
import { setColor } from "./colors"
import {
	setLetterSpacing,
	setBorder,
	setTransition,
	setPxToRem,
	setRadius,
	spaceScale,
} from "./utilsStyled"

// Styled CSS
const ButtonStyles = css`
	// borders buttons default 2px / 0.12.5rem

	text-transform: uppercase;
	text-decoration: none;
	${setLetterSpacing()};
	padding: ${spaceScale.spaceXs} ${spaceScale.spaceS};
	display: inline-block;
	${setTransition()};
	${setRadius({ allPx: 12 })};
	cursor: pointer;
	background: none;

	&.btnIconBar {
		padding: ${spaceScale.space3xs} ${spaceScale.space4xs};
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
      padding: ${spaceScale.space3xs} ${spaceScale.space2xs};
  `}

	${({ noPadding }) =>
		noPadding &&
		`
      padding: 0;
  `}

  ${({ notRadius }) =>
		notRadius &&
		`
      border-radius: 0;
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
    border: ${setBorder({ color: setColor.mainWhite })};
    background: ${setColor.mainWhite};
  `}

  ${({ blueOutline }) =>
		blueOutline &&
		`
    color: ${setColor.mainBlue};
    border: ${setBorder({ color: `${setColor.primaryColor}` })};
  `}

  ${({ outline }) =>
		outline &&
		`
    color: ${setColor.mainBlue};
    border: ${setBorder({ size: 2, color: setColor.mainWhite })};
  `}

  &:hover {
		${({ primary, secondary, primaryOutline }) =>
			(primary || secondary || primaryOutline) &&
			`
      color: ${setColor.mainWhite};
      border: ${setBorder({ color: `${setColor.primaryColorD1}` })};
      background: ${setColor.primaryColorD1};
    `}

		${({ outline }) =>
			outline &&
			`
      background: ${setColor.mainWhite};
      color: ${setColor.primaryColorD1};
    `}
	}
`

// Export Styles for the component
export const Button = styled.button`
	${ButtonStyles};
`

export const ButtonLink = styled.a`
	${ButtonStyles};
`

export const ButtonForm = styled.input`
	${ButtonStyles};
`

export const GatsbyButtonLink = styled(Link)`
	${ButtonStyles};
`
