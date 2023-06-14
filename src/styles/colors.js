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
  darkBlue: darken(0.1, `${baseColor.blue}`),
  darkerBlue: darken(0.15, `${baseColor.blue}`),
  mainBlack: `${baseColor.black}`,
  mainWhite: `${baseColor.white}`,
  darkWhite: darken(0.025, `${baseColor.white}`),
  mainGrey: `${baseColor.grey}`,
  darkGrey: darken(0.15, `${baseColor.grey}`),
}
