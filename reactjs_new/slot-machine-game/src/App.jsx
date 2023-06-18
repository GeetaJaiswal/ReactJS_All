import React from 'react';
import SlotM from './SlotM';

const App = () => {
    return(
        <>
        <h1 className="heading">🎰 Welcome to {""}
        <span>Slot machine game 🎰</span>
        </h1>
        <div className="slot_inner">
        <SlotM x='✈️' y='✈️' z='✈️'/>
        <hr/>
        <SlotM x='😸' y='🐍' z='😸'/>
        <hr/>
        <SlotM x='😸' y='😸' z='😸'/>
        <hr/>
        <SlotM x='☃️' y='😸' z='🥎'/>
        </div>
        </>
    );
}
export default App;