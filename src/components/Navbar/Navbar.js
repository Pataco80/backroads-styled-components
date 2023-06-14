import React from "react"

import MainMenu from "../MenuLinks/MainMenu"
import SocialLinks from "../SocialMenu/SocialMenu"
import * as S from "./NavbarStyled"
const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <MainMenu />
      <SocialLinks />
    </S.NavbarWrapper>
  )
}

export default Navbar
