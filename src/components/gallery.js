import React from "react"
import ImageGallery from 'react-image-gallery'

const Gallery = ({gallery}) => {

    let images = [];
    
    gallery && gallery.map((image)=>(
        images.push({original: image.localFile.publicURL, thumbnail: image.localFile.publicURL, originalHeight: 500})
    ))

    return (
        <div className="modal fade" id="GalleryModal" tabIndex="-1" aria-labelledby="GalleryModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content ">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <ImageGallery items={images} />
                </div>
            </div>
        </div>
    )
}

export default Gallery