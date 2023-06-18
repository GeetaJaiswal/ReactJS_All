import React, { useState } from 'react';

const App = () => {
    const [name,setName] = useState({
        fname: "",
        lname: "",                                //objects
        email: "",
    });

    const inputEvent = (event) => {  //event is a object 
        // console.log(event.target.value);
        // console.log(event.target.name);
        // console.log(event.target.placeholder);

        const name = event.target.name;
        const value = event.target.value;


    setName((preValue) => {         //for previous value
        console.log(preValue);

        return{
            ...preValue,
            [name]:value,
        }

    //     if(name==="fname"){
    //         return {
    //             fname:value,
    //             lname:preValue.lname,
    //             email:preValue.email,
    //         };
    //     }
    //     else if(name==="lname"){
    //         return {
    //             fname:preValue.fname,
    //             lname:value,
    //             email:preValue.email,
    //         };
    //     }
    //     else if(name==="email"){
    //         return {
    //             fname:preValue.fname,
    //             lname:preValue.lname,
    //             email:value,
    //         };
    //     }
     });
};

    const onSubmits = (event) => {
        event.preventDefault();       // to prevent/ignore the default behaviour of <form> tag, which is,
                                                    // it refreshes itself on submit. so to retain the screen
                                                    // with the current value, we are using it here. 
        alert("form submitted");
                                                    
        }

    return(
        <>
        <form onSubmit={onSubmits}>
        <div>
        <h1>Hello {name.fname} {name.lname}</h1>
        <p>{name.email}</p>
        <input type="text" placeholder="Enter your firstname" onChange={inputEvent}
         name="fname" value={name.fname}/>   
        {/* <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}/> defaultValue="" */}
        
        <br/>

        <input type="text" placeholder="Enter your lastname" onChange={inputEvent} 
        name="lname" value={name.lname}/>    

        <br/>

        <input type="email" placeholder="Enter your email" onChange={inputEvent} 
        name="email" value={name.email}/>    

        <br/>

        <button type="submit">Click me</button>
        </div>
        </form>
        </>
    );
};


export default App;