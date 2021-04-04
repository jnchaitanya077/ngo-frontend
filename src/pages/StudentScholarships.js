import React from 'react';
import AwardsDisplay from '../components/AwardsDisplay';
import { uniqueId } from 'lodash';

// awardsData
import { AwardDetails } from "../data/Awards"

function StudentScholarships({ element }) {
    return (<>
        <AwardsDisplay
            key={uniqueId()}
            element={element}
            title="Student Scholarships"
            info={info}
            awardDetails={AwardDetails}
        />
    </>

    );
}

export default StudentScholarships;

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"