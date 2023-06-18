import React from 'react';


function Sum(a,b){
    let sum = a+b;
    return sum;
}

function Sub(a,b){
    let sub = a-b;
    return sub;
}

function Mult(a,b){
    let mul = a*b;
    return mul;
}

function Div(a,b){
    let div = a/b;
    div = div.toFixed(3);
    return div;
}

export {Sum, Sub, Mult, Div};