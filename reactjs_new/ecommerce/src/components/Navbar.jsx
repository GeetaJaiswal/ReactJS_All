import React from 'react';
import { Container } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReorderIcon from '@material-ui/icons/Reorder';
import {LoginDropdown,MoreDropdown, SideNav} from '../components/TopNavDropdown';
import {LoginDropdownData,MoreDropdownData, SideNavData} from '../components/TopNavDropdownData';
import logo from '../assets/images/logo.png';
import PersonIcon from '@material-ui/icons/Person';

const Navbar = () => {

  const OpenNav = () => {
    //console.log("clicked");
      document.getElementById("mySidenav").style.width = "55%";
      document.getElementById("mySidenav").style.height = "100%";
      document.getElementById("mySidenav").style.overflowY = "scroll";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }    

  const CloseNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
  }

    return(
        <>
        <div className="navbar navbar-row fixed">
        <Container>
        <div className="row">

            {/* mobile-view */}
            <div className="d-lg-none d-lg-block order-xs-1">
            <button onClick={OpenNav} style={{position:"relative"}} className="smallnav"><ReorderIcon/></button>
                <img src={logo} alt="logo" class="small-logo"/>
            </div>

            <div className="d-lg-none sm-login-btn order-xs-1 order-xs-3">
                <span className="d-sm-block smallnav menu">Login</span>
            </div>
       {/* mobile-view end */}

        <div className="d-none d-lg-block col-lg-1 col-1">
           <img src={logo} alt="logo"/>
        </div>
        <div className="col-lg-6 order-xs-4">
            <form className="d-flex searchbar">
            <input type="text" placeholder="Search for Products, Brands and more"/>
            <SearchIcon className="search-icon"/>
            </form>
        </div>

        <div className="d-none d-lg-block col-lg-2 login-btn">
        <li className="dropdown"><a className="links">Login</a>
          <div>
            <List className="dropdown-menu"> 
            {LoginDropdownData.map((val,index) => {
            return ( 
                <LoginDropdown
                key={index} 
                id={index} 
                icon={val.icon}
                title={val.title} 
                />
            );
            })
            } 
            </List>
          </div>
        </li>
        </div>


        <div className="d-none d-lg-block col-lg-2 more-btn">
        <li className="dropdown"><a className="links text-white">More</a>
          <div>
            <List className="dropdown-menu"> 
            {MoreDropdownData.map((val,index) => {
            return ( 
                <MoreDropdown
                key={index} 
                id={index} 
                icon={val.icon}
                title={val.title} 
                />
            );
            })
            } 
            </List>
          </div>
        </li>
        </div>

        <div className="col-lg-1 cart-btn order-xs-2">
        <ShoppingCartIcon/><small className="d-none d-lg-block">Cart</small>
        </div>

        </div>
        </Container>
        </div>


        {/* mobile-view sidenav */}
        <div id="mySidenav" className="d-lg-none sidenav">
            <div className="container" style={{backgroundColor: "#064420", color:"white", padding: 10}}>
                <span className="sidenav-heading" style={{fontSIze:14}}><PersonIcon className="person-icon"/>Login & Signup</span>
                <a href="javascript:void(0)" className="closebtn" onClick={CloseNav}>×</a>
            </div>
            <List> 
            {SideNavData.map((val,index) => {
            return ( 
                <SideNav
                key={index} 
                id={index} 
                icon={val.icon}
                title={val.title} 
                />
            );
            })
            } 
            </List>
        </div>   
        {/* mobile-view sidenav end */}
        </>
    );
}


export default Navbar;