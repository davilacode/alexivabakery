import React, { useState, useEffect } from 'react'
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
      },
      file
    } = useStaticQuery(query)

    const [header, setHeader] = useState('normal')
    const [logoRes, setLogoRes] = useState(logo.desktopLogo.childImageSharp.gatsbyImageData)
    const [darkLogoRes, setDarkLogoRes] = useState(file.desktopLogo.gatsbyImageData)

    if(typeof window !== 'undefined'){
      
      window.addEventListener('scroll', function() { 
        if(window.scrollY >= 350){
          setHeader('active')
        }else{
          setHeader('normal')
        }
      })
      window.addEventListener('resize', function() { 
        if(window.innerWidth <= 768 ){
          setLogoRes(file.mobileLogo.gatsbyImageData)
          setDarkLogoRes(file.mobileLogo.gatsbyImageData)
        }else{
          setLogoRes(logo.desktopLogo.childImageSharp.gatsbyImageData)
          setDarkLogoRes(file.desktopLogo.gatsbyImageData)
        }
      })
    }

    useEffect(()=>{
      window.dispatchEvent(new Event('resize'));
    }, [])

    return (
      <header className={header}> 
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {header === 'normal' ? 
                <GatsbyImage image={logoRes} alt={parse(title)} />
                :
                <GatsbyImage image={darkLogoRes} alt={parse(title)} />
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
  file(relativePath: {eq: "logo_dark.png"}) {
    desktopLogo: childImageSharp {
      gatsbyImageData(width: 200, placeholder: NONE, layout: FIXED)
    }
    mobileLogo: childImageSharp {
      gatsbyImageData(width: 140, placeholder: NONE, layout: FIXED)
    }
  }
}
`