import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banners from "../components/home/banners"
import Products from "../components/home/products"

const Home  = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title
    const bannersHome = data.wp.banners.ACFBanners.bannersHome
    const bannersMiddle = data.wp.banners.ACFBanners.bannerMiddle
    const socialMedia = data.wp.siteSettings.ACFTopMenu.socialMedia

    return (
        <Layout location={location} title={siteTitle} isHomePage>
            <Seo title="Inicio" lang="es"/>
            <Banners banners={bannersHome} socialMedia={socialMedia} location={"home"} dots arrow />
            <Products />
            <Banners banners={bannersMiddle} location={"middle"} />
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
    wp {
      banners {
        ACFBanners {
          bannersHome {
            html
            link
            title
            textAlign
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH,
                    quality: 100
                  )
                }
              }
            }
          }
          bannerMiddle {
            textAlign
            title
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH,
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
      siteSettings {
        ACFTopMenu {
          socialMedia {
            socialNetwork {
              meta
              url
              icon {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FIXED,
                      width: 29,
                      placeholder: NONE
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
