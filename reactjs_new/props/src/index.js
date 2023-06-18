import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';

ReactDOM.render(
<>
<h1 className="heading">Best Netflix Series</h1>

<Cards imgsrc = {Sdata[0].imgsrc}
       category = {Sdata[0].category}
       title = {Sdata[0].title}
       link = {Sdata[0].link}
/>

<Cards imgsrc = {Sdata[1].imgsrc}
       category = {Sdata[1].category}
       title = {Sdata[1].title}
       link = {Sdata[1].link}
/>

<Cards imgsrc = {Sdata[2].imgsrc}
       category = {Sdata[2].category}
       title = {Sdata[2].title}
       link = {Sdata[2].link}
/>

<Cards imgsrc = {Sdata[3].imgsrc}
       category = {Sdata[3].category}
       title = {Sdata[3].title}
       link = {Sdata[3].link}
/>

</>,
document.getElementById("root")
);


// ReactDOM.render(
//     <>
//     <Cards imgsrc = "https://wallpapercave.com/wp/wp4056399.jpg"
//            category = "Netflix Original Series"
//            title = "Dark"
//            link = "https://www.netflix.com/in/title/80100172">
//     </Cards>
    
//     <Cards imgsrc = "https://wallpapercave.com/wp/wp4595720.png"
//            category = "Netflix Original Series"
//            title = "Stranger Things"
//            link = "https://www.netflix.com/in/title/80057281">
//     </Cards>
    
//     <Cards imgsrc = "https://wallpapercave.com/wp/wp4543113.jpg"
//            category = "Netflix Original Series"
//            title = "Harry Potter"
//            link = "https://en.wikipedia.org/wiki/Harry_Potter">
//     </Cards>
    
//     <Cards imgsrc = "https://wallpapercave.com/wp/wp2415511.jpg"
//            category = "Netflix Original Series"
//            title = "End Of The Fucking World"
//            link = "https://en.wikipedia.org/wiki/The_End_of_the_F***ing_World">
//     </Cards>
//     </>,
//     document.getElementById("root")
//     );