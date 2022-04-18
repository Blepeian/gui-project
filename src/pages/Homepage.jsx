import React, { useState, createContext, useContext, useEffect } from "react";
import Board from "./Board";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = props => {
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <div>
          <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
            {props.children}
          </AuthContext.Provider>
        </div>
      )
}

export const Home = () => {
    const [loggedIn, setLoggedIn] = useContext(AuthContext);
    const [usernames, setUsernames] = useState([
        {
            username: 'test'
        }
    ]);

    useEffect(() => {
        const data = localStorage.getItem("users");
        if(data) {
            setUsernames(JSON.parse(data));
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("users", JSON.stringify(usernames));
      })

    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');

    const inputName = (e) => {
        setName(e.target.value);
    }

    const inputNewName = (e) => {
        setNewName(e.target.value);
    }

    const board = useHistory();
    const authenticate = e => {
        e.preventDefault();
        usernames.forEach(u => {
            if(u.username === name){
                setLoggedIn(true);
                board.push('/board');
            }
        })
    }

    const register = e => {
        const temp = [...usernames];
        const newUser = {
            username: newName
        }
        temp.push(newUser);
        setUsernames(temp);
    }

    return(
        <div>
            <form className={"login-form"} onSubmit={authenticate}>
                <p style={{'color': '#CFCFCF'}}>Type Your Username:</p>
                <input type="text" name="username" value={name} onChange={inputName}></input>
                <button className={"login-bttn"} type="submit">Login</button>
            </form>
            <br></br>
            <p style={{"margin-left": '20px'}}>-----------------------------------------------</p>
            <form className={"login-form"} onSubmit={register}>
                <p style={{'color': '#CFCFCF'}}>Type New Username To Register:</p>
                <input type="text" name="create-username" value={newName} onChange={inputNewName}></input>
                <button className={"login-bttn"} type="submit">Register</button>
            </form>
        </div>
    );
};