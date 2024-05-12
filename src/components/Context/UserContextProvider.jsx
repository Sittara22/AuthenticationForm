import React, { useState , useEffect } from "react";
import UserContext from "./context";
import Profile from "../Profile";
import LoginForm from "../authForm"

const UserContextProvider=({children})=>{
    const [User,setUser]=useState(()=>{
        return JSON.parse(localStorage.getItem('User'));
    });
      //useState for password
    const [password,setPassword]=useState('');
    //State management for Logout and use Local storage for persistent values
    const [logOut, setLogout] = useState(() => {
        // Initialize logout state from localStorage, defaulting to true if not present
        return JSON.parse(localStorage.getItem('logOut')) 
      });
      useEffect(() => {
        localStorage.setItem('logOut', JSON.stringify(logOut));
        localStorage.setItem('User',JSON.stringify(User));
      }, [logOut,setLogout]);
    
    const login=(user,password)=>{
      if(user){
        setUser(user);
        setPassword(password);
       setLogout(false);
        return true;
      }
      else{
        console.log(logOut);
        setLogout(true);
        return false;
      }
    }
    const logout=()=>{
        setUser("");
        setPassword("");
        console.log(logOut);
       setLogout(true);
    }
    return(
        <UserContext.Provider value={{login,User,logout,logOut,setLogout}}>
         {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider