import { css } from "styled-components"
import { setColor } from "./colors"
import { setLetterSpacing, spaceScale } from "./utilsStyled"

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
/* @link https://utopia.fyi/type/calculator?c=320,18,1.2,1240,22,1.25,5,2,&s=0.75|0.5|0.25|0.2,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

const typeScale = {
  /* Step -2: 12.50px → 14.08px */
  step2xs: `clamp(0.78rem, calc(0.75rem + 0.17vw), 0.88rem)`,
  line2xs: `clamp(0.938rem, calc(0.881rem + 0.283vw), 1.1rem)`,

  /* Step -1: 15.00px → 17.60px */
  stepXs: `clamp(0.94rem, calc(0.88rem + 0.28vw), 1.1rem)`,
  lineXs: `clamp(1.125rem, calc(1.038rem + 0.435vw), 1.375rem)`,

  /* Step 0: 18.00px → 22.00px */
  stepS: `clamp(1.13rem, calc(1.04rem + 0.43vw), 1.38rem)`,
  lineS: `clamp(1.35rem, calc(1.222rem + 0.641vw), 1.719rem)`,

  /* Step 1: 21.60px → 27.50px */
  stepM: `clamp(1.35rem, calc(1.22rem + 0.64vw), 1.72rem)`,
  lineM: `clamp(1.62rem, calc(1.436rem + 0.919vw), 2.148rem)`,

  /* Step 2: 25.92px → 34.38px */
  stepL: `clamp(1.62rem, calc(1.44rem + 0.92vw), 2.15rem)`,
  lineL: `clamp(1.944rem, calc(1.686rem + 1.29vw), 2.686rem)`,

  /* Step 3: 31.10px → 42.97px */
  stepXl: `clamp(1.94rem, calc(1.69rem + 1.29vw), 2.69rem)`,
  lineXl: `clamp(2.333rem, calc(2.082rem + 1.251vw), 3.052rem)`,

  /* Step 4: 37.32px → 53.71px */
  step2Xl: `clamp(2.33rem, calc(1.98rem + 1.78vw), 3.36rem)`,
  line2Xl: `clamp(2.799rem, calc(2.446rem + 1.767vw), 3.815rem)`,

  /* Step 5: 44.79px → 67.14px */
  step3Xl: `clamp(2.8rem, calc(2.31rem + 2.43vw), 4.2rem)`,
  line3Xl: `clamp(3.359rem, calc(2.703rem + 3.28vw), 5.245rem)`,
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
    font-family: ${fontFamilly.titleFont || fontFamilly.defaultFonts};
    ${setLetterSpacing()};
  }

  h1,
  .h1,
  h2,
  .h2 {
    margin-bottom: ${spaceScale.space2xl};
  }

  h3,
  .h3,
  h4,
  .h4 {
    margin-bottom: ${spaceScale.spaceL};
  }

  h5,
  .h5,
  h6,
  .h6 {
    margin-bottom: ${spaceScale.spaceS};
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
    margin-bottom: ${spaceScale.spaceS};
  }

  small {
    font-size: ${typeScale.stepXs};
    line-height: ${typeScale.lineXs};
    margin-bottom: ${spaceScale.spaceS};
  }
`
export { globalTypography }
