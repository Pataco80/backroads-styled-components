import React from "react"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// Components
import Hero from "../components/Hero/Hero"
// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, formats: WEBP, placeholder: BLURRED)
      }
      name
    }
  }
`

// The Component
const LatestBlogsPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  return (
    <>
      <Hero imgPath={bcgImage} altBcgImage={altImg} />
      Latest Blogs
    </>
  )
}

export default LatestBlogsPage
