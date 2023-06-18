import React, { useState } from 'react';

const App = () => {

    let time = new Date().toLocaleTimeString();

    const [digitalTime, updateTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        updateTime(time);
    };

    setInterval(UpdateTime,1000);  // this function is used to set time interval, "first argument is function", and
                                         //"second argument is that in what internal you want to rum this"

    return (
        <>
         <div className="outer_div">  
         <h1 className="count">{digitalTime}</h1>
         </div>
        </>
    );
};

export default App;