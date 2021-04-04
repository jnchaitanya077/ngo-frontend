import React from 'react';
import "../css/GalleryImage.css"



function AwardsCard({ image, name, event, amount, id, onSelect }) {
    return (
        <div className="row">
            <div className="card shadow p-2">
                <div className="container-relative-img shadow-lg">
                    <img src={image} alt="Avatar" className="gallery-image rounded" />
                    <div className="gallery-image-overlay">
                        <div className="gallery-text">
                            <h6>Name: <em className="fw-light">{name}</em></h6>
                            <h6>Event: <em className="fw-light">{event}</em></h6>
                            <h6>Amount: <em className="fw-light">{amount}</em></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AwardsCard;