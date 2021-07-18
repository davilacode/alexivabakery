import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banners from "../components/home/banners"

const Home  = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle} isHomePage>
            <Seo title="Inicio" lang="es"/>
            <Banners />
        </Layout>
    )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

  }
`
