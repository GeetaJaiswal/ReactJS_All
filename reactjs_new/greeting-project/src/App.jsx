import React from 'react';
import "./index.css";
import {Sum, Sub, Mult, Div} from './Calc';


//one

// const Name = "verma";

// function App(){

//     let time = new Date().getHours();
//     let greet = "";
//     const cssStyle = { };

//     if(time>=1 && time<2){
//         greet = "Good morning";
//         cssStyle.color='green';
//     }
//     else if (time>=12 && time<19) {
//         greet = "Good Afternoon";
//         cssStyle.color='Orange';
//     }
//     else{
//         greet = "Good Night";
//         cssStyle.color='Black';
//     }

//     return (
//         <>
//             <div className="div_center">
//             <p>Hello sir, <span style={cssStyle}>{greet}</span></p>
//             </div>
//         </>
//     );
// }

// function Sum(){
//     let name="geeta";
//     return name;
// }

// export default App;
// export {Name,Sum};

//one

//two calc
function App(){
    return <>
    <ul>
        <li>Sum is {Sum(2,5)}</li>
        <li>Subtraction is {Sub(2,5)}</li>
        <li>Multiplication is {Mult(2,5)}</li>
        <li>Division is {Div(2,5)}</li>
    </ul>
    </>
}

export default App;

//two