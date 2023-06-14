import styled from "styled-components"
import { setColor } from "../../styles/colors"
import { spaceScale, media } from "../../styles/utilsStyled"

export const HeaderWrapper = styled.header`
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  padding: ${spaceScale.space4xsUpS};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-column-gap: ${spaceScale.spaceS};
  align-items: center;
  justify-content: space-between;
  align-content: center;

  ${media.greaterThan("lgTablet")`
  grid-template-columns: auto 1fr;

`}

  .logo {
    width: 100%;
    height: auto;
  }
`

export const ToggleBtn = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: ${setColor.mainBlue};

  ${media.greaterThan("lgTablet")`
  display: none;

`}
`
