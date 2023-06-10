import * as React from "react"

import Layout from "../components/Layout/Layout"

const IndexPage = () => (
  <Layout>
    <div className="spaceXl" style={{ textAlign: "center" }}>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p>
        <b>Example pages:</b> <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <div className="spaceXl">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
        dolores ea voluptatum. Expedita officia sit molestias mollitia
        voluptates harum minima, optio cupiditate quisquam voluptatibus dolores
        perspiciatis aliquam, autem ullam.
      </p>
    </div>
  </Layout>
)

export default IndexPage
