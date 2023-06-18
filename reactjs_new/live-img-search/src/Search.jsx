import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {

    const [img,setImg] = useState();
    const inputEvent = (event)=>{
        console.log(event.target.value);
        setImg(event.target.value);
    }



    return(
        <>
        <div className="searchbar">
            <input type="text" placeholder="Search here" value={img} onChange={inputEvent}/>
            <br/>
            {img ?  (<Sresult name={img} />) : null}
        </div>
        </>
    );
}

export default Search;