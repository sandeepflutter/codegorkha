
import React from "react";
import { Outlet, Link } from 'react-router-dom';


function Nav() {
  return (
    <div>
    <h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link> 
      <Link to="/Mobile">Mobile</Link>
    </nav>
    <Outlet />
  </div>
              
              )
           
           
            
}   

export default Nav;
