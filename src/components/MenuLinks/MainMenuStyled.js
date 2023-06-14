import styled from "styled-components"
import { Link } from "gatsby"
import { media, setTransition, spaceScale } from "../../styles/utilsStyled"
import { setColor } from "../../styles/colors"

export const MenuWrapper = styled.nav`
  display: grid;
`

export const LinksItems = styled.ul`
  display: grid;
  grid-column-gap: ${spaceScale.spaceS};
  justify-content: center;

  ${media.greaterThan("tablet")`
     grid-auto-flow: column;
  `}
`

export const LinkItem = styled.li`
  display: grid;
  justify-content: center;

  grid-auto-flow: column;
  ${media.greaterThan("lgTablet")`
  `}
`

export const LinkItemLink = styled(Link)`
  display: grid;
  justify-content: center;
  color: ${setColor.mainBlack};
  text-decoration: none;
  ${setTransition()};

  &:visited {
    color: ${setColor.mainBlack};

    &:hover {
      color: ${setColor.darkBlue};
    }
  }

  ${media.greaterThan("lgTablet")`
  `}
`
