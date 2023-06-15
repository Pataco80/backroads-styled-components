import styled, { css } from "styled-components"

// Import helpers
import { layout, spaceScale } from "../styles/utilsStyled"
import { setColor } from "../styles/colors"

// Styled CSS
const SectionCss = css`
  background-color: ${props =>
    props.background ? props.background : `${setColor.mainWhite}`};
`

// Export Styles for the component
export const Section = styled.section`
  ${SectionCss}
  width: 100vw;
`
export const SectionContent = styled.div`
  padding: ${props => (props.padding ? props.padding : `0`)};
  width: 100%;
`

export const SectionCenter = styled.section`
  ${SectionCss}
  ${layout()};
  width: 100%;
`

export const SectionContentCenter = styled.div`
  ${layout()};
  padding: ${props => (props.padding ? props.padding : `0`)};
  width: 100%;
`
