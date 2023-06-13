import React from "react"
import socialLinks from "../constants/socialMenu/socialLinks"
import Icons from "../constants/socialMenu/socialIcons"

const SocialMenu = () => {
  return (
    <ul>
      {socialLinks.map((link, i) => {
        const Icon = Icons[link.name]
        return (
          <li key={i}>
            <a href="">
              <Icon size="32" />
              {link.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialMenu
