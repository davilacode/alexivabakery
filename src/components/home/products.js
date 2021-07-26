import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Products = ({openGallery, id}) => {

    const {
        wp: {
            gallery: { 
                ACFGallery: {
                    title, lead, gallery
                }
            }
        }
    } = useStaticQuery(query);

    return (
        <div className="wrap-products container pb-5" id={id}>
            <div className="row">
                <div className="col-12 py-5">
                    <h2 className="text-center title">{title}</h2>
                    <p className="text-center lead">{lead}</p>
                </div>
                { gallery.length > 0 && gallery.map(({title, description, photo, gallery}, i) => (
                    <>
                        {gallery !== null ?
                            <button className="col-md-3 single-product" key={title+i} data-bs-toggle="modal" data-bs-target="#GalleryModal" onClick={() => openGallery(gallery)}>
                                <GatsbyImage image={photo.localFile.childImageSharp.gatsbyImageData} alt={title} />
                                <h3 className="text-center py-4 fw-bold">{title}</h3>
                                <p className="text-center">{description}</p>
                            </button>
                        :
                            <button className="col-md-3 single-product" key={title+i}>
                                <GatsbyImage image={photo.localFile.childImageSharp.gatsbyImageData} alt={title} />
                                <h3 className="text-center py-4 fw-bold">{title}</h3>
                                <p className="text-center">{description}</p>
                            </button>
                        }
                    </>
                ))}
            </div>
        </div>        
    )
}

export default Products

const query = graphql`
    query products {
        wp {
            gallery {
                ACFGallery {
                    title
                    lead
                    gallery {
                        title
                        description
                        photo {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: CONSTRAINED,
                                        width: 300
                                    )
                                }
                            }
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