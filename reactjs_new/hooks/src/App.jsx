import React, { useState } from 'react';


//increment by 1 

const App = () => {

    // const state = useState();
    // console.log(state);

    const [count, setCOunt] = useState(0);

    const Increment = () =>{
        setCOunt(count+1);
        //console.log("Clicked"+count++);
    };

    return (
        <>
        <div className="outer_div">  
        <h1 className="count">{count}</h1>
        <button className="action" onClick={Increment}>Click Me</button>
        </div>
        </>
    );
}

// increment by 1

export default App;