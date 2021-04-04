import React, { useState } from 'react';

function Collapse({ question, answer, id }) {
    const [isClicked, setClick] = useState(false);
    console.log(id);
    return (
        <>
            <div className="w-100 mt-3 mb-3" style={{ backgroundColor: "#e2e2e2" }}>
                <div className="row">
                    <div className="col-10">
                        <h5 className="ps-2 pt-1">{question}</h5>
                    </div>
                    <div className="col-2">
                        <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${id}`}
                            className="btn float-end "
                            style={{ backgroundColor: "#5add5f" }}
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            onClick={() => {
                                setClick(!isClicked);
                            }}
                        >
                            {isClicked ? <h5 className="text-light">-</h5> : <h5 className="text-light">+</h5>}
                        </button>
                    </div>
                </div>
                <div className="collapse" id={`${id}`}>
                    <div className="w-100 mt-3 ps-2 pb-2">
                        {answer}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Collapse;