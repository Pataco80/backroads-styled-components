import React from "react"
import mainMenuLinks from "../constants/mainMenu/mainMenuLinks"
import * as S from "./MainMenuStyled"
const MainMenu = () => {
  return (
    <S.MenuWrapper>
      <S.LinksItems>
        {mainMenuLinks.map((link, i) => {
          const { name, path } = link
          return (
            <S.LinkItem key={i}>
              <S.LinkItemLink to={path}>{name}</S.LinkItemLink>
            </S.LinkItem>
          )
        })}
      </S.LinksItems>
    </S.MenuWrapper>
  )
}

export default MainMenu
