import React from 'react';

const ApportAside = ({title, unit, value, image}) => {

    return (
    <div className="apportAside">
        <img src={image} alt={title} className='iconApport' />

        <div className="values">
            <h2>{value}{unit}</h2>
            <p>{title}</p>
        </div>  
    </div>
    )
}

export default ApportAside;