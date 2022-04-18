import React from "react";
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/archive">Archive</Link>
            </li>
            <li>
                <Link to="/recent">Recent</Link>
            </li>
        </div>
    );
  };
    
  export default Navbar;