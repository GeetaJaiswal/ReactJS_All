import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 navbar">
          <div className="col-lg-2 logo">
            Logo Here
          </div>
          <div className="col-lg-6 searchbar">
            <select>
              <option>All Catergories</option>
              <option></option>
            </select>
               <input type="text" placeholder="" />
               <img src="images/Icons/Navigation icons/png/Search icon.png" alt="search" className="search-icon"/>
          </div>
        
          <div className="col-lg-1 profile">
            <div className="icon">
              <img src="images/Icons/Navigation icons/png/profile icon.png" alt="profile"/>
                <span>Sign in </span>
            </div>
          </div>

          <div className="col-lg-1 profile">
            <div className="location-icon icon">
              <img src="images/Icons/Navigation icons/png/Location.png" alt="location"/>
                <span>Track Order</span>
            </div>
          </div>

          <div className="col-lg-1 profile">
            <div className="icon">
              <img src="images/Icons/Navigation icons/png/Cart.png" alt="cart"/>
                <span>Your Order</span>
            </div>
        </div>
      </div>
    </div>
      
    </>
  );
}


export default Navbar;
