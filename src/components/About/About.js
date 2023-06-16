import React from "react"
import { Section } from "../SectionStyled"
import Title from "../Title"
import * as S from "./AboutStyled"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyButtonLink } from "../ButtonsStyled"
const About = () => {
  return (
    <S.AboutWrapper>
      <Title tag="h3">
        About<i>Us</i>
      </Title>
      <S.Article>
        <S.ImageContainer>
          <StaticImage src="../../images/defaultBcg.jpeg" alt="Image" />
        </S.ImageContainer>
        <Title tag="h4" className="black" title="Explore the difference" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <GatsbyButtonLink blue to="#">
          Reade More
        </GatsbyButtonLink>
      </S.Article>
    </S.AboutWrapper>
  )
}

export default About
