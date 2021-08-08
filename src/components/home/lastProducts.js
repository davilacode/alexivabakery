import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const LastProducts = ({openGallery, id}) => {

    const {
        wp: {
            gallery: { 
                ACFGallery2: {
                    title2, lead2, gallery2
                }
            }
        }
    } = useStaticQuery(query);

    return (
        <div className="wrap-products container pb-5" id={id}>
            <div className="row">
                <div className="col-12 py-5">
                    <h2 className="text-center title">{title2}</h2>
                    <p className="text-center lead">{lead2}</p>
                </div>
                { gallery2?.length > 0 && gallery2.map(({title, description, photo, gallery}) => {


                    return (
                        <Fragment key={photo.id}>
                            {gallery !== null ?
                                <button className="col-md-4 last-product" data-bs-toggle="modal" data-bs-target="#GalleryModal" onClick={() => openGallery(gallery)}>
                                    <GatsbyImage image={photo.localFile.childImageSharp.gatsbyImageData} alt={title} />
                                    <h3 className="text-center pt-5 pb-4 fw-bold">{title}</h3>
                                    <p className="text-center">{description}</p>
                                </button>
                            :
                                <button className="col-md-4 last-product">
                                    <GatsbyImage image={photo.localFile.childImageSharp.gatsbyImageData} alt={title} />
                                    <h3 className="text-center pt-5 pb-4 fw-bold">{title}</h3>
                                    <p className="text-center">{description}</p>
                                </button>
                            }
                        </Fragment>
                    )
                })}
            </div>
        </div>        
    )
}

export default LastProducts

const query = graphql`
    query lastProducts {
        wp {
            gallery {
                ACFGallery2 {
                    title2
                    lead2
                    gallery2 {
                        title
                        description
                        photo {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED,
                                        placeholder: NONE
                                        width: 300
                                    )
                                }
                            }
                            id
                        }
                        gallery {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    }
`