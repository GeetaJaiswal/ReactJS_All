import React from 'react';
// import Cards from './Cards';
// import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';


//if-else condition
 const FavSeries = "Netflix";

// const Favs = () => {
//         if(FavSeries === "Netflix"){                           //if-else condition
//                 return <Netflix/>
//         }
//         else{
//                 return <Amazon/>
//         }
// }

// const App = () => (     
//                 <>
//                     <h1 className="heading">Best Netflix Series</h1>
//                     <Favs/>
//                 </>
// );



// Ternary operator
const App = () => (                                                              //ternary operator
        <>
            <h1 className="heading">Best Netflix Series</h1>                      
            {(FavSeries === "Netflix") ? <Netflix/> : <Amazon/>}
        </>
);



// Display All series

// const App = () => (     //Fat Arrow Method
//         <>
//             <h1 className="heading">Best Netflix Series</h1>                     // Display All series
//             {Sdata.map((val, index) => {
//                 // console.log(index);
//                 return ( 
//                         <Cards
//                                 key = {val.id}
//                                 imgsrc = {val.imgsrc}
//                                 category = {val.category}
//                                 title = {val.title}
//                                 link = {val.link}
//                         />
//                 );
//                 })}
//         </>
//     );


    export default App;


