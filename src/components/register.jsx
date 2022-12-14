import React from "react";
import '../styles/login.css'

export const Register = () => {
    return (
        <form action="/action_page.php">
        <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

             <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
            <hr/>
        <button type="submit" className="registerbtn">Register</button>
    </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
</form>

    )
}