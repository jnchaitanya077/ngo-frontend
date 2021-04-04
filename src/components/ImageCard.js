import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ImageCard({ title, link, image }) {
    const styles = {
        links: {
            textDecoration: 'none',
            color: "black"
        },
        card: {

        }
    }
    const [color, setColor] = useState(styles);

    const handleHover = () => {
        setColor({ links: { ...styles.links, color: "#35b736", textDecoration: "underline" }, card: { boxShadow: "0 10px 6px -6px #777", transition: "box-shadow 0.3s" } })

    }

    const handleDown = () => {
        setColor({ links: { ...styles.links, color: "#000" }, card: { ...styles.card } })
    }

    return (
        <div className="card mb-2" style={color.card}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <Link to={link} className="link" style={color.links} onMouseEnter={handleHover} onMouseLeave={handleDown}>
                    <h5 className="card-title" >{title}</h5>
                </Link>
            </div>
        </div>
    );
}

export default ImageCard;