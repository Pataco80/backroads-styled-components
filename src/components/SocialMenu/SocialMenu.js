import React from "react"
import socialLinks from "../constants/socialMenu/socialLinks"
import Icons from "../constants/socialMenu/socialIcons"
import * as S from "./SocialMenuStyled"
const SocialMenu = () => {
  return (
    <S.MenuWrapper>
      {socialLinks.map((link, i) => {
        const Icon = Icons[link.name]
        return (
          <S.MenuItem key={i}>
            <a href="">
              <Icon size={32} title={link.name} />
            </a>
          </S.MenuItem>
        )
      })}
    </S.MenuWrapper>
  )
}

export default SocialMenu
