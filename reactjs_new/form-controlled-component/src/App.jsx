import React, { useState } from 'react';

const App = () => {
    const [firstname,setFirstname] = useState("");

    const [fname, setFname] = useState();

    const [lastname,setLastname] = useState("");

    const [lname, setLname] = useState();

    const inputEvent = (event) => {  //event is a object 
        console.log(event.target.value);
        setFirstname(event.target.value);
    };

    const inputEventTwo = (event) => {  //event is a object 
        console.log(event.target.value);
        setLastname(event.target.value);
    };

    const onSubmits = (event) => {
        event.preventDefault();       // to prevent/ignore the default behaviour of <form> tag, which is,
                                                    // it refreshes itself on submit. so to retain the screen
                                                    // with the current value, we are using it here. 
        setFname(firstname);
        setLname(lastname);
    }

    return(
        <>
        <form onSubmit={onSubmits}>
        <div>
        <h1>Hello {fname} {lname}</h1>
        <input type="text" placeholder="Enter your firstname" onChange={inputEvent} />   
        {/* <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}/> defaultValue="" */}
        
        <br/>

        <input type="text" placeholder="Enter your lastname" onChange={inputEventTwo}/>   

        <br/>

        <button type="submit">Click me</button>
        </div>
        </form>
        </>
    );
};


export default App;