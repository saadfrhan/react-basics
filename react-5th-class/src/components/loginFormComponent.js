import React, { useState } from 'react';
import './stateful.css'

function LoginForm() {

    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    
    let saveUserDetails = (e) => {
        e.preventDefault();
        console.log("Entered username is: " + userName)
        console.log("Entered password is: " + password)
        return false;
    }

    return ( 
        <form onSubmit={saveUserDetails}>
            <h1>22) Login Form</h1>
            Username is {userName} 
            <br />
        <label>Username: <br /> <input type='text' className="btn"required onChange={(e) => {setUserName(e.target.value)}}/></label><br /><br />
        Password is {password} <br />
        <label>Password: <br /> <input required type='password' className="btn" onChange={(e) => {setPassword(e.target.value)}} /></label><br />
        <button type='submit' className="btn">LOGIN</button>
        </form>
    )
}

export default LoginForm