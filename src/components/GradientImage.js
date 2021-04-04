import React from 'react';

function GradientImage({ title, image }) {

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${image})`,
        height: "250px",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div className="container-fluid text-light pt-4 shadow" style={styles}>
            <div className="container">
                <div className="col-xl-8">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default GradientImage;

