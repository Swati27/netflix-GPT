import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const[isSigninForm, setIsSigninForm] = useState(true);
  
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm)
  }
  return (
    <div>
      <div className="absolute">
      <Header/>
      <img src = 'https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/c869f424-8171-48ff-9b26-eb983c3cdf40/US-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt = "logo"  
    />
    </div>
    <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSigninForm? 'Sign In' : 'Sign Up'}</h1>
      <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
      <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
      <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSigninForm? 'Sign In' : 'Sign Up'}</button>
      <p className="py-4" onClick={toggleSignInForm}>
      {isSigninForm? 'New to Netflix? Sign Up Now' : 'Already registered? Sign Up Now'}
      </p>
    </form>
    </div>
  )
}

export default Login