import styled from "styled-components"
import { media, spaceScale } from "../../styles/utilsStyled"
import { typeScale } from "../../styles/typography"

export const MenuWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${spaceScale.spaceXs};
  grid-auto-flow: column;
  justify-self: end;
`
export const MenuItem = styled.li`
  display: inherit;
`
