import React, { useContext, useState } from 'react'
import UserContext from './Context/context';
import AuthForm from './authForm'


function Profile() {
    //Access logout Function from Context API
    const {logout,User}=useContext(UserContext);
    console.log(User);
  return (
    <>
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
    <img className="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"/>
    <h2 className="text-center text-2xl font-semibold mt-3">{User}</h2>
    <p className="text-center text-gray-600 mt-1">Software Engineer</p>
    <div className="flex justify-center mt-5">
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
    </div>
    <div className="mt-5">
      <h3 className="text-xl font-semibold">Welcome</h3>
    </div>
    <a href="#" onClick={logout} className="text-blue-500 hover:text-blue-700 mx-3">LogOut</a>
  </div>

    </>
    
  )
}

export default Profile
