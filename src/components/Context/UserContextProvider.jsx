import React, { useState } from "react";
import UserContext from "./context";
import Profile from "../Profile";
import LoginForm from "../authForm"

const UserContextProvider=({children})=>{
    const [User,setUser]=useState('');
      //useState for password
    const [password,setPassword]=useState('');
    //State management for Logout
    const [logOut,setLogout]=useState(true);
    const login=(user,password)=>{
      if(user){
        setUser(user);
        setPassword(password);
        setLogout(true);
        return true;
      }
      else{
        return false;
      }
    }
    const logout=()=>{
        setUser("");
        setPassword("");
        setLogout(false);
    }
    return(
        <UserContext.Provider value={{login,User,logout,logOut,setLogout}}>
         {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider