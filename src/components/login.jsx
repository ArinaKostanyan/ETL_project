import React from "react";
import '../styles/register.css'
export const Login = () => {
    return(
        <form action="action_page.php" method="post">

        <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label>
            <input type="checkbox" name="remember"/> Remember me
            </label>
        </div>

  <div className="container" style={{"backgroundColor": "#f1f1f1"}}>
    <a href="/" className="cancelbtn">Cancel</a>
  </div>
</form>
    )
}