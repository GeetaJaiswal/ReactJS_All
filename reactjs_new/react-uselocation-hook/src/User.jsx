import React from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
    const location = useLocation();
    console.log(location);
    return(
        <>
        <p>your path is {location.pathname}</p>
        { location.pathname === `/user/technical/thapa` ? (<button>click me</button>) : null }
        </>
    );
}

export default User;