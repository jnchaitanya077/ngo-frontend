import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import AwardsCard from './AwardsCard';
import FullHeading from './FullHeading';
import Waypoint from './Waypoint';
import 'react-image-lightbox/style.css';
import ActionCards from './ActionCards';


function AwardsDisplay({ element, title, awardDetails, info }) {
    console.log(title,info,awardDetails)
    const BASE_URL = 'https://ngo-server-1.herokuapp.com'
    const [photo, setPhoto] = useState({
        photoIndex: 0,
        isOpen: false
    })

    const onSelect = (photoIndex) => {
        setPhoto({ photoIndex: photoIndex, isOpen: true })
    }

    return (
        <div className="">
            <Waypoint element={element} />
            <FullHeading title={title} />
            <div className="mb-3">
                {info}
            </div>
            <div className="row">
                {awardDetails.map((award) =>
                    <div className="col-md-6 mb-2" style={{ cursor: "zoom-in" }} onClick={()=>onSelect(award.id)}>
                        
                        <AwardsCard
                            id={award.id}
                            image={award.image}
                            name={award.name}
                            event={award.event}
                            amount={award.amount}
                        />
                    </div>)}
                {photo.isOpen && <Lightbox
                    mainSrc={`${BASE_URL}/${awardDetails[photo.photoIndex].image}`}
                    onCloseRequest={() => setPhoto({
                        ...photo,
                        isOpen: false
                    })}
                />}
            </div>
            <hr />
            <div className="row mb-5">
                <div className="col-md-4">
                    <ActionCards
                        title="Gallery"
                        btnName="see more"
                        link="/Gallery"
                        headingLink={false} />
                </div>
                <div className="col-md-4">
                    <ActionCards
                        title="Media"
                        btnName="see more"
                        link="/Media"
                        headingLink={false} />
                </div>
                <div className="col-md-4">
                    <ActionCards
                        title="Video Interviews"
                        btnName="see more"
                        link="/Media/VideoInterviews"
                        headingLink={false} />
                </div>

            </div>

        </div>
    );
}

export default AwardsDisplay;