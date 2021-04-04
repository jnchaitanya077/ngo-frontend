import React from 'react';

function Event(props) {
    return (
        <div className="pt-4">
            <marquee width="100%" direction="left" height="50px">
                <span className="text-danger"><strong>**  Update about events will be scrolled here. ** &nbsp;&nbsp;&nbsp;</strong></span>
                <span className="text-danger"><strong>**  Update about events will be scrolled here. **  &nbsp;&nbsp;&nbsp; </strong></span>
                <span className="text-danger"><strong>**  Update about events will be scrolled here. ** &nbsp;&nbsp;&nbsp; </strong></span>
                <span className="text-danger"><strong>**  Update about events will be scrolled here. ** </strong></span>
            </marquee>

        </div>
    );
}

export default Event;