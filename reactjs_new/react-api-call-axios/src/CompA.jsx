import React, { useEffect, useState } from 'react';
import axios from "axios";

const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        //alert("hi");
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${num}`
            );
            console.log(res.data);
            setName(res.data.name);
            // setMoves(res.data.moves.length);
        }
        getData();

    });


    const getEvent = (event) => {
        setNum(event.target.value);
        console.log(event.target.value);
    }

    return (
        <>
        <h1>You chose {name} name</h1>
        <h1>You chose {moves} moves</h1>
        <h1>You chose {num} value</h1>
        <select value={num} onChange={getEvent}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    );
}

export default CompA;