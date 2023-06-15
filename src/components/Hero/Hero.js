import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as S from "./HeroStyled"
import { useStaticQuery, graphql } from "gatsby"
import { ButtonForm, GatsbyButtonLink } from "../ButtonsStyled"

const Hero = props => {
  const { home, imgPath, altBcgImage, objectPosition, children } = props
  const textAltImg = altBcgImage.replace(/-/g, " ")

  return (
    <S.HeroWrapper home={home}>
      <GatsbyImage
        home={home}
        image={imgPath}
        alt={textAltImg}
        objectPosition={objectPosition}
        imgClassName="bcg-image"
        className="container-image"
      />
      {home ? (
        <S.HeroBanner>
          <h1>Continue Exploring</h1>
          <p>The most beautiful trips around the world</p>
          <GatsbyButtonLink whiteOutline to="/tours">
            Explore Tours
          </GatsbyButtonLink>
        </S.HeroBanner>
      ) : null}
    </S.HeroWrapper>
  )
}

export default Hero
