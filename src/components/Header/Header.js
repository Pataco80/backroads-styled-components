import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { MenuOpen } from "@styled-icons/material/MenuOpen"
import Navbar from "../Navbar/Navbar"

import * as S from "./HeaderStyled"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(openMenu => !openMenu)
  }
  console.log(openMenu)
  return (
    <S.HeaderWrapper>
      <Link to="/">
        <img className="logo" src={logo} alt="Backroads Logo" />
      </Link>
      <Navbar />
      <S.ToggleBtn onClick={handleOpenMenu}>
        <MenuOpen size={32} />
      </S.ToggleBtn>
    </S.HeaderWrapper>
  )
}

export default Header
