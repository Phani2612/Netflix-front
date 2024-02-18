import React from 'react'
import '../App.css'

function Login()
 {
  return (
    
    <div class="container">
    <div class="login-container">
      <img src="" alt="Netflix Logo" class="logo"/>
      <form class="login-form">
        <input type="text" placeholder="Email or phone number" class="input-field" required/>
        <input type="password" placeholder="Password" class="input-field" required/>
        <button type="submit" class="login-button">Sign In</button>
        <label class="remember-me">
          <input type="checkbox"/> Remember me
        </label>
        <a href="#" class="need-help">Need help?</a>
      </form>
    </div>
  </div>


  )
}

export default Login