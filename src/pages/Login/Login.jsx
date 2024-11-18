
import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
// import react from "eslint-plugin-react";
// import { signup } from '../../config/firebase'
const login = () => {
  const[currstate,setcurrstate] = useState("Sign Up")
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>{ currstate}</h2>
        {currstate === "Sign Up"?<input type="text" placeholder='username' className="form-input"  required/>:null}
        <input type="email" placeholder='Email address' className="form-input" required/>
        <input type="password" placeholder='password' className="form-input" required />
        <button type='submit'>{currstate ==="Sign Up"?"Create account":"Login now"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {
            currstate ==="Sign Up"
            ? <p className="login-toggle">Already have an account<span onClick={()=>setcurrstate("Login")}>Login Here</span></p>
            :  <p className="login-toggle">Create an account<span onClick={()=>setcurrstate("Sign Up")}>Click Here</span></p>
          }
         
          
        </div>
      </form>


    </div>
  )
}

export default login