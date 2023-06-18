import React from 'react';
import { useHistory } from 'react-router-dom';

const User = () => {
    const history = useHistory();
    console.log(history);

    const Back = () => {
        history.goBack();
    }

    const Back2 = () => {
        history.push("/");                //at homepage
    }

    return(
        <>
        <br/>
        <button onClick={Back}>Go back</button>
        <br/>
        <button onClick={Back2}>Homepage</button>
        </>
    );
}

export default User;