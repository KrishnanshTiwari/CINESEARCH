import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/Authcontext';
function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log(user);
        navigate("/")
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
      <form onSubmit={handleLogin} id='login'>
        <div className='mb-4'>
        <label htmlFor="email" className='block text-base font-bold mb-2'>Enter Yor Email</label>
        <input
          id='email'
          type="email"
          placeholder="Email..."
          className='shadow  border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-[#309ccf]'
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='mb-4'>
        <label className='block text-base font-bold mb-2' htmlFor="password">Enter Your Password</label>
        <input
          id='password'
          type="password"
          placeholder="Password..."
          className='shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-red-500'
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="on"
        />
        </div>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 py-1 mb-2 rounded'>Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      <span>Don't have an account : </span>
      <button className='font-bold text-[#309ccf]' onClick={() => navigate("/signup")}>Signup</button>
    </div>
    </div>
  )
}

export default Login