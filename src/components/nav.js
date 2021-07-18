import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"

const Nav = () => {

    const {
      wp: {
        generalSettings: { title },
        siteSettings: { 
          ACFGeneral: {
            logo
          }
        }
      }
    } = useStaticQuery(query)

    return (
      <header> 
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand"><GatsbyImage image={logo.desktopLogo.childImageSharp.gatsbyImageData} alt={parse(title)} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryMenu" aria-controls="primaryMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Menu/>
          </div>
        </nav>
      </header>
    )
}


export default Nav

const query = graphql`query LogoAndGeneralQuery {
  wp {
    generalSettings {
      title
      description
    }
    siteSettings {
      ACFGeneral {
        logo {
          desktopLogo: localFile {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: NONE, layout: FIXED)
            }
          }
          mobileLogo: localFile {
            childImageSharp {
              gatsbyImageData(width: 140, placeholder: NONE, layout: FIXED)
            }
          }
        }
      }
    }
  }
}
`