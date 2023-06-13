import React from "react"
import logo from "../../images/logo.svg"
import { MenuOpen } from "@styled-icons/material/MenuOpen"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Backroads Logo" />
      <Navbar />
      <button>
        <MenuOpen />
      </button>
    </header>
  )
}

export default Header
