import { css } from "styled-components"
import { generateMedia } from "styled-media-query"
import { rgba } from "polished"
import { setColor } from "./colors"

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

export const spaceScale = {
  /* @link https://utopia.fyi/space/calculator?c=320,18,1.2,1240,22,1.25,5,2,&s=0.75|0.5|0.25|0.2,1.5|2|3|4|6,4xs-s|s-l|s-2xl|m-2xl&g=s,l,xl,12 */

  /* Space 4xs: 4px → 4px */
  space4xs: `clamp(0.25rem, calc(0.25rem + 0.00vw), 0.25rem)`,

  /* Space 3xs: 5px → 6px */
  space3xs: `clamp(0.31rem, calc(0.29rem + 0.11vw), 0.38rem)`,

  /* Space 2xs: 9px → 11px */
  space2xs: `clamp(0.56rem, calc(0.52rem + 0.22vw), 0.69rem)`,

  /* Space xs: 14px → 17px */
  spaceXs: `clamp(0.88rem, calc(0.81rem + 0.33vw), 1.06rem)`,

  /* Space s: 18px → 22px */
  spaceS: `clamp(1.13rem, calc(1.04rem + 0.43vw), 1.38rem)`,

  /* Space m: 27px → 33px */
  spaceM: `clamp(1.69rem, calc(1.56rem + 0.65vw), 2.06rem)`,

  /* Space l: 36px → 44px */
  spaceL: `clamp(2.25rem, calc(2.08rem + 0.87vw), 2.75rem)`,

  /* Space xl: 54px → 66px */
  spaceXl: `clamp(3.38rem, calc(3.11rem + 1.30vw), 4.13rem)`,

  /* Space 2xl: 72px → 88px */
  space2xl: `clamp(4.50rem, calc(4.15rem + 1.74vw), 5.50rem)`,

  /* Space 3xl: 108px → 132px */
  space3xl: `clamp(6.75rem, calc(6.23rem + 2.61vw), 8.25rem)`,

  /* One-up pairs */
  /* Space 4xs-3xs: 4px → 6px */
  space4xsUp3xs: `clamp(0.25rem, calc(0.21rem + 0.22vw), 0.38rem)`,

  /* Space 3xs-2xs: 5px → 11px */
  space3xsUp2xs: `clamp(0.31rem, calc(0.18rem + 0.65vw), 0.69rem)`,

  /* Space 2xs-xs: 9px → 17px */
  space2xsUpXs: `clamp(0.56rem, calc(0.39rem + 0.87vw), 1.06rem)`,

  /* Space xs-s: 14px → 22px */
  spaceXsUpS: `clamp(0.88rem, calc(0.70rem + 0.87vw), 1.38rem)`,

  /* Space s-m: 18px → 33px */
  spaceSupM: `clamp(1.13rem, calc(0.80rem + 1.63vw), 2.06rem)`,

  /* Space m-l: 27px → 44px */
  spaceMupL: `clamp(1.69rem, calc(1.32rem + 1.85vw), 2.75rem)`,

  /* Space l-xl: 36px → 66px */
  spaceLupXl: `clamp(2.25rem, calc(1.60rem + 3.26vw), 4.13rem)`,

  /* Space xl-2xl: 54px → 88px */
  spaceXlUp2xl: `clamp(3.38rem, calc(2.64rem + 3.70vw), 5.50rem)`,

  /* Space 2xl-3xl: 72px → 132px */
  space2xlUp3xl: `clamp(4.50rem, calc(3.20rem + 6.52vw), 8.25rem)`,

  /* Custom pairs */
  /* Space 4xs-s: 4px → 22px */
  space4xsUpS: `clamp(0.25rem, calc(-0.14rem + 1.96vw), 1.38rem)`,
  /* Space s-l: 18px → 44px */
  spaceSupL: `clamp(1.13rem, calc(0.56rem + 2.83vw), 2.75rem)`,

  /* Space s-2xl: 18px → 88px */
  spaceSup2xl: `clamp(1.13rem, calc(-0.40rem + 7.61vw), 5.50rem)`,

  /* Space m-2xl: 27px → 88px */
  spaceMup2xl: `clamp(1.69rem, calc(0.36rem + 6.63vw), 5.50rem)`,
}

// Images and Background's Functions
export const setLinearBcg = ({
  colStart = `${rgba(`${setColor.mainBlack}`, 0)}`,
  colEnd = `${rgba(`${setColor.mainBlack}`, 0)}`,
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
  {
    inset = "",
    x = 0,
    y = 0,
    blur = 0,
    color = setColor.mainBlack,
    opacity = 100,
  } = {}
) => {
  if (style === "light") {
    return `${inset} 0 2px 8px ${rgba(setColor.mainBlack, 30)};`
  }
  if (style === "medium") {
    return `${inset} 0 3px 12px ${rgba(setColor.mainBlack, 50)};`
  }
  if (style === "dark") {
    return `${inset} 0 5px 15px ${rgba(setColor.mainBlack, 80)};`
  }
  if (style === "none") {
    return `none;`
  } else {
    return `${y}px ${x}px ${blur}px ${rgba(color, opacity)};
    `
  }
}
