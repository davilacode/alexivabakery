// import { Modal } from "bootstrap"
// import React, { useState, useEffect, useRef } from "react"

const Gallery = ({gallery, active, setActive}) => {
    // const [modal, setModal] = useState(null)
    // const galleryModal = useRef()

    // useEffect(() => {
    //     setModal(
    //         new Modal(galleryModal.current)
    //     )
    // }, [])


    // useEffect(() =>{
    //     if(active && modal !== null){
    //         modal.show();
    //         setActive(false);
    //     }
    // }, [modal])
    // return (
    //     <div className={`modal fade`} ref={galleryModal} tabIndex="-1" aria-labelledby="galleryModal" aria-hidden="true">
    //         <div className="modal-dialog modal-xl modal-dialog-centered">
    //             <div className="modal-content ">
    //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>modal.hide()}></button>
    //                 {/* <div className="fotorama" data-nav="thumbs" data-auto="false">
    //                     { gallery && gallery.map((image, i) => (
    //                         <img src={image.localFile.publicURL} key={i} alt="empty"/>
    //                     ))}
    //                 </div> */}
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Gallery