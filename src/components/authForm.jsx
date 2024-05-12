import React, { useContext, useState } from 'react'
import UserContext from './Context/context';

function authForm() {

  //useState for email 
const [user,setUser]=useState('');
//useState for password
const [password,setPassword]=useState('');

const { login }=useContext(UserContext);

//handle Email input
const handleUser=(e)=>{
    setUser(e.target.value);    
}
//handle Password input
const handlePassword=(e)=>{
    setPassword(e.target.value);
}
//handle form submit
const handleSubmit=(e)=>{
    e.preventDefault();
    login(user,password);
  }

  return (
    <>
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign In</h2>
    </div>
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
      <form  className="space-y-6" onSubmit={handleSubmit}> 
      <div className='flex flex-col'>
        <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Enter User Name</label>
       <div className='mt-2'>
       <input type='text' value={user} className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleUser} required/>
        </div>
        </div>
        <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Enter Password</label>
        <div className='mt-2'>
        <input type='password' value={password} onChange={handlePassword} required className="block w-full p-3 rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    <div className='mt-6'>
    <button type='submit' className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
    </div>
    
 </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default authForm
