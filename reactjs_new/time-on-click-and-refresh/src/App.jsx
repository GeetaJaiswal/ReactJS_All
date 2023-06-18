import React, { useState } from 'react';

const App = () => {
    let time = new Date().toLocaleTimeString();
    

    const [current_time, setTime] = useState(time);

    const UpdateTime = () => {
        let curtime = new Date().toLocaleTimeString();
        setTime(curtime);
    };
    return (
                <>
                <div className="outer_div">  
                <h1 className="count">{current_time}</h1>
                <button className="action" onClick={UpdateTime}>Click Me</button>
                </div>
                </>
            );
}


export default App;