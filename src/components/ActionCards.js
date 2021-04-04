import React from 'react';
import Image from "../images/children.jpg"
import Button from "./Button"
import { cta } from "../data/Styles"
import { Link } from 'react-router-dom';


function ActionCards({ title, link, btnName, headingLink }) {
    const shadow = {
        boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${Image})`, widows: "100%", height: "250px"
    }
    return (
        <div style={shadow} className="text-center rounded ps-1">
            {headingLink ? <Link to={link}>
                <h4 className="text-light mt-3 pt-5 ">{title}</h4>
            </Link> : <h4 className="text-light mt-3 pt-5">{title}</h4>}

            {btnName ?
                <div className="mt-4">
                    <Button style={cta} name={btnName} url={link} type="btn-sm" />
                </div> : ""}


        </div>
    );
}

export default ActionCards;