import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import ActionCards from '../components/ActionCards';
import FullHeading from "../components/FullHeading"
import Waypoint from '../components/Waypoint';

function DonarDetails({ element }) {
    const [tableData, setData] = useState();
    useEffect(() => {
        const arr = [];
        data.map((d) => arr.push({ ...d, amount: formatCurrency(d.amount) }));
        setData(arr);
        console.log(tableData);
    }, [])

    function formatCurrency(money) {
        var formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        });
        return formatter.format(money);
    }

    return (
        <div className="container odd">
            <FullHeading title="Donor Details" />
            <Waypoint element={element} />
            <div>
                <table class="table table-striped" style={{ backgroundColor: "#39bb39" }}>
                    <thead>
                        <tr>
                            {tableHead.map((th) => <th key={uniqueId()} className="text-light" scope="col">{th}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData ? tableData.map((detail) =>
                            <tr key={detail.id} className="table-light">
                                <th scope="row">{detail.id}</th>
                                <td>{detail.name}</td>
                                <td>{detail.scheme}</td>
                                <td>{detail.amount}</td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <ActionCards
                        title="About Samagra Foundation"
                        link="/About"
                        btnName="Know more"
                        headingLink={false}
                    />
                </div>
                <div className="col-md-4">
                    <ActionCards
                        title="How we create impact"
                        link="/Schemes"
                        btnName="Know more"
                        headingLink={false}
                    />
                </div>
                <div className="col-md-4">
                    <ActionCards
                        title="Join us to help more"
                        link="/Join"
                        btnName="Join us"
                        headingLink={false} />
                </div>

            </div>


        </div>
    );
}

const tableHead = ["S.No", "Name of the Donor", "Donate to", "Amount"];
const data = [{ id: 1, name: "Mark", scheme: "Bharatiya Suraj Bijili Yojana", amount: 5000 },
{ id: 2, name: "Mark", scheme: "Bharatiya Nari Shakti Yojana", amount: 10000 },
{ id: 3, name: "Mark", scheme: "Bharatiya Varshjal Sanchayan Yojana", amount: 10000 },
{ id: 4, name: "Mark", scheme: "Bharatiya Nari Shakti Yojana", amount: 10000 },
{ id: 5, name: "Mark", scheme: "Bharatiya Varshjal Sanchayan Yojana", amount: 10000 },
{ id: 6, name: "Mark", scheme: "Bharatiya Suraj Bijili Yojana", amount: 5000 },
{ id: 7, name: "Mark", scheme: "Bharatiya Nari Shakti Yojana", amount: 10000 },
{ id: 8, name: "Mark", scheme: "Bharatiya Varshjal Sanchayan Yojana", amount: 10000 },
{ id: 9, name: "Mark", scheme: "Bharatiya Nari Shakti Yojana", amount: 10000 },
{ id: 10, name: "Mark", scheme: "Bharatiya Varshjal Sanchayan Yojana", amount: 10000 },
{ id: 11, name: "Mark", scheme: "Bharatiya Suraj Bijili Yojana", amount: 5000 },
{ id: 12, name: "Mark", scheme: "Bharatiya Nari Shakti Yojana", amount: 10000 },
{ id: 13, name: "Mark", scheme: "Bharatiya Varshjal Sanchayan Yojana", amount: 10000 },
{ id: 14, name: "Mark", scheme: "Bharatiya Nari Shakti Yojana", amount: 10000 },
{ id: 15, name: "Mark", scheme: "Bharatiya Varshjal Sanchayan Yojana", amount: 10000 },
]

export default DonarDetails;