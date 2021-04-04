import React from 'react';
import Waypoint from '../components/Waypoint';
import OrganizationDisplay from '../components/OrganizationDisplay';
import Logo1 from "../images/support/aven.png"
import Logo2 from "../images/support/dummy-logo.png"
import Logo3 from "../images/support/hexa.png"
import Logo4 from "../images/support/treva.png"
import Logo5 from "../images/support/images.png"
import Logo6 from "../images/support/dummy.jpg"
import Logo7 from "../images/support/dummy1.jpeg"



function CorporateOrganizations({ element }) {
    return (
        <div className="container mt-5">
            <Waypoint element={element} />
            <div className="row odd">
                <OrganizationDisplay
                    description={description}
                    data={states}
                    title="Corporate Partners"
                />
            </div>
        </div>
    );
}

const states = [
    {
        id: 0,
        name: "Dummy Text",
        image: Logo1,
    },
    {
        id: 1,
        name: " Dummy Text",
        image: Logo2,
    },
    {
        id: 2,
        name: " Dummy Text",
        image: Logo3,
    },
    {
        id: 3,
        name: " Dummy Text",
        image: Logo4,
    },
    {
        id: 4,
        name: " Dummy Text",
        image: Logo5,
    }, {
        id: 5,
        name: " Dummy Text",
        image: Logo6,
    },
    {
        id: 6,
        name: " Dummy Text",
        image: Logo7,
    }
]


const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

export default CorporateOrganizations;