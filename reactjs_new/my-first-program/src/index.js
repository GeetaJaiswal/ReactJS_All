// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

const name = "Stranger Things";
const fname = "Hello";
const lname = "World";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://picsum.photos";

const heading ={
    color: 'brown',
    fontSize:'xx-large',
    fontFamily: "'Lobster', cursive", 
    fontWeight: '300',
    textAlign: 'center',
    textTransform: 'capitalize'
}


// Render multiple elements
ReactDOM.render(
    // <div>
    //     <h1>Hello World!!</h1>
    //     <p>render multiple jsx elements</p>
    // </div>,

    // [
    // <h1>Hello World!!</h1>,
    //     <p>render multiple jsx elements</p>,
    // ],

    // <>
    //     <h1>Hello World!!</h1>
    //     <p>render multiple jsx elements</p>
    // </>,

    // <React.Fragment>
    //     <h1>Hello World!!</h1>
    //     <p>render multiple jsx elements</p>
    // </React.Fragment>,

    // <React.Fragment>
    //     <h1>Netflix Series</h1>
    //     <p>Best 5 netfix series</p>
    //     <ol>
    //         <li>Stranger Things</li>
    //         <li>Money Heist</li>
    //         <li>The End of the fucking world</li>
    //         <li>Harry potter</li>
    //         <li>13 reasons why</li> 
    //     </ol>
    // </React.Fragment>,

    // <>
    //     <h1>Netflix Series is {name}</h1>
    //     <p>Total is {3+4} </p>
    //     <p>lucky number is {Math.random()}</p>
    //     <p>{`firstname is ${fname} and lastname is ${lname}`}</p> //literals
    // </>,

    <>
        <h1 contenteditable="true" style={heading}>Netflix Series is {name}</h1>
        <p className="para">Date is {date}</p>
        <p className="para">Time is {time}</p>
        
        <div className="div_img">
        <img src={img1} alt="loremimg1"/>
        <img src={img2} alt="loremimg2"/>
        <a href={link} target="_blank">
        <img src={img3} alt="loremimg3"/>
        </a>


        <h1>hello SCSS here</h1>
        <p>WE are doing scss editing </p> 
        </div>
    </>,
   
    document.getElementById("root"));
//render(what to write(it is actually jsx not html), where to show(this id we have in index.html file of public folder))

