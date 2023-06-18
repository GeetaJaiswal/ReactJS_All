import React, { useState } from 'react';

const App = () =>{

    const [text,setText] = useState("Click Me");
    const purple = "#8e44ad";
    const [bg,setBg] = useState('purple')
    const bgChange = () => {
        // console.log("clicked");
        const newBg = "#34495e";
        const newText = "I am Changed";
        setBg(newBg);
        setText(newText);
    }

    const bgColor = () => {
        const newBg= "#76927d";
        const newText = "I am again changed 😜";
        setBg(newBg);
        setText(newText);
    }

    return(
        <>
        <div style = {{backgroundColor:bg}} className="outer_div">
        <button className="button_event" onClick={bgChange} onDoubleClick={bgColor}>{text}</button>
        </div>
        </>
    );
};


export default App;