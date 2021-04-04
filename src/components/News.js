/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

function News({ info, title }) {
    const shadow = {
        boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
        backgroundColor: "#E3FBE6"
    }
    return (
        <div className="mt-md-3 border rounded-3 shadow p-3" style={shadow}>
            <h4>{title}</h4>
            <marquee width="100%" direction="up" height="360px" scrollamount="4">
                This is a sample scrolling text that has scrolls in the upper direction.
                <br />
                <br />
                <br />
                This is a sample scrolling text that has scrolls in the upper direction.
                This is a sample scrolling text that has scrolls in the upper direction.
                <br />
                This is a sample scrolling text that has scrolls in the upper direction.

            </marquee>
        </div>
    );
}

export default News;