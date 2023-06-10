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
	/* @link https://utopia.fyi/space/calculator?c=320,18,1.2,1240,24,1.25,5,2,&s=0.75|0.5|0.25|0.2,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

	/* Space 4xs: 4px → 5px */
	space4xs: `clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem)`,

	/* Space 3xs: 5px → 6px */
	space3xs: `clamp(0.31rem, calc(0.29rem + 0.11vw), 0.38rem)`,

	/* Space 2xs: 9px → 12px */
	space2xs: `clamp(0.56rem, calc(0.50rem + 0.33vw), 0.75rem)`,

	/* Space xs: 14px → 18px */
	spaceXs: `clamp(0.88rem, calc(0.79rem + 0.43vw), 1.13rem)`,

	/* Space s: 18px → 24px */
	spaceS: `clamp(1.13rem, calc(0.99rem + 0.65vw), 1.50rem)`,

	/* Space m: 27px → 36px */
	spaceM: `clamp(1.69rem, calc(1.49rem + 0.98vw), 2.25rem`,

	/* Space l: 36px → 48px */
	spaceL: `clamp(2.25rem, calc(1.99rem + 1.30vw), 3.00rem)`,

	/* Space xl: 54px → 72px */
	spaceXl: `clamp(3.38rem, calc(2.98rem + 1.96vw), 4.50rem)`,

	/* Space 2xl: 72px → 96px */
	space2xl: `clamp(4.50rem, calc(3.98rem + 2.61vw), 6.00rem)`,

	/* Space 3xl: 108px → 144px */
	space3xl: `clamp(6.75rem, calc(5.97rem + 3.91vw), 9.00rem)`,

	/* One-up pairs */
	/* Space 4xs-3xs: 4px → 6px */
	space4xsUp3xs: `clamp(0.25rem, calc(0.21rem + 0.22vw), 0.38rem)`,

	/* Space 3xs-2xs: 5px → 12px */
	space3xsUp2xs: `clamp(0.31rem, calc(0.16rem + 0.76vw), 0.75rem)`,

	/* Space 2xs-xs: 9px → 18px */
	space2xsUpXs: `clamp(0.56rem, calc(0.37rem + 0.98vw), 1.13rem)`,

	/* Space xs-s: 14px → 24px */
	spaceXsUpS: `clamp(0.88rem, calc(0.66rem + 1.09vw), 1.50rem)`,

	/* Space s-m: 18px → 36px */
	spaceSupM: `clamp(1.13rem, calc(0.73rem + 1.96vw), 2.25rem)`,

	/* Space m-l: 27px → 48px */
	spaceMupL: `clamp(1.69rem, calc(1.23rem + 2.28vw), 3.00rem)`,

	/* Space l-xl: 36px → 72px */
	spaceLupXl: `clamp(2.25rem, calc(1.47rem + 3.91vw), 4.50rem)`,

	/* Space xl-2xl: 54px → 96px */
	spaceXlUp2xl: `clamp(3.38rem, calc(2.46rem + 4.57vw), 6.00rem)`,

	/* Space 2xl-3xl: 72px → 144px */
	space2xlUp3xl: `clamp(4.50rem, calc(2.93rem + 7.83vw), 9.00rem)`,

	/* Custom pairs */
	/* Space s-l: 18px → 48px */
	spaceSupL: `clamp(1.13rem, calc(0.47rem + 3.26vw), 3.00rem)`,
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
