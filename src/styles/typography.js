import { css } from "styled-components"
import { setColor } from "./colors"
import { setLetterSpacing } from "./utilsStyled"

export const fontFamilly = {
  titleFont: "Poppins-Regular",
  bodyFont: "Lato-Regular",
  defaultFonts: `"system",
  "-apple-system",
  ".SFNSText-Regular",
  "San Francisco",
  "Roboto",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif"`,
}
/* @link https://utopia.fyi/type/calculator?c=375,18,1.2,1240,22,1.25,5,2,&s=0.75|0.5|0.25|0.2,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

export const typeScale = {
  /* Step -2: 12.50px → 14.08px */
  step2xs: `clamp(0.78rem, calc(0.75rem + 0.17vw), 0.88rem)`,
  line2xs: `clamp(0.938rem, 0.283vw + 0.881rem, 1.1rem)`,

  /* Step -1: 15.00px → 17.60px */
  stepXs: `clamp(0.94rem, calc(0.88rem + 0.28vw), 1.10rem)`,
  lineXs: `clamp(1.125rem, 0.435vw + 1.038rem, 1.375rem)`,

  /* Step 0: 18.00px → 22.00px */
  stepS: `clamp(1.13rem, calc(1.02rem + 0.46vw), 1.38rem)`,
  lineS: `clamp(1.35rem, 0.641vw + 1.222rem, 1.719rem)`,

  /* Step 1: 21.60px → 27.50px */
  stepM: `clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);`,
  lineM: `clamp(1.62rem, 0.579vw + 1.504rem, 1.953rem)`,

  /* Step 2: 25.92px → 34.38px */
  stepL: `clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);`,
  lineL: `clamp(1.944rem, 0.865vw + 1.771rem, 2.441rem)`,

  /* Step 3: 31.10px → 42.97px */
  stepXl: `clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);`,
  lineXl: `clamp(2.333rem, 1.251vw + 2.082rem, 3.052rem)`,

  /* Step 4: 37.32px → 53.71px */
  step2Xl: `clamp(2.33rem, calc(2.08rem + 1.26vw), 3.05rem);`,
  line2Xl: `clamp(2.799rem, 1.767vw + 2.446rem, 3.815rem)`,

  /* Step 5: 44.79px → 67.14px */
  step3Xl: `clamp(2.80rem, calc(2.31rem + 2.43vw), 4.20rem)`,
  line3Xl: `clamp(3.359rem, 3.28vw + 2.703rem, 5.245rem)`,
}

const globalTypography = css`
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    color: ${setColor.mainBlue};
    font-family: ${fontFamilly.titleFont};
    ${setLetterSpacing()};
  }

  h1,
  .h1 {
    font-size: ${typeScale.step3Xl};
    line-height: ${typeScale.line3Xl};
  }
  h2,
  .h2 {
    font-size: ${typeScale.step2Xl};
    line-height: ${typeScale.line2Xl};
  }
  h3,
  .h3 {
    font-size: ${typeScale.stepXl};
    line-height: ${typeScale.lineXl};
  }
  h4,
  .h4 {
    font-size: ${typeScale.stepL};
    line-height: ${typeScale.lineL};
  }
  h5,
  .h5 {
    font-size: ${typeScale.stepM};
    line-height: ${typeScale.lineM};
  }
  h6,
  .h6 {
    font-size: ${typeScale.stepS};
    line-height: ${typeScale.lineS};
  }

  p {
    font-size: ${typeScale.stepS};
    line-height: ${typeScale.lineS};
  }

  small {
    font-size: ${typeScale.stepXs};
    line-height: ${typeScale.lineXs};
  }
`
export { globalTypography }
