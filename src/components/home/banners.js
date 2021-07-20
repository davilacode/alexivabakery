import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Banners = () => {

    const {
        wp: {
            banners: { 
                ACFBanners: { bannersHome }
            },
            siteSettings: { 
                ACFTopMenu: { socialMedia}
            },
        }
    } = useStaticQuery(query)

    return (
        <div className="wrap-banner">
            <div id="homeBanner" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    { bannersHome && bannersHome.map((banner, i) => (
                    <button type="button" data-bs-target="#homeBanner" data-bs-slide-to={i} className={`${i === 0 ? 'active' : ''}`}  {...`${i === 0 ? 'aria-current=true' : ''}`}   aria-label={banner.title}></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    { bannersHome && bannersHome.map((banner, i) => (
                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                            <GatsbyImage image={banner.image.localFile.childImageSharp.gatsbyImageData} className={`d-block w-100 res-${banner.textAlign}`} alt={banner.title} />
                            {banner.title &&
                                <div className="text-over-banner">
                                    <h2 className={`text-${banner.textAlign} title`}>{banner.title}</h2>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeBanner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeBanner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {socialMedia !== null &&
                <ul className="d-flex wrap-social-media">
                    { 
                        socialMedia[0].socialNetwork.map(( social, key) => {
                            return (
                                <li key={key}> 
                                    <a href={social.url} target={`_blank`} rel={`noreferrer noopener`} title={social.meta} > 
                                        <GatsbyImage image={social.icon.localFile.childImageSharp.gatsbyImageData} alt={social.meta} />
                                    </a>
                                </li>
                            )
                        }) 
                    }
                </ul>
            }
        </div>        
    )
}

export default Banners

const query = graphql`
    query bannersHome {
        wp {
            banners {
                ACFBanners {
                    bannersHome {
                        fieldGroupName
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
                                            width: 30,
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