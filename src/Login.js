import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase.js";



function Login() {
    const signIn = () =>{
        //login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://scholar.harvard.edu/files/hackathon/files/discord.png?m=1596386214" alt=""/>

        </div>
        <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login