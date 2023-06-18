import React, { useEffect, useState } from 'react';

const App = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    // useEffect(() => {
    //     alert("Its useEffect hook");
    // });

    // useEffect(() => {
    //     alert("Its useEffect hook");              //this will run  only at once in beginning
    //     },[]);
 

    //  useEffect(() => {
    //     alert("Its useEffect hook");              //this will run  only num
    //     },[num]);   
    
    useEffect(() => {
        document.title = `you clicked ${num} times`;      //title changes
        });

    const increase = () => {
        setNum(num+1);
    }

    const increases = () => {
        setNums(nums+1);
    }

    return (
        <>
        <button onClick={increase}>Click me {num}</button>
        <br/>
        <button onClick={increases}>Click me {nums}</button>
        </>
    );
}

export default App;