/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { GlobalStyle } from "../../styles/globalStyles"
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
