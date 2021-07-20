import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Banners = ({banners, socialMedia, location, dots, arrow}) => {

    return (
        <div className="wrap-banner">
            <div id={location} className="carousel slide" data-bs-ride="carousel">
                {dots && 
                    <div className="carousel-indicators">
                        { banners && banners.map((banner, i) => (
                        <button type="button" data-bs-target={`#${location}`} key={`${i}`} data-bs-slide-to={i} className={`${i === 0 ? 'active' : ''}`} aria-label={banner.title}  ></button>
                        ))}
                    </div>
                }
                <div className="carousel-inner">
                    { banners && banners.map((banner, key) => (
                        <div className={`carousel-item ${key === 0 ? 'active' : ''}`} key={banner.title+key}>
                            <GatsbyImage image={banner.image.localFile.childImageSharp.gatsbyImageData} className={`d-block w-100 res-${banner.textAlign}`} alt={banner.title} />
                            {banner.title &&
                                <div className="text-over-banner">
                                    <h2 className={`text-${banner.textAlign} title`}>{banner.title}</h2>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                {arrow && 
                    <>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#${location}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#${location}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </>
                }
            </div>
            {socialMedia !== undefined &&
                <ul className="d-flex wrap-social-media">
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
                </ul>
            }
        </div>        
    )
}

export default Banners