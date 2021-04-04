import React from 'react';
import "../css/GalleryImage.css"




function Image({ text, image }) {
    // const uri = image;

    return (
        <div className="container-relative-img shadow-lg">
            <img src={image} alt="Avatar" className="gallery-image rounded" />
            <div className="gallery-image-overlay">
                <div className="gallery-text">{text}</div>
            </div>
        </div>
    );
}


export default Image;