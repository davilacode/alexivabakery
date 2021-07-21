import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import parse from "html-react-parser"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Nav = () => {

    const [header, setHeader] = useState('normal')

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

    if(typeof window !== 'undefined'){
      window.addEventListener('scroll', function() { 
        if(window.scrollY >= 350){
          setHeader('active')
        }else{
          setHeader('normal')
        }
      })
    }

    return (
      <header className={header}> 
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {header === 'normal' ? 
                <GatsbyImage image={logo.desktopLogo.childImageSharp.gatsbyImageData} alt={parse(title)} />
                :
                <StaticImage
                  src="../assets/images/logo_dark.png"
                  alt={parse(title)}
                  layout="fixed"
                  placeholder={'none'}
                  width={200}
                />
              }
            </Link>
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