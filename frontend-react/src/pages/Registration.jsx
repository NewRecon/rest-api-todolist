import React from 'react'
import axios from 'axios';

export default function Registration() {

    const registration = async() => {
        await axios.post("http://localhost:8080/registration",{
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
        <button onClick={registration}>
          <a href="/">Registration</a>
        </button>
    </div>
  )
}  