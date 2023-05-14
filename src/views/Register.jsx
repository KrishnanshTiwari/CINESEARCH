import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/Authcontext';
function Register() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        setError(true);
      });
  };
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-[rgba(49,49,49,0.3)] w-full max-w-xs shadow-md py-12 px-8 text-white rounded'>
      <form onSubmit={handleSignup} id='signup'>
        <div className='mb-4'>
      <label htmlFor="email" className='block text-base font-bold mb-2'>Enter Yor Email</label>
        <input
          id='mail'
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          className='shadow  border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-[#309ccf]'
        />
        </div>
        <div className='mb-4'>
        <label className='block text-base font-bold mb-2' htmlFor="password">Enter Your Password</label>
        <input
          id='code'
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="on"
          className='shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-red-500'
        />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 py-1 mb-2 rounded' type="submit">Sign-up</button>
        {error && <span>Something went wrong...</span>}
      </form>
      <span>Already have an account : </span>
      <button className='font-bold text-[#309ccf]' onClick={() => navigate("/login")}>Login</button>
    </div>
    </div>
  )
}

export default Register