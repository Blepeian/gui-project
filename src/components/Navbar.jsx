import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../pages/Homepage";

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useContext(AuthContext);
    const homepage = useHistory();

    const logout = e => {
        setLoggedIn(false);
        homepage.push('/');
    }

    if(loggedIn){
        return (
            <div className={"navbar"}>
                <li>
                    <Link className="nav-element" to="/board">Board</Link>
                </li>
                <li>
                    <Link className="nav-element" to="/archive">Archive</Link>
                </li>
                <li>
                    <Link className="nav-element" to="/recent">Recent</Link>
                </li>
                <li>
                    <Link className="nav-element" to="/" onMouseDown={logout}>Log Out</Link>
                </li>
            </div>
        );
    }
    else{
        return (
            <div className={"navbar"}>
                <li>
                    <Link className="nav-element" to="/">Home</Link>
                </li>
            </div>
        );
    }
  };
    
  export default Navbar;