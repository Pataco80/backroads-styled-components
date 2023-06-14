import styled from "styled-components"
import { media } from "../../styles/utilsStyled"

export const NavbarWrapper = styled.div`
  display: grid;
  align-items: center;
  display: none;

  ${media.greaterThan("lgTablet")`
    display: grid;
    grid-template-columns: 1fr auto;
  `}
`
