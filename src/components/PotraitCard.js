import React from 'react';

function PotraitCard(props) {
    return (
        <div class="card mb-3" style={{ height: "220px", width: "150px" }}>
            <img
                alt="..."
                height="180px"
                src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <p className="text-center fw-bold p-2">2019-2020</p>
        </div>
    );
}

export default PotraitCard;