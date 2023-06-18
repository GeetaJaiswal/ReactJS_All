import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return(
        <>
        <NavLink exact to='/' activeClassName='active_class'>About us</NavLink><br/>
        <NavLink exact to='/contact' activeClassName='active_class'>COntact us</NavLink>
        </>
    );
}

export default Menu;