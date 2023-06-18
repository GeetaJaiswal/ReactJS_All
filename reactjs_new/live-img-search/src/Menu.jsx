import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return(
        <>
        <NavLink exact to='/' activeClassName='active_class'>About us</NavLink><br/>
        <NavLink exact to='/contact' activeClassName='active_class'>Contact us</NavLink><br/>
        <NavLink exact to='/user/:name' activeClassName='active_class'>User us</NavLink>
        </>
    );
}

export default Menu;