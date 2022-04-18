import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages/Homepage";

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useContext(AuthContext);

    const logout = e => {
        setLoggedIn(false);
    }

    if(loggedIn){
        return (
            <div className={"navbar"}>
                <li>
                    <Link to="/" onMouseDown={logout}>LogOut</Link>
                </li>
                <li>
                    <Link to="/board">Board</Link>
                </li>
                <li>
                    <Link to="/archive">Archive</Link>
                </li>
                <li>
                    <Link to="/recent">Recent</Link>
                </li>
            </div>
        );
    }
    else{
        return (
            <div className={"navbar"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </div>
        );
    }
  };
    
  export default Navbar;