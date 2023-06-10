import styled, { css } from "styled-components"
import { darken } from "polished"

const baseColor = {
	blue: "#3fd0d4",
	black: "#222222",
	white: "#ffffff",
	grey: "#ececec",
}

export const setColor = {
	mainBlue: `${baseColor.blue}`,
	mainBlack: `${baseColor.black}`,
	mainWhite: `${baseColor.white}`,
	darkWhite: darken(0.025, `${baseColor.white}`),
	mainGrey: `${baseColor.grey}`,
	darkGrey: darken(0.12, `${baseColor.grey}`),
}
