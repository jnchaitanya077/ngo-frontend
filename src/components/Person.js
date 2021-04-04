import React from 'react';
import "../css/ProfileCard.css"

function Person({ content, name, position, image }) {
    console.log(content)
    return (
        <div className="col-md-3 mt-4">
            <div className="card profile-card-5 d-flex">
                <div className="card-img-block align-self-stretch">
                    <img
                        className="card-img-top"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="card-body pt-0">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-subtitle mb-2 text-muted">{position}</p>
                    <p className="fs-6">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Person;