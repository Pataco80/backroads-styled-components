import React from "react"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// Components
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, formats: WEBP, placeholder: BLURRED)
      }
      name
    }
  }
`

// The Component
const IndexPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  return (
    <>
      <Hero home title="Welcome" imgPath={bcgImage} altBcgImage={altImg} />
      <About />
      <section className="red">
        <div className="space4xs">
          <p>Space 4xs: 4px → 4px</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            provident aut similique consequuntur dolore! Eius, omnis
            exercitationem eaque, error nihil in alias impedit esse ullam
            doloribus sapiente?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            provident aut similique consequuntur dolore! Eius, omnis
            exercitationem eaque, error nihil in alias impedit esse ullam
            doloribus sapiente?
          </p>
        </div>
        <p className="space4xs">
          Space 4xs: 4px → 4px
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="space3xs">
          Space 3xs: 5px → 6px
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="space2xs">
          Space 2xs: 9px → 11px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceXs">
          Space xs: 14px → 17px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceS">
          Space s: 18px → 22px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceM">
          Space m: 27px → 33px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceL">
          Space l: 36px → 44px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceXl">
          Space xl: 54px → 66px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="space2xl">
          Space 2xl: 72px → 88px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="space3xl">
          Space 3xl: 108px → 132px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceSupM">
          Space s-m: 18px → 33px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceSupL">
          Space s-l: 18px → 44px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceSup2xl">
          Space s-2xl: 18px → 88px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
        <p className="spaceMup2xl">
          Space m-2xl: 27px → 88px <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident
          aut similique consequuntur dolore! Eius, omnis exercitationem eaque,
          error nihil in alias impedit esse ullam doloribus sapiente?
        </p>
      </section>
    </>
  )
}

export default IndexPage
