import React from 'react';
import Clock from 'react-digital-clock';
import Countdown from 'react-countdown';
import './index.css';


const App = () => {
    return (
        <>
        <br/><br/><br/><br/>
        <div className="clock">
        <Countdown date={Date.now() + 10000} />
        
        <Clock className="clock"/>
        </div>

        </>
    );
}

export default App;