import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return(
        <>
        <NavLink exact to='/user/:name' activeClassName='active_class'>User us</NavLink>
        </>
    );
}

export default Menu;