import React from 'react';
import Waypoint from './Waypoint'

function OrganizationDisplay({ description, data, title }) {


    return (
        <>
            <h3>{title}</h3>
            <p className="text-muted">{description}</p>
            {data.map((state) =>
                <div className="col-md-3" key={state.id}>
                    <div className="card m-3 shadow">
                        <img src={state.image} alt={state.name} />
                    </div>
                    <div className="mt-0 text-center">
                        <h6 class="card-title">{state.name}</h6>
                    </div>
                </div>
            )}
        </>
    );
}

export default OrganizationDisplay;