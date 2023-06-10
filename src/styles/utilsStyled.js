import { css } from "styled-components"
import { generateMedia } from "styled-media-query"
import { rgba } from "polished"

// Unitie's Calc Functions
export const setPxToRem = (px = 16) => {
  return `${px / 16}rem`
}

// Media queries
export const breakpoints = {
  mobile: 320,
  smTablet: 576,
  tablet: 768,
  lgTablet: 992,
  desktop: 1200,
}

export const media = generateMedia({
  mobile: "15rem",
  smTablet: "36rem",
  tablet: "48rem",
  lgTablet: "62rem",
  desktop: "77.5rem",
})

// Layout's Functions
export const layout = ({ mW = 1240, wTh = "100%" } = {}) => {
  return `
  width: ${wTh};
    max-width:${setPxToRem(mW)};
    margin: 0 auto;
  `
}

export const setFlex = ({
  flex = "auto",
  x = "center",
  y = "center",
  flDir = "row",
  wrap = "wrap",
} = {}) => {
  return `display: flex;
  flex:${flex};
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${flDir};
  flex-wrap: ${wrap}
  `
}

export const setGrid = ({
  x = "space-evenly",
  y = "space-evenly",
  xgap = 0,
  ygap = 0,
} = {}) => {
  return `display: grid;
  justify-content: ${x};
  align-content: ${y};
  grid-row-gap: ${xgap}rem;
  grid-column-gap: ${ygap}rem;
  `
}

// Images and Background's Functions
export const setLinearBcg = ({
  colStart = `${rgba(`#000`, 0)}`,
  colEnd = `${rgba(`#000`, 0)}`,
} = {}) => {
  return `background: linear-gradient(${colStart}, ${colEnd});
    opacity: 1 !important;
`
}

export const setImgBcg = ({
  size = "cover",
  position = "center",
  repeat = "no-repeat",
} = {}) => {
  return `background-size: ${size} !important;
  background-position: ${position} !important;background-repeat: ${repeat} !important;
`
}

// Effect's Functions or props Object's
export const setLetterSpacing = (number = 4) => {
  return `letter-spacing: ${setPxToRem(number)}`
}

export const setBorder = ({
  size = 2,
  style = "solid",
  color = "transparent",
} = {}) => {
  return `${setPxToRem(size)} ${style} ${color}`
}

export const setRadius = ({
  allPx = null,
  allPc = null,
  radius = 4,
  tl = radius,
  tr = radius,
  bl = radius,
  br = radius,
} = {}) => {
  if (allPx) {
    return `
    border-radius: ${setPxToRem(allPx)};
    `
  } else if (allPc) {
    return `
    border-radius: ${allPc}%;
    `
  } else {
    return `
    border-top-left-radius: ${setPxToRem(tl)};
    border-top-right-radius: ${setPxToRem(tr)};
    border-bottom-left-radius: ${setPxToRem(bl)};
    border-bottom-right-radius: ${setPxToRem(br)};
  `
  }
}

export const setTransition = ({
  property = "all",
  duration = 0.3,
  timing = "linear",
  delayTime = 0,
} = {}) => {
  return `
    transition-property: ${property};
    transition-duration: ${duration}s;
    transition-timing-function:${timing};
    transition-delay: ${delayTime}s;
  `
}

export const setShadow = (
  style = "",
  { inset = "", x = 0, y = 0, blur = 0, color = "#000", opacity = 100 } = {}
) => {
  if (style === "light") {
    return `${inset} 0 2px 8px ${rgba(`#000`, 30)};`
  }
  if (style === "medium") {
    return `${inset} 0 3px 12px ${rgba(`#000`, 50)};`
  }
  if (style === "dark") {
    return `${inset} 0 5px 15px ${rgba(`#000`, 80)};`
  }
  if (style === "none") {
    return `none;`
  } else {
    return `${y}px ${x}px ${blur}px ${rgba(color, opacity)};
    `
  }
}
