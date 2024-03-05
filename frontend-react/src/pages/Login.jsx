import React from 'react'
import axios from 'axios';

export default function Login() {
  const authorize = async() => {
    await axios.post("http://localhost:8080/login",{
            username: 'qwe',
            password: 'qwe'
    });
 }
  return (
    <div>
        {/* <form>
            <label for="username">Username</label>:
            <input type="text" id="username" name="username" autofocus="autofocus" /> <br />
            <label for="password">Password</label>:
            <input type="password" id="password" name="password" /> <br />
        </form> */}
        <button onClick={authorize}>
            <a href="/homePage">Log in</a>
        </button>
        <button>
            <a href="/registration">Sign in</a>
        </button>
        
    </div>
  )
}
