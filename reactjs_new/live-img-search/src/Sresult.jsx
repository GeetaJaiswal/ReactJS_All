import React from 'react';

const Sresult = (props) => {
    const image = `https://source.unsplash.com/240x300/?${props.name}`;
    return(
        <>
            <div className="searchbar">
                <img src={image} alt="search"/>
            </div>
        </>
    );
}

export default Sresult;