import React, { createContext } from 'react';
import CompA from './CompA';


const FirstName = createContext();
const LastName = createContext();


const App = () => {
    return (
        <>
        <FirstName.Provider value={"Geeta"}>
        <LastName.Provider value={"Jaiswal"}>
        <CompA/>
        </LastName.Provider>
        </FirstName.Provider>
        </>
    );
};

export default App;
export {FirstName, LastName};
