import React from 'react';
import PotraitCard from '../components/PotraitCard';
import Waypoint from '../components/Waypoint';

function AnnualReports({ element }) {
    return (
        <div className="container odd">
            <Waypoint element={element} />
            <h3>Annual Reports</h3>
            <div className="row">
                <div className="col-sm-6 col-md-3 col-xl-2">
                    <PotraitCard />
                </div>
                <div className="col-md-3 col-xl-2">
                    <PotraitCard />
                </div>
                <div className="col-md-3 col-xl-2">
                    <PotraitCard />
                </div>
                <div className="col-md-3 col-xl-2">
                    <PotraitCard />
                </div>
                <div className="col-md-3 col-xl-2">
                    <PotraitCard />
                </div>
            </div>
        </div>
    );
}

export default AnnualReports;