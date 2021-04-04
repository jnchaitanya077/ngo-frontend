import React, { useState } from 'react';
import Button from './Button';
import { cta } from "../data/Styles"

function TeamCard({ buttonName, url, type, title, content }) {
    const [customStyle, setCustomStyle] = useState({ width: "100%" })

    const handleMouseIn = () => {
        setCustomStyle({
            ...customStyle, boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
            transition: "box-shadow 0.3s",
        })

    }
    const handleMouseOut = () => {
        setCustomStyle({ width: "100%" })

    }

    return (
        <div className=" col-xl-3 d-flex mb-3 "
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}>
            <div className="card p-4 align-self-stretch media"
                style={customStyle}>
                <h5 className="text-center">{title}</h5>
                <p className="text-center">
                    {content}
                </p>
                <div
                    className="d-flex justify-content-center align-items-end"
                    style={{ height: "100%" }}
                >
                    <Button name={buttonName} url={url} style={cta} type={type} />
                </div>
            </div>
        </div>
    );
}

export default TeamCard;