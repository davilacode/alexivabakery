import React from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {

    const {
        wp: {
            generalSettings: { title },
            siteSettings: { 
                ACFTopMenu: { socialMedia }
            }
        },
        wpMenu: {
            menuItems
        }
    } = useStaticQuery(query)

    return (
        <footer className="wrap-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 align-items-center d-flex flex-column d-md-block pb-5 pb-md-0">
                        <StaticImage
                            src="../assets/images/logo_dark.png"
                            alt={parse(title)}
                            layout="fixed"
                            placeholder={'none'}
                            width={300}
                        />
                        <p className="pt-4 fs-3"><strong>Siguenos en</strong></p>
                        {socialMedia !== undefined &&
                            <ul className="footer-social">
                                { 
                                    socialMedia[0].socialNetwork.map(( social, key) => {
                                        return (
                                            <li key={social.meta+key}> 
                                                <a href={social.url} target={`_blank`} rel={`noreferrer noopener`} title={social.meta} > 
                                                    <GatsbyImage image={social.icon.localFile.childImageSharp.gatsbyImageData} alt={social.meta} />
                                                </a>
                                            </li>
                                        )
                                    }) 
                                }
                                <li>@alexiva</li>
                            </ul>
                        }
                    </div>
                    <div className="footer-menu justify-content-center align-items-center col-md-4 d-flex flex-column">
                        {menuItems && menuItems.nodes.map((item, i) => {
                            return (
                                <Link
                                    className="pb-3 fw-bold"
                                    to={item.url}
                                    activeClassName="active"
                                    key={item.id+i}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}

                    </div>
                    <div className="col-md-4">

                    </div>
                    <div className="col-12 text-center pt-5 pb-2">
                        © {new Date().getFullYear()}, Alexiva Bakery & Cakeshop. Made with ❤️ by La Crea Factory.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

const query = graphql`query Footer {
    wp {
        generalSettings {
            title
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
    wpMenu(locations: {eq: PRIMARY}) {
        menuItems {
            nodes {
                id
                label
                url
                title
                target
            }
        }
    }
  }
  `