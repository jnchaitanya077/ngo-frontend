import React from 'react';
// Image imports
import donation from "../icons/funding.png"
import help from "../icons/love.png"
import people from "../icons/group.png"

function Stats({ info }) {
    const shadow = {
        boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
        backgroundColor: "#E3FBE6"
    }
    return (
        <div className="mt-md-3 border rounded-3 shadow p-3" style={shadow}>
            <h5>
                <img className="img-fluid me-2" width={60} src={donation} alt=".." />
            Total Funds Collected :
            </h5>
            <p className="fs-3">{info ? info.fundsCollected : ""}</p>
            <h5>
                <img className="img-fluid me-2" width={60} src={help} alt=".." />
            Total people Helped:
            </h5>
            <p className="fs-3">{info ? info.peopleBenefited : ""}</p>
            <h5>
                <img className="img-fluid me-2" width={60} src={people} alt=".." />
            scholorships granted:
            </h5>
            <p className="fs-3">{info ? info.moneySpent : ""}</p>
        </div>
    );
}

export default Stats;