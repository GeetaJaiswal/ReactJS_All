import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';


const App = () => {

    const [num, setNum] = useState(0);

    const getEvent = (event) => {
        console.log("clicked");
        setNum(num+1);
    }

    const getEventTwo = (event) => {
        // console.log("clickedTwo");
        if(num<=0){
            alert("You have reached to limit 0");
            setNum(num);
        }
        else{
            setNum(num-1);
        } 
    }


    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>{num}</h1>
                <div className="btn_div">
                <Button variant="contained" className="inc_btn" onClick={getEvent}><AddIcon/></Button>
                <Button className="dec_btn" onClick={getEventTwo}><RemoveIcon/></Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;