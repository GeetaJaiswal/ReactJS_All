import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App,{Name, Sum} from './App';
// import * as all from './App';


//one
// ReactDOM.render(
//     <>
//     <p>{Name}</p>
//     <p>{Sum()}</p>
//     <App/>
//     </>,
//     document.getElementById("root"));    



// ReactDOM.render(
// <>
// <p>{all.Name}</p>                // when importing all at once using *
// <p>{all.Sum()}</p>
// {all.default()}
// </>,
// document.getElementById("root"));

//one


//two

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// let time = new Date().getHours();
// let greet = "";
// const cssStyle = { };

// if(time>=1 && time<2){
//   greet = "Good morning";
//   cssStyle.color='green';
// }
// else if (time>=12 && time<19) {
//   greet = "Good Afternoon";
//   cssStyle.color='Orange';
// }
// else{
//   greet = "Good Night";
//   cssStyle.color='Black';
// }


// ReactDOM.render(
//   <>
//     <div className="div_center">
//       <p>Hello sir, <span style={cssStyle}>{greet}</span></p>
//     </div>
//   </>,
// document.getElementById("root")
// );

//two


//three
ReactDOM.render(<App/>,document.getElementById("root"));


//three