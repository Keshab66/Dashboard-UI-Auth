import React, { useState } from 'react';
import './auth.css';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs'
import {auth,provider} from "../firebase/Firebase.config"
import {signInWithPopup} from "firebase/auth"
import { Navigate } from 'react-router-dom';

const SigninForm = () => {
const [value,setValue]=useState("");

const handleClick=()=>{
  signInWithPopup(auth,provider).then((data)=>{setValue(data.user.email)
 
  })

}




  return (
    <div className='Form'>
      <div className='board'>
        <h2>board</h2>
      </div>
      <div className='signin'>
        <div className='main-section'>
          <div className='upper-section'>
            <h3>Sign In</h3>
            <p>Sign in to your account</p>
            <div className='parent' style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <>
             {value?<Navigate to="/Menubar"/>:<button  class="login-with-bt" onClick={()=>{handleClick()}}>
                <FcGoogle size={20} /> Sign in with Google
              </button>}
            
            </>
             

              <button class="login-with-bt">
                <BsApple size={20} /> Sign in with Apple
              </button>
            </div>
          </div>
          <div className='form-section'>
            <form className='form'>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '18px' }}>
                <label>Email address</label>
                <input name="email" type='email' required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '18px' }}>
                <label>Password</label>
                <input name='password' type='password' required></input>
                <h6 style={{ color: 'blue' }}>forget password?</h6>
              </div>
              <button className='sign'>Sign In</button>
            </form>
            <div className='register'>
            <p>Don't have an account? <span>Register Here</span> </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SigninForm;